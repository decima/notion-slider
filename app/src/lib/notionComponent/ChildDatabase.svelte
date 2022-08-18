<script>
    import Default from "./Default.svelte";

    export let item
    let frame;
</script>
<iframe class="w-full h-full" frameborder="0" src="/database/{item.block.id}" bind:this={frame}></iframe>

<Default bind:item/>