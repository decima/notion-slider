import {writable} from "svelte/store";


export function getNotionAuth() {
    const data = JSON.parse(localStorage.getItem("notion_auth"))
    return data?.access_token ?? false;

}


function sessionInitializer() {
    const {subscribe, set, update} = writable(null);

    if (getNotionAuth() !== false) {
        set(true)
    }

    return {
        subscribe,
        logout() {
            set(false)
            localStorage.removeItem("notion_auth")

        },
        store(data) {
            if (!data?.access_token) {
                set(false)
            }
            set(true)
            localStorage.setItem("notion_auth", JSON.stringify(data))
        },

    }
}


export const session = sessionInitializer();
