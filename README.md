# notion Slider

_I promised to clean this code, but I lied, i'll do it one day._ 

Notion Slider is an utility tool which uses the notion API in order to transform a notion doc into some slides. 

demo : https://notion-slider.henri.run/


## Getting started

In order to develop/use this project, first you'll need : 

- golang 1.18+
- nodejs+yarn
- Client ID and secret from a **public** integration. The frontend server will run on localhost:3000, so you will have to add in the redirect URIs 'http://localhost:3000/auth'
- you will get your client secret as soon as you switch your app to public and save it. 

### Backend installation

in order to launch the project, just run :
```
go run . -client_id=CLIENTID -client_secret=SECRET -domain=http://localhost:3000/
```

This will start by default a server on 9000.

### Frontend installation
Go into the `/app` folder and run the following commands:
```
yarn && yarn dev
```
This will install every dependencies and should start the vite server on 3000. 

Then go to http://localhost:3000 and you can develop the frontend side.

### Alternatively painless solution (AKA Docker)

If you want to run your own instance, you can build it yourself with docker.
Just run `docker run -t notion-slider .`. This will build frontend and backend, and serve all this fun people on internal container port 9000.

Or alternatively if you don't want to suffer docker build, I provide built images of my app (for my personnal use :  decima/notion-slider:0.1 ).



You can also use docker-compose to run the image, write the following in a docker-compose.yml

```yaml
version: "3"
services:
  notionslider:
    # comment build key and uncomment image to not have to build your own image.
    # image: "decima/notion-slider:0.8.0"
    build: 
      context: . 
      args:
        VERSION: 0.8.0
    entrypoint:
      - ./NotionSlider
      - -client_id=CLIENT_ID
      - -client_secret=CLIENT_SECRET
      - -domain=http://localhost:11000/
    ports:
      - "11000:9000"
```

and run `docker-compose up`. (this will start localhost:11000 as it is declared in your file, don't forget to add this url in your integration in notion).


## Issues

Feel free to add, comment, fix any provided issues, this is an open source project, and it aims to stay like this. 