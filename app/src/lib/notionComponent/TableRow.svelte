<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>

<tr>
    {#each item.block.table_row.cells as cell}
        <td>

            <RichText richText={cell}/>
            <slot></slot>

        </td>
    {/each}

</tr>