<script>
    import {loadEmbedding} from "./Embeddings/embeddings.js";
    import Default from "./Default.svelte";

    export let item;
</script>

{#if item.block.video.external.url}
    <svelte:component this="{loadEmbedding(item.block.video.external.url)}" url={item.block.video.external.url}>
        <slot/>
    </svelte:component>
{:else}
    <Default bind:item/>
{/if}
