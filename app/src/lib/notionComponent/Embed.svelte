<script>
    import {loadEmbedding} from "./Embeddings/embeddings.js";

    export let item;

</script>

<svelte:component this="{loadEmbedding(item.block.embed.url)}" url={item.block.embed.url}>
    <slot/>
</svelte:component>
