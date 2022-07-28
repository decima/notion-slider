<script>

    import {getDatabase} from "../stores/api.js";
    import {onMount} from "svelte";
    import {loadDBComponent} from "../notionDatabase/components.js";
    import Default from "../notionDatabase/Default.svelte";

    export let id;
    let db
    onMount(async () => {
            db = await getDatabase(id)
        }
    )
</script>
{#if db && db.database }

    <table>
        <tr>
            {#each Object.keys(db?.database?.properties??{}) as prop }
                <th>
                    {prop}
                </th>

            {/each}


        </tr>
        {#each db?.content?.results as row }
            <tr>
                {#each Object.keys(row?.properties??{}) as prop }
                    <td>
                        <svelte:component this={loadDBComponent(row?.properties[prop]?.type)} item={row?.properties[prop]}/>
                    </td>
                {/each}
            </tr>

        {/each}

    </table>
{/if}

<style>
    th,td{
        @apply p-2;
    }
</style>
