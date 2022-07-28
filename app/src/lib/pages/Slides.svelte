<script>

    import {onMount} from "svelte";
    import Renderer from "../notionComponent/Renderer.svelte";
    import Reveal from "reveal.js";

    import '../../assets/fullReveal.scss'
    import '../../assets/reveal.scss'

    import RichText from "../notionPrimaries/RichText.svelte";
    import Icon from "../notionComponent/Icon.svelte";
    import "reveal.js/plugin/highlight/monokai.css";
    import hljs from "highlight.js";
    import {slide} from "../stores/slide.js";
    import {resolveImage} from "../stores/api.js";

    export let location;
    export let navigate;
    export let id;
    export let data = null;
    export let page = null;
    onMount(async () => {
        await loadPage()
    })

    async function loadPage() {
        await slide.loadPage(id)


        let active = false;
        const RevealHighlight = (await import("reveal.js/plugin/highlight/highlight.js"));
        const RevalKatex = (await import("reveal.js/plugin/math/katex.js"));
        await Reveal.initialize({
            controls: false,
            center: false,
            hash: true,
            progress: true,
            mouseWheel: true,
            hideAddressBar: true,
            transitionSpeed: "slow", // default/fast/slow
            transition: "slide",
            backgroundTransition: "slide", // none/fade/slide/convex/concave/zoom
            plugins: [RevalKatex, RevealHighlight],

        });
        hljs.highlightAll();
        Reveal.on("slidetransitionend", event => {
            event.indexh === 6 ? (active = true) : (active = false);
        });
        const arrowDown = () => Reveal.down();
    }


    var isClosed = true;

</script>
<div class="reveal">
    <div class="slides">
        {#if !$slide.loading}
            <section data-background-image={ resolveImage($slide.page?.cover) } class="h-full w-full flex items-center">
                <div class="w-full h-full relative flex items-center">
                    <h1 class="text-5xl font-bold absolute text-white p-4 backdrop-blur-sm  bg-black/10 border border-white/20 flex rounded-xl drop-shadow">
                        {#if $slide.page.icon}
                            <Icon icon={$slide.page.icon}/>
                        {/if}
                        {#if $slide?.page?.properties?.Name}
                            <RichText richText={$slide?.page?.properties?.Name?.title} overrideStyle={true}/>
                        {:else if $slide?.page?.properties?.title}
                            <RichText richText={$slide?.page?.properties?.title?.title} overrideStyle={true}/>
                        {/if}

                    </h1>
                </div>
            </section>
            {#each $slide.sections as section}
                <section class="h-screen w-screen">
                    {#each section as item}
                        <Renderer items={[item]}/>
                    {/each}
                </section>

            {/each}


        {:else}
            LOADING...
        {/if}
    </div>
</div>