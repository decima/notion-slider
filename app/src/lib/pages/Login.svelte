<script>
    import {onMount} from "svelte";
    import {navigate} from "svelte-navigator";
    import {session} from "../stores/session.js";
    import {globalSettings} from "../stores/globalSettings.js";

    onMount(() => {

        if ($session) {
            navigate("/slides")
        }
        globalSettings.subscribe(({client_id, url})=>{
            let redirectRoute = encodeURIComponent(url + "auth")
            window.location.href = "https://api.notion.com/v1/oauth/authorize?owner=user&client_id=" + client_id + "&redirect_uri=" + redirectRoute + "&response_type=code"
        })




    })
</script>
<div>Login...</div>