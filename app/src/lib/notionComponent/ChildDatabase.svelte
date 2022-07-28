<script>
    import Default from "./Default.svelte";

    export let item
</script>
<iframe class="w-full h-full" src="/database/{item.block.id}"></iframe>

<Default bind:item/>