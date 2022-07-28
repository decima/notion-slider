import {readable} from "svelte/store";


export const globalSettings = readable({url: "/", client_id: ""},
    async function start(set) {
        const response = await fetch("/api")
        const e = await response.json();
        set(e)
    });

