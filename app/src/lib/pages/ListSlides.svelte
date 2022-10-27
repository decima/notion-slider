<script>
    import {onMount} from "svelte";
    import {listFiles, resolveImage} from "../stores/api.js";

    let data = null;
    onMount(async () => {
        data = await listFiles()
        console.log(data)
    })
    const colors = [
        "bg-red-300", "bg-blue-400", "bg-teal-500", "bg-purple-300", "bg-indigo-200", "bg-gray-é00",
        "bg-stone-é00", "bg-orange-700", "bg-amber-600", "bg-yellow-600", "bg-lime-600", "bg-green-700",
        "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-sky-600"
    ];
    let elements = [];
    let searchTerm="";
    $: if (data) elements = Object.entries(data).sort((a, b) => a[1].name.localeCompare(b[1].name)).filter(item => JSON.stringify(item).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    let randomColorName = function () {
        return colors[Math.round(Math.random() * colors.length)];
    }
</script>
<div class="container mx-auto mt-4 pb-12">
    <div class="my-4 ">
        <input class="input" bind:value={searchTerm} placeholder="filter by words"/>
        <span class="ml-2">{ elements.length } results</span>
    </div>
    <div class="flex flex-col gap-6">
        {#if data}

            {#each elements as [slideId, slide]}
                <div class="card w-full justify-between shadow-xl bg-base-100 flex flex-row gap-4">
                    <div class="w-1/6">

                        <div class="h-32 bg-cover bg-center flex justify-center items-center {randomColorName()}"
                             style="background-image: url({resolveImage(slide.cover)})">
                            {#if !slide.cover}
                                <div class="uppercase">{slide.name.slice(0, 2)}</div>
                            {/if}
                        </div>
                    </div>
                    <div class=" w-4/6 flex flex-col gap-2 justify-center">
                        <h2 class="text-xl font-bold">
                            {slide.name}
                        </h2>
                        <div class="flex gap-1 w-full">
                            {#each slide.page.properties?.slideSettings?.multi_select || [] as tag }
                                <div class="badge badge-primary" on:click={()=>{searchTerm = tag.name}}>{tag.name}</div>
                            {/each}
                        </div>
                    </div>
                    <div class=" w-1/6 flex flex-col md:flex-row gap-2 items-center justify-center">
                        <a class="btn btn-primary w-2/5" href="/presentation/{slideId}" target="_blank">
                            <i class="fa-solid fa-presentation"></i>
                        </a>
                        <p></p>
                        <a href="{slide.url}" class="btn btn-secondary w-2/5" target="_blank">
                            <i class="fa-solid fa-file-lines"></i></a>


                    </div>


                </div>
            {/each}
        {/if}
    </div>

</div>
