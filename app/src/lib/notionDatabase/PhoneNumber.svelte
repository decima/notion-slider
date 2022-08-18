<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
{#if item.phone_number}
    <i class="fas fa-phone"></i>
{/if}
{item.phone_number}
