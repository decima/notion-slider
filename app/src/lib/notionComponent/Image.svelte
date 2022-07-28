<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item

    function toJSON(obj) {
        return JSON.stringify(obj)
    }
</script>
<div class="flex h-full py-24">
    <div class="flex flex-col">
        <div class="h-2/3">
            {#if item.block.image.type == "file"}
                <img src="{item.block.image.file.url}" class="object-scale-down mx-auto"/>

            {:else if item.block.image.type == "external"}
                <img src="{item.block.image.external.url}" class="object-scale-down mx-auto"/>

            {/if}
        </div>
        <span class="text-xs h-1/3 px-10">
            <RichText richText={item.block.image.caption}/>
        </span>
    </div>
</div>
<slot></slot>

<style>
img{
    height: 100%;
    object-fit: scale-down;
    @apply rounded-xl;
}
</style>