<script>
    import Renderer from "./Renderer.svelte";
    export let item;
</script>
<div class="flex gap-4 flex-col md:flex-row">
    {#each item.children as child,id }
        <div class="md:max-w-[50%] col">
            <Renderer items={[child]} on:open on:close on:mountedToggle></Renderer>
        </div>
    {/each}
</div>