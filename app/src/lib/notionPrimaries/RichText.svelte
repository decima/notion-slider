<script>
    import RichTextItem from "./RichTextItem.svelte";

    export let richText = [];
    export let overrideStyle=false;

</script>
{#if richText }
    {#each richText as r }
        <RichTextItem richText={r} bind:overrideStyle/>
    {/each}
{/if}
