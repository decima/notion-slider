<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
<ul class="text-left ml-8	">
    <li class="my-1">

        <i class="fas fa-square" class:fa-check-square={item.block.to_do.checked}></i>
        <span class="ml-2">        <RichText richText={item.block.to_do.rich_text}/>
    </span>
        <slot/>
    </li>
</ul>
