<script>
    import {onMount} from "svelte";

    export let url = null;
    let content = ""
    onMount(async () => {
        if (url !== null) {
            let encoded = encodeURI(`https://publish.twitter.com/oembed?url=${url}`);
            const response = await fetch(`/api/url/fetch?url=${encoded}`)
            const json = await response.json()
            content = json.html
        }
    })

</script>

<div>
    {@html content}
</div>
