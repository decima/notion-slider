<script>

    export let item;

</script>
{#each item.multi_select as select }
    <span class="color-{select.color}_background text-center p-2 m-0.5 float-left rounded">
        {select.name}
    </span>
{/each}