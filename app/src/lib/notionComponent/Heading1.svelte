<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import ToggleIcon from "./ToggleIcon.svelte";

    export let item;
    export let expanded = false;
</script>
<div class:toggler={item.has_children}>
    <h1 class="text-6xl" on:click={()=>{expanded=!expanded}}>
        {#if item.has_children}
            <ToggleIcon bind:expanded/>

        {/if}
        <RichText richText={item.block.heading_1.rich_text}/>
    </h1>
    {#if expanded}
        <slot></slot>
    {/if}
</div>
