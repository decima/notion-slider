<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import ToggleIcon from "./ToggleIcon.svelte";

    export let item;
    export let expanded = false;
</script>
<div class:toggler={item.has_children}>
    <h3  class="text-2xl" on:click={()=>{expanded=!expanded}}>
        {#if item.has_children}
            <ToggleIcon bind:expanded/>

        {/if}
        <RichText richText={item.block.heading_3.rich_text}/>
    </h3>
    {#if expanded}
        <slot></slot>
    {/if}
</div>
