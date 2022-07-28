<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
<RichText richText={item.title}></RichText>
