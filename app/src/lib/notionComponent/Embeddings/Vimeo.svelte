<script>
    import {onMount} from "svelte";

    let content
    export let url = null;
    onMount(async () => {
        if (url !== null) {
            let encoded = encodeURI(`https://vimeo.com/api/oembed.json?url=${url}`);
            const response = await fetch(`/api/url/fetch?url=${encoded}`)
            const json = await response.json()
            content = json.html
        }
    })

</script>
<div class=" h-96">
    {@html content}
</div>


