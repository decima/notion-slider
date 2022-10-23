<script>
    import {slide} from "../stores/slide.js";
    import RichText from "../notionPrimaries/RichText.svelte";
    import Default from "./Default.svelte";
    import TableOfContentsElement from "./TableOfContentsElement.svelte";

    export let item;
</script>

<TableOfContentsElement items={$slide.toc}/>