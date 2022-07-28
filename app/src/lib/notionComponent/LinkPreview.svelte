<script>
    import {onMount} from "svelte";

    let ogCard;
    let url
    export let item;
    onMount(async () => {
        url = item.block.link_preview.url;
        const response = await fetch(`/api/url/meta?url=${url}`)
        ogCard = await response.json()
    })
</script>
{#if ogCard }
    <div class=" bg-white p-4 rounded m-2">
        <div class="flex w-full gap-2">
            <img class="rounded" style="max-width: 20%; height:auto;" src={ogCard?.images[0]?.url }/>
            <div class="flex flex-col">
                <h2 class="text-2xl">{ogCard?.title}</h2>
                <span class=" font-thin">{ogCard?.description}<br/></span>
                <a class="mt-auto text-xs" href="{url}" target="_blank">{url}</a>
            </div>
        </div>
    </div>
{/if}