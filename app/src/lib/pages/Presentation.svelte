<script>
    import {onMount} from "svelte";
    import {slide} from "../stores/slide.js";
    import Renderer from "../notionComponent/Renderer.svelte";
    import bespoke from "bespoke";
    import keys from "bespoke-keys";
    import touch from "bespoke-touch";
    import hash from "bespoke-hash";
    import scale from "bespoke-scale";
    import classes from "bespoke-classes";
    import "../../assets/bespoke.scss";
    import {resolveImage} from "../stores/api.js";
    import Icon from "../notionComponent/Icon.svelte";
    import RichText from "../notionPrimaries/RichText.svelte";
    import hljs from "highlight.js";

    export let location, navigate;
    export let id;
    let presentation;
    onMount(async () => {
        try{
        await slide.loadPage(id)
        hljs.highlightAll();
        bespoke.from(presentation, [
            keys(),
            hash(),
            classes(),
            touch(),
        ]);

        }catch (e) {
            loadingError=true;
        }

    })
    let loadingError=false;
</script>
<div bind:this={presentation}>
    {#if !$slide.loading}
        <section>
            <div  class="bg-center bg-cover hero h-screen w-screen" style="background-image:url({ resolveImage($slide.page?.cover) })">
            <div class="hero-overlay bg-opacity-50 "></div>

            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">

                    {#if $slide.page.icon}
                    <div class="text-7xl">
                        <Icon icon={$slide.page.icon}/>
                    </div>
                    {/if}
                <h1 class="mb-5 text-7xl font-bold">

                    {#if $slide?.page?.properties?.Name}
                        <RichText richText={$slide?.page?.properties?.Name?.title} overrideStyle={true}/>
                    {:else if $slide?.page?.properties?.title}
                        <RichText richText={$slide?.page?.properties?.title?.title} overrideStyle={true}/>
                    {/if}

                </h1>
                </div>

            </div>
            </div>
        </section>
    {#each $slide.sections as section}
        <section class=" p-4 flex-col flex-grow container mx-auto">

            {#each section as item}
                <div  class:flex-1={item.type=='child_database'}>
                <Renderer items={[item]}/>
                </div>
            {/each}
        </section>
    {/each}
        {:else}

        loading... it may takes several minutes depending of the length of your document and the speed of notion API.

        {#if loadingError}
            <h1 class="text-5xl">
            An error occurred during loading from notion, try to refresh 💪. If the problem persist, contact me ✉️.
            </h1>
            {/if}
    {/if}
</div>