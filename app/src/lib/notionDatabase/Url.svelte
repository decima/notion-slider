<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
{#if item.url}
<a href="{item.url}" target="_blank" class="btn btn-link">{item.url}</a>
    {/if}
