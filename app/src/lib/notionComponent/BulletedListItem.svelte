<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
<ul class="text-left ml-8 p-2 list-disc">
    <li>
        <RichText richText={item.block.bulleted_list_item.rich_text}/>
        <slot/>
    </li>
</ul>
