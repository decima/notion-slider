package main

import (
	"bytes"
	"context"
	"encoding/json"
	"flag"
	"github.com/decima/notionapi"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/katera/og"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

type Presentation struct {
	LastEdited time.Time
	Page       *notionapi.Page `json:"page"`
	Blocks     []TreeBlock     `json:"blocks"`
}

var oauthClientId string
var oauthClientSecret string
var hostAndPort string
var domain string

func init() {
	flag.StringVar(&oauthClientId, "client_id", "NO_CLIENT_ID_PROVIDED", "Client Id to use")
	flag.StringVar(&oauthClientSecret, "client_secret", "NO_CLIENT_SECRET_PROVIDED", "Client Secret to use")
	flag.StringVar(&hostAndPort, "host", "0.0.0.0:9000", "Host and Port to use")
	flag.StringVar(&domain, "domain", "", "http domain to use")
	flag.Parse()
}

func main() {
	log.Printf("staring %v (with client id %v) ", hostAndPort, oauthClientId)
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./app/dist", false)))
	r.NoRoute(func(c *gin.Context) {
		c.File("./app/dist/index.html")
	})
	r.GET("/api/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, "up")
	})
	r.GET("/api", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"url":       domain,
			"client_id": oauthClientId,
		})
	})
	r.GET("/api/slides", func(c *gin.Context) {
		client := initClient(c)
		fileList := listFiles(client)
		c.JSON(http.StatusOK, fileList)
	})

	r.GET("/api/slides/:id", func(c *gin.Context) {

		id := c.Param("id")
		client := initClient(c)
		page := readPage(client, id)

		c.JSON(http.StatusOK, Presentation{
			LastEdited: time.Now(),
			Page:       page,
			Blocks:     readFile(client, id),
		})
	})
	r.GET("/api/notion_access_token", func(c *gin.Context) {
		code := c.Query("code")
		url := c.Query("url")
		client := &http.Client{}
		e := gin.H{"grant_type": "authorization_code", "code": code, "redirect_uri": url}
		f, _ := json.Marshal(e)
		req, _ := http.NewRequest("POST", "https://api.notion.com/v1/oauth/token", bytes.NewReader(f))
		req.Header.Set("Content-Type", "application/json")
		req.SetBasicAuth(oauthClientId, oauthClientSecret)
		res, _ := client.Do(req)
		b, _ := ioutil.ReadAll(res.Body)
		c.Writer.Write(b)
	})
	r.GET("/api/database/:id", func(c *gin.Context) {
		dbid := notionapi.DatabaseID(c.Param("id"))
		client := initClient(c)
		database, _ := client.Database.Get(context.Background(), dbid)
		content := retrieveData(client, dbid)
		c.JSON(http.StatusOK, gin.H{"database": database, "content": content})
	})

	r.GET("/api/url/fetch", func(c *gin.Context) {
		url := c.Query("url")
		res, _ := http.Get(url)
		c.Status(res.StatusCode)
		io.Copy(c.Writer, res.Body)
	})

	r.GET("/api/url/meta", func(c *gin.Context) {
		url := c.Query("url")
		res, _ := og.GetOpenGraphFromUrl(url)
		c.JSON(http.StatusOK, res)

	})

	r.Run(hostAndPort) // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

func retrieveData(client *notionapi.Client, id notionapi.DatabaseID) *notionapi.DatabaseQueryResponse {
	res2, err := client.Database.Query(context.Background(), id, &notionapi.DatabaseQueryRequest{
		StartCursor: "",
		PageSize:    100,
	})
	if err != nil {
		log.Println(err)
	}
	return res2
}

func initClient(c *gin.Context) *notionapi.Client {
	accessToken := c.GetHeader("access-token")
	return notionapi.NewClient(notionapi.Token(accessToken))

}
func readPage(client *notionapi.Client, id string) *notionapi.Page {
	page, _ := client.Page.Get(context.Background(), notionapi.PageID(id))
	return page
}

func readFile(client *notionapi.Client, id string) []TreeBlock {
	return readBlock(client, notionapi.BlockID(id))
}

type TreeBlock struct {
	Type        string          `json:"type"`
	Block       notionapi.Block `json:"block"`
	Children    []TreeBlock     `json:"children"`
	HasChildren bool            `json:"has_children"`
}

func readBlock(client *notionapi.Client, id notionapi.BlockID) []TreeBlock {
	var startCursor notionapi.Cursor
	var treeBlocks []TreeBlock

	for {
		pageChildrenBlocks, _ := client.Block.GetChildren(context.Background(), id, &notionapi.Pagination{PageSize: 1000, StartCursor: startCursor})

		for _, b := range pageChildrenBlocks.Results {
			block := b.(notionapi.Block)
			treeB := TreeBlock{Type: block.GetType().String(), Block: block, Children: []TreeBlock{}, HasChildren: block.GetHasChildren()}
			if block.GetHasChildren() {
				treeB.Children = readBlock(client, block.GetID())
			}
			treeBlocks = append(treeBlocks, treeB)
		}
		if !pageChildrenBlocks.HasMore {
			break
		}
		startCursor = notionapi.Cursor(pageChildrenBlocks.NextCursor)
	}
	return treeBlocks
}

func searchInDatabase(client *notionapi.Client, id notionapi.DatabaseID) []notionapi.Page {
	propertyFilter := notionapi.PropertyFilter{
		Property: "slides",
		Checkbox: &notionapi.CheckboxFilterCondition{
			Equals: true,
		},
	}

	var pagesToReturn []notionapi.Page
	for {
		var cursor notionapi.Cursor
		dbQuery := notionapi.DatabaseQueryRequest{
			Filter:      &propertyFilter,
			PageSize:    100,
			StartCursor: cursor,
		}
		pages, err := client.Database.Query(context.Background(), id, &dbQuery)
		if err != nil {
			panic(err)
		}
		pagesToReturn = append(pagesToReturn, pages.Results...)

		if !pages.HasMore {
			break
		}
		cursor = pages.NextCursor
	}
	return pagesToReturn
}

type Document struct {
	Name string `json:"name"`
	URL  string `json:"url"`
}

func listFiles(client *notionapi.Client) map[string]Document {
	var cursor notionapi.Cursor
	var pages = map[string]Document{}
	for {
		searchRequest := notionapi.SearchRequest{
			Query:       "",
			PageSize:    100,
			StartCursor: cursor,
			Filter: map[string]string{
				"property": "object",
				"value":    "page",
			},
		}
		res, err := client.Search.Do(context.Background(), &searchRequest)
		if err != nil {
			panic(err)
		}
		for _, i := range res.Results {
			page := i.(*notionapi.Page)
			pageTitle := "~"

			var prop notionapi.Property

			if nameProperty, ok := page.Properties["Name"]; ok {
				prop = nameProperty
			}
			if titleProperty, ok := page.Properties["title"]; ok {
				prop = titleProperty
			}

			if prop != nil && len(prop.(*notionapi.TitleProperty).Title) > 0 {
				pageTitle = ""
				for _, titlePart := range prop.(*notionapi.TitleProperty).Title {
					pageTitle = pageTitle + titlePart.PlainText
				}
			}

			pages[string(page.ID)] = Document{
				Name: pageTitle,
				URL:  page.URL,
			}

		}
		if !res.HasMore {
			break
		}
		cursor = res.NextCursor
	}

	return pages

}
