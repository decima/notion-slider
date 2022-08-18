<script>
    import {onMount} from "svelte";
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;

</script>
<div class="overflow-x-auto">

    <table class="table w-full" class:col-header={item.block.table.has_column_header}
           class:row-header={item.block.table.has_row_header}>

        {#if item.block.table.has_row_header }
            <thead>
            <tr>
                {#each item.children[0].block.table_row.cells as cell}
                    <th>
                        <RichText richText={cell}/>
                    </th>
                {/each}
            </tr>
            </thead>
            <tbody>
            {#each item.children as child,i}
                {#if i > 0}
                    <tr>
                        {#each child.block.table_row.cells as cell,j}
                            {#if j === 0 && item.block.table.has_column_header}
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
        {:else}

            <td></td>
        {/if}


    </table>


</div>
