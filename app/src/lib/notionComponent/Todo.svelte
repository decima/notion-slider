<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
<ul class="text-left ml-8	">
    <li class="my-1">
        <input readonly type="checkbox" class="checkbox checkbox-primary" bind:checked={item.block.to_do.checked} />
        <span class="ml-2 decoration-black/40	" class:line-through={item.block.to_do.checked}>
            <RichText richText={item.block.to_do.rich_text}/>
    </span>
        <slot/>
    </li>
</ul>
