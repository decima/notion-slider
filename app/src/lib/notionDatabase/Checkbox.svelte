<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
<input readonly type="checkbox" class="checkbox checkbox-primary" bind:checked={item.checkbox} />

