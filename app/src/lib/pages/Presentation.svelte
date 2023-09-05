<script>
    import {onMount} from "svelte";
    import {slide} from "../stores/slide.js";
    import Renderer from "../notionComponent/Renderer.svelte";
    import bespoke from "bespoke";
    import touch from "bespoke-touch";
    import hash from "bespoke-hash";
    import classes from "bespoke-classes";
    import "../../assets/bespoke.scss";
    import {resolveImage} from "../stores/api.js";
    import Icon from "../notionComponent/Icon.svelte";
    import RichText from "../notionPrimaries/RichText.svelte";
    import hljs from "highlight.js";

    export let location, navigate;
    export let id;
    let presentation;
    let currentSlide = 0;
    let listOfToggleComponents = {};
    let toggleDictionary = {};
    slide.subscribe((data) => {
        toggleDictionary = data.perPageToggles;
    })
    const keyBind = function () {
        return function (deck) {


            document.addEventListener('keydown', function (e) {


                if (e.key === 'PageDown' || // PAGE DOWN
                    (e.key === ' ' && !e.shiftKey) || // SPACE WITHOUT SHIFT
                    (e.key === 'ArrowRight') // RIGHT
                ) {
                    goNext(deck);
                }

                if (e.key === 'PageUp' || // PAGE UP
                    (e.key === ' ' && e.shiftKey) || // SPACE + SHIFT
                    (e.key === 'ArrowLeft')// UP
                ) {
                    goPrevious(deck);
                }
                if (e.key === 'ArrowDown') {
                    openNextToggle(deck, false);
                }

                if (e.key === 'ArrowUp') {
                    closePreviousToggle(deck, false);
                }

            });
        };
    };

    function openNextToggle(deck, more) {
        const currentPage = deck.slide() - 1;

        for (const subitemId of toggleDictionary[currentPage] || []) {
            const subitem = listOfToggleComponents[subitemId]
            if (!subitem.expanded) {
                subitem.open();
                subitem.scrollTo();
                if (!more) {
                    return;
                }
            }
        }
        deck.next()
    }

    function closePreviousToggle(deck, more) {
        const currentPage = deck.slide() - 1;
        let previousItem = null;
        const items = toggleDictionary[currentPage].slice().reverse() || [];
        for (const subitemId of items) {
            const subitem = listOfToggleComponents[subitemId]
            if (subitem.expanded) {
                subitem.close();
                for (const tofocus of toggleDictionary[currentPage]) {
                    if (tofocus === subitemId && previousItem?.scrollTo) {
                        previousItem.scrollTo();
                        break;
                    }
                    previousItem = tofocus;
                }
                if (!more) {
                    return;
                }
            }
        }

        deck.prev()
    }

    function goNext(deck) {
        deck.next();


    }

    function goPrevious(deck) {
        deck.prev();
    }

    onMount(async () => {
        try {
            await slide.loadPage(id)
            hljs.highlightAll();
            bespoke.from(presentation, [
                keyBind(),
                hash(),
                classes(),
                touch(),
            ]);

        } catch (e) {
            console.error(e);
            loadingError = true;
        }

    })
    let loadingError = false;


    function mountedToggle() {
        return (e) => {

            listOfToggleComponents[e.detail.id] = e.detail.item;
        }
    }


</script>
<div class="h-screen w-screen bg-base-100">
    <div bind:this={presentation}>
        {#if !$slide.loading}
            {#if $slide.settings.showFirst}
                <section>
                    <div class="bg-center bg-cover hero h-screen w-screen"
                         style="background-image:url({ resolveImage($slide.page?.cover) })">
                        {#if $slide.settings.backgroundShadow}
                            <div class="hero-overlay bg-opacity-50 "></div>
                        {/if}
                        <div class=" text-center text-neutral-content w-full">
                            <div class="">

                                {#if $slide.page.icon && $slide.settings.showIcon}
                                    <div class="text-7xl">
                                        <Icon icon={$slide.page.icon}/>
                                    </div>
                                {/if}
                                {#if $slide.settings.showTitle}
                                    <h1 class="text-7xl font-bold w-full">
                                        {#if $slide?.page?.properties?.Name}
                                            <RichText richText={$slide?.page?.properties?.Name?.title}
                                                      overrideStyle={true}/>
                                        {:else if $slide?.page?.properties?.title}
                                            <RichText richText={$slide?.page?.properties?.title?.title}
                                                      overrideStyle={true}/>
                                        {/if}
                                    </h1>
                                {/if}
                            </div>

                        </div>
                    </div>
                </section>
            {/if   }
            {#each $slide.sections as section,slide}
                <section class=" p-4 flex-col flex-grow container mx-auto">
                    {#each section as item}
                        <div class:flex-1={item.type=='child_database'}>
                            <Renderer items={[item]}
                                      on:mountedToggle={mountedToggle()}/>
                        </div>
                    {/each}
                </section>
            {/each}
        {:else}

            loading... it may takes several minutes depending of the length of your document and the speed of notion
            API.

            {#if loadingError}
                <h1 class="text-5xl">
                    An error occurred during loading from notion, try to refresh 💪. If the problem persist, contact me
                    ✉️.
                </h1>
            {/if}
        {/if}
    </div>
</div>