import Default from "./Default.svelte";
import Title from "./Title.svelte";
import Number from "./Number.svelte";
import Select from "./Select.svelte";
import MultiSelect from "./MultiSelect.svelte";
import People from "./People.svelte";
import Status from "./Status.svelte";
import Date from "./Date.svelte";
import RichText from "../notionPrimaries/RichText.svelte";
import PhoneNumber from "./PhoneNumber.svelte";
import Checkbox from "./Checkbox.svelte";
import Email from "./Email.svelte";
import Url from "./Url.svelte";
import Files from "./Files.svelte";

export const components = {
    "phone_number": PhoneNumber,
    "title": Title,
    "number": Number,
    "select": Select,
    "multi_select": MultiSelect,
    "people": People,
    "status": Status,
    "date": Date,
    "rich_text":RichText,
    "checkbox":Checkbox,
    "email":Email,
    "url":Url,
    "files":Files,
}

export function loadDBComponent(name) {
    if (components[name]) {
        return components[name]
    }
    return Default
}