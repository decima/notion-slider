import {navigate} from "svelte-navigator";
import {getNotionAuth} from "./session.js";

export const URL = "/api"

export function withHeaders(data = {}) {
    const token = getNotionAuth()
    let headers = new Headers()
    headers.set("access-token", token)

    return {
        ...data,
        headers: headers
    };
}


export function getTokenOrRedirect() {
    const token = getNotionAuth()
    if (token === false) {
        return navigate("/")
    }
    return token
}

export async function getInfo() {

    return await (await fetch(URL, withHeaders({}))).json()
}
export async function listFiles() {

    return await (await fetch(URL + "/slides", withHeaders({}))).json()
}

export async function getDatabase(id) {
    return await (await fetch(URL + "/database/" + id, withHeaders({}))).json()
}

export function resolveImage(obj) {
    if (!obj){
        return "no-preview";
    }
    const item = obj?.external || obj?.file

    return item?.url
}



