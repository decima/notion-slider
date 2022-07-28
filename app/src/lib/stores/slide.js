import {writable} from "svelte/store";

import {data} from "./demo.js"

import {URL, withHeaders} from "./api.js"
import {navigate} from "svelte-navigator";
import {getNotionAuth} from "./session.js";

function fakeText() {
    return data
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
    const {subscribe, set, update} = writable({loading: true, sections: [], page: {}});

    return {
        subscribe,
        async loadPage(pageId) {
            if (getNotionAuth() === false && pageId !== "demo") {
                return navigate("/")
            }

            set({loading: true, sections: [], page: {}})
            const loaded = await file(pageId)
            let section = []
            let data = [];
            let page = loaded.page
            for (let block of loaded.blocks) {
                if (block.type === "divider") {
                    data.push(section)
                    section = []
                } else {
                    section.push(block)
                }
            }
            data.push(section)
            set({
                page: page,
                sections: data,
            })
        }

    }
}


export const slide = slideInitializer();
