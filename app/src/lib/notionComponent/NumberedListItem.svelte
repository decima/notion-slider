<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
<ul class="text-left ml-8 list-disc	">
    <li>
        <RichText richText={item.block.numbered_list_item.rich_text}/>
        <slot/>
    </li>
</ul>
