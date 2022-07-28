import Default from "./Default.svelte";
import Title from "./Title.svelte";
import Number from "./Number.svelte";
import Select from "./Select.svelte";
import MultiSelect from "./MultiSelect.svelte";
import People from "./People.svelte";
import Status from "./Status.svelte";
import Date from "./Date.svelte";

export const components = {
    "title": Title,
    "number": Number,
    "select": Select,
    "multi_select": MultiSelect,
    "people": People,
    "status": Status,
    "date": Date,
}

export function loadDBComponent(name) {
    if (components[name]) {
        return components[name]
    }
    return Default
}