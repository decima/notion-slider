<script>
    import Default from "./Default.svelte";
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item = {}
</script>
<p class="text-left">
    <RichText richText={item.block.paragraph.rich_text}/>
    <slot>


    </slot>
</p>