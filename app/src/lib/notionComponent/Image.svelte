<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item

    function toJSON(obj) {
        return JSON.stringify(obj)
    }
</script>

<div class="card card-compact w-full bg-base-100 shadow-xl">
    <figure>
        {#if item.block.image.type == "file"}
            <img src="{item.block.image.file.url}" class="object-scale-down mx-auto w-full"/>

        {:else if item.block.image.type == "external"}
            <img src="{item.block.image.external.url}" class="object-scale-down mx-auto w-full"/>

        {/if}
    </figure>
    {#if item.block.image.caption}
        <div class="card-body">
            <small>
                <RichText richText={item.block.image.caption}/>
            </small>
        </div>
    {/if}
</div>
<slot></slot>

