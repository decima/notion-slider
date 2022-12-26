<script>
    import Renderer from "./Renderer.svelte";
    export let item;
</script>
<div class="flex gap-4 flex-col lg:flex-row">
    {#each item.children as child,id }
        <div class="col">
            <Renderer items={[child]} on:open on:close on:mountedToggle></Renderer>
        </div>
    {/each}
</div>

<style>
.col{
    max-width: 50%;
}

</style>