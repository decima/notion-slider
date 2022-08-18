<script>

    import {getDatabase} from "../stores/api.js";
    import {onMount} from "svelte";
    import {loadDBComponent} from "../notionDatabase/components.js";

    export let id;
    let db
    onMount(async () => {
            db = await getDatabase(id)
        console.log(db)
        }
    )
</script>
{#if db && db.database }

    <table class="table w-full">
        <thead>
        <tr>
            {#each Object.keys(db?.database?.properties ?? {}) as prop }
                <th>
                    {prop}
                </th>

            {/each}


        </tr>
        </thead>
        <tbody>
        {#each db?.content?.results as row }
            <tr>
                {#each Object.keys(db?.database?.properties ?? {}) as prop }
                    <td>
                        <svelte:component this={loadDBComponent(row?.properties[prop]?.type)}
                                          item={row?.properties[prop]}/>
                    </td>
                {/each}
            </tr>

        {/each}
        </tbody>
    </table>
    <small>The database feature does not handle filters.</small>
{/if}