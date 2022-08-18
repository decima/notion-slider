<script>
    import DateText from "./DateText.svelte";

    export let dateObject = {start: null}
</script>
{#if dateObject}
    <DateText date={dateObject.start}></DateText>
    {#if dateObject.end}
        <br/>
        ➡
        <DateText date={dateObject.end}></DateText>
    {/if}
{/if}
