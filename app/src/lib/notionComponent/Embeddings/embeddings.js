import Twitter from "./Twitter.svelte";
import Unsupported from "./Unsupported.svelte";
import GMaps from "./GMaps.svelte";
import Vimeo from "./Vimeo.svelte";
import Dailymotion from "./Dailymotion.svelte";
import Youtube from "./Youtube.svelte";

const embeddings = {
    "twitter.com": Twitter,
    "google.com/maps": GMaps,
    "vimeo.com": Vimeo,
    "dailymotion.com": Dailymotion,
    "youtube.com": Youtube,
    "youtu.be": Youtube,
}

export function loadEmbedding(url) {
    for (const item in embeddings) {
        console.log(url, item)
        if (url.includes(item)) {
            return embeddings[item]
        }
    }
    return Unsupported
}