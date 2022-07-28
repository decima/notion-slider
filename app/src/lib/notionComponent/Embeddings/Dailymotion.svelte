<script>
    import {onMount} from "svelte";

    let videoCode = ""
    export let url = "";
    onMount(async () => {
        videoCode = url.split('.com/')[1]
    })

</script>
<iframe class="w-full h-96"
        type="text/html" src="https://www.dailymotion.com/embed/{videoCode}"
        allowfullscreen allow="autoplay"></iframe>



