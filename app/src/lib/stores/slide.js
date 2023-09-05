import {writable} from "svelte/store";

import {data} from "./demo.js"

import {URL, withHeaders} from "./api.js"
import {navigate} from "svelte-navigator";
import {getNotionAuth} from "./session.js";


const DEFAULT_SETTINGS = {showTitle: true, showIcon: true, backgroundShadow: true, showFirst: true, TOCLevel: 3};


function fakeText() {
    return data
}

function findAllTitles(items, registry,settings) {
    for (const item of items) {
        if (["heading_1", "heading_2", "heading_3"].slice(0,settings.TOCLevel).includes(item.type)) {
            const title = {type: item.type, content: item.block[item.type], children: []}
            registry.push(title)

            continue;
        }
        if(item.children===null){
            console.log(item)
        }
        findAllTitles(item.children, registry,settings)
    }
}


async function file(id) {
    if (id === "demo") return fakeText();
    let res = await (await fetch(URL + "/slides/" + id, withHeaders({}))).json()
    if (res.blocks == null) {
        res.blocks = []
    }
    return res
}


let pageId = null


function slideInitializer() {
    const {subscribe, set, update} = writable({
        loading: true,
        sections: [],
        page: {},
        perPageToggles: {},
        settings: {}
    });

    function processToggles(section, field) {
        for (const item of section) {
            if (['toggle', 'heading_1', 'heading_2', 'heading_3'].includes(item.type) && item.has_children) {
                field.push(item.block.id);
                processToggles(item.children, field)
            }
        }
        return field;
    }

    function processSettings(page) {
        let newSettings = {};

        if (!page?.properties?.slideSettings?.multi_select) {
            return DEFAULT_SETTINGS
        }
        for (const setting of page.properties.slideSettings.multi_select) {
            switch (setting.name) {
                case "hideTitle":
                    newSettings.showTitle = false;
                    break;
                case "hideIcon":
                    newSettings.showIcon = false;
                    break;
                case "noBackgroundShadow":
                    newSettings.backgroundShadow = false;
                    break;
                case "hideFirst":
                    newSettings.showFirst = false;
                    break;
                case "2levelTOC":
                    newSettings.TOCLevel = 2;
                    break;
                case "1levelTOC":
                    newSettings.TOCLevel = 1;
            }
        }
        return {...DEFAULT_SETTINGS, ...newSettings};

    }

    return {
        subscribe,
        async loadPage(pageId) {
            if (getNotionAuth() === false && pageId !== "demo") {
                return navigate("/")
            }

            set({loading: true, sections: [], page: {}, perPageToggles: {}, settings: {}, toc: []})
            const loaded = await file(pageId)
            let toc = []
            let section = []
            let perPageToggles = {};
            let data = [];
            let page = loaded.page
            let settings = processSettings(page)
            findAllTitles(loaded.blocks, toc, settings)

            let currentPage = 0;
            for (let block of loaded.blocks) {
                if (block.type === "divider") {
                    data.push(section)
                    perPageToggles[currentPage] = processToggles(section, []);
                    currentPage++
                    section = []
                } else {
                    section.push(block)
                }
            }
            data.push(section)
            perPageToggles[currentPage] = processToggles(section, []);
            currentPage++

            set({
                page,
                sections: data,
                perPageToggles,
                settings,
                toc,
            })
        }

    }
}


export const slide = slideInitializer();
