<script>
    import {useLocation} from "svelte-navigator";
    import {session} from "./stores/session.js";
    import {onMount} from "svelte";
    import {themeChange} from "theme-change";
    import {globalSettings} from "./stores/globalSettings.js";

    const location = useLocation();
    let y = 0;
    onMount(() => {
        themeChange(false)
        // 👆 false parameter is required for svelte
    })

    let themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk",
        "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "lpl", "lpl-v2", "lpl-v3","lpl-v3-dark"];
</script>
<svelte:window bind:scrollY={y}/>
{#if !$location.pathname.startsWith("/slides/") && !$location.pathname.startsWith("/database/") && !$location.pathname.startsWith("/presentation/") }<!--
    --{#if !$location.pathname.startsWith("/slides/") && !$location.pathname.startsWith("/database/") } -->

    <div class="navbar bg-base-100 flex-col md:flex-row">
        <div class="flex-1">
            <a href="/" class="btn btn-ghost normal-case text-xl">Notion Slider&nbsp;
                <div class="badge badge-primary">{$globalSettings.version}</div>
            </a>

        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
                <li>
                    <a href="/how-to">How to?</a>
                </li>
                <li>
                    <select data-choose-theme>
                        <option value="">Default</option>
                        {#each themes as theme}
                            <option value={theme}>{theme}</option>

                        {/each}
                    </select>
                </li>

                {#if $session}
                    <li>
                        <a href="/slides">Slides</a>
                    </li>

                    <li>
                        <a href="/logout">Logout</a>
                    </li>
                {:else}
                    <li>
                        <a href="/login">Login</a>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
{/if}
