<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import ToggleIcon from "./ToggleIcon.svelte";

    export let item;
    export let expanded = false;
</script>
<div class:toggler={item.has_children}>
    <h2  class="text-4xl" on:click={()=>{expanded=!expanded}}>
        {#if item.has_children}
            <ToggleIcon bind:expanded/>

        {/if}
        <RichText richText={item.block.heading_2.rich_text}/>
    </h2>
    {#if expanded}
        <slot></slot>
    {/if}
</div>
