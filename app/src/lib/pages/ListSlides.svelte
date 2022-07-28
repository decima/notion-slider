<script>
    import {onMount} from "svelte";
    import {listFiles} from "../stores/api.js";

    let data = null;
    onMount(async () => {
        data = await listFiles()
    })
</script>
<div class="h-full pt-20 border-box bg-lime-300">
    <div class="w-2/3 mx-auto bg-white p-4 rounded ">
        {#if data }
            <ul>

                {#each Object.entries(data).sort((a, b) => a[1].name.localeCompare(b[1].name)) as [slideId, slide]}
                    <li>
                        {slide.name}
                        <a href="/slides/{slideId}" target="_blank">
                            <i class="fa-solid fa-presentation"></i>
                        </a>
                        <a href="{slide.url}" target="_blank"><i class="fa-solid fa-file-lines"></i></a>


                    </li>
                {/each}
            </ul>
        {:else}
            Loading...
        {/if}
    </div>
</div>

<style>
    ul {
        @apply pl-4;
    }
</style>