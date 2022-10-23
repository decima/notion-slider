<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;

</script>
<div class="overflow-x-auto">

    <table class="table w-full" class:col-header={item.block.table.has_column_header}
           class:row-header={item.block.table.has_column_header}>

        {#if item.block.table.has_column_header }

            <thead>
            <tr>
                {#each item.children[0].block.table_row.cells as cell}
                    <th>
                        <RichText richText={cell}/>
                    </th>
                {/each}
            </tr>
            </thead>
        {/if}

        <tbody>
        {#each item.children as child,i}
            {#if i > 0 || !item.block.table.has_column_header }
                <tr>
                    {#each child.block.table_row.cells as cell,j}
                        {#if j === 0 && item.block.table.has_row_header}
                            <th>
                                <RichText richText={cell}/>
                            </th>
                        {:else}
                            <td>
                                <RichText richText={cell}/>
                            </td>
                        {/if}
                    {/each}
                </tr>
            {/if}
        {/each}
        </tbody>


    </table>


</div>
