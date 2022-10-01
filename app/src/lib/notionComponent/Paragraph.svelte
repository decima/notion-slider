<script>
    import Default from "./Default.svelte";
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item = {}
</script>
<p class="text-left text-justify color-{item.block.paragraph.color??'none'}">
    <RichText richText={item.block.paragraph.rich_text}/>
    <slot></slot>
</p>