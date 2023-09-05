<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item
</script>

<div class="card card-compact bg-base-100 max-h-full">
    <figure>
        {#if item.block.image.type == "file"}
            <img src="{item.block.image.file.url}" class="object-scale-down mx-auto"/>

        {:else if item.block.image.type == "external"}
            <img src="{item.block.image.external.url}" class="object-scale-down mx-auto"/>

        {/if}
    </figure>
    {#if item.block.image.caption}
        <div class="card-body text-center">
            <small>
                <RichText richText={item.block.image.caption}/>
            </small>
        </div>
    {/if}
</div>
<slot></slot>

