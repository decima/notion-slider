<script>
    import {loadComponent} from "./components.js";
    import Renderer from "./Renderer.svelte";
    import {createEventDispatcher} from "svelte";
    export let items = []
    const dispatch=createEventDispatcher();

</script>

{#each items as item }
    {#if item && item.type }
            <svelte:component this="{loadComponent(item.type)}" bind:item on:open on:close on:mountedToggle>
                {#if item.has_children}
                    <Renderer items={item.children} on:open on:close on:mountedToggle/>
                {/if}
            </svelte:component>
    {:else}
        UNDEFINED.
    {/if}

{/each}