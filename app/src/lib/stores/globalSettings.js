import {readable} from "svelte/store";
import {getInfo} from "./api.js";


export const globalSettings = readable({url: "/", client_id: "", version: "dev"},
    async function start(set) {
        set(await getInfo())
    });

