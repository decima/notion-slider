<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import Renderer from "./Renderer.svelte";
    import ToggleIcon from "./ToggleIcon.svelte";

    export let item;
    export let expanded = false;
</script>
<div class:toggler={item.has_children}>
    <div on:click={()=>{expanded=!expanded}}>
        {#if item.has_children}
            <ToggleIcon bind:expanded/>
        {/if}
        <RichText richText={item.block.toggle.rich_text}/>
    </div>

    <div>
        {#if expanded}
            <slot></slot>
        {/if}
    </div>
</div>
