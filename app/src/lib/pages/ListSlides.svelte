<script>
    import {onMount} from "svelte";
    import {listFiles} from "../stores/api.js";

    let data = null;
    onMount(async () => {
        data = await listFiles()
        console.log(data)
    })
</script>
<div class="overflow-x-auto w-1/2 mx-auto">
    <table class="table w-full">

        <tbody>
        {#if data}
        {#each Object.entries(data).sort((a, b) => a[1].name.localeCompare(b[1].name)) as [slideId, slide]}
            <tr>
                <th>{slide.name}</th>
                <td><a href="/presentation/{slideId}" target="_blank">
                    <i class="fa-solid fa-presentation"></i>
                </a>
                </td>
                <td>
                    <a href="{slide.url}" target="_blank"><i class="fa-solid fa-file-lines"></i></a>
                </td>
            </tr>

        {/each}
            {/if}

        </tbody>
    </table>
</div>