<script>
    import {onMount} from "svelte";
    import {navigate} from "svelte-navigator";
    import {session} from "../stores/session.js";

    onMount(() => {
        session.logout()
        navigate("/")
    })
</script>
