<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let item;
</script>
<blockquote class="p-4 mx-4 border color-{item.block.quote.color} relative min-h-fit	">
    <div class="mr-2 text-6xl text-slate-400 absolute top-0"><i class="fa-duotone fa-quote-left"></i></div>
        <div>
            <RichText richText={item.block.quote.rich_text}/>
        </div>
    <slot/>
</blockquote>
