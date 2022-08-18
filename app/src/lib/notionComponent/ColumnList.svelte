<script>
    import Renderer from "./Renderer.svelte";

    export let item;
</script>
<div class="flex gap-1">
    {#each item.children as child,id }
        <div class="flex-1">
        <Renderer items={[child]}></Renderer>
        </div>
        {#if id < item.children.length-1}
            <div class="divider divider-horizontal"></div>
            {/if}
    {/each}
</div>

<style>


</style>