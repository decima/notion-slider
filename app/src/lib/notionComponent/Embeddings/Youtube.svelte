<script>
    import {onMount} from "svelte";

    export let url;
    let embedUrl;
    let done = false
    onMount(() => {
        if (url) {
            if (url.includes("embed")) {
                embedUrl= url
            }
            let code = ""
            if (url.includes("youtu.be")) {
                code = url.split("youtu.be")[1]
            }
            if (url.includes("youtube.com")) {
                code = url.split("v=")[1]
                code = code.split("&")[0]
            }
            console.log("pass: " + code)
            embedUrl = "https://youtube.com/embed/" + code
            done = true
        }
    })

</script>
<div class=" h-96 m-1">
    <iframe  class="w-full h-full" src="{embedUrl}">

    </iframe>
</div>


