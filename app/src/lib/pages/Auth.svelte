<script>
    import {onMount} from "svelte";
    import {session} from "../stores/session.js";

    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        let path = window.location.href.split('?')[0]

        const res = await fetch("api/notion_access_token?code=" + code + "&url=" + path)
        const authResponse = await res.json()
        if (authResponse.access_token) {
            session.store(authResponse)

            window.location.href = "/"
        }
    })
</script>