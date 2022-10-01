<script>

    export let item;


</script>

<div class=" my-1 box-border w-full">
    <div class="mx-4 box-border">
        <pre><code data-trim data-noescape class="language-{item.block.code.language}">{#each item.block.code.rich_text as lines}{lines.plain_text}{/each}</code></pre></div>
</div>

<slot/>
<style>
    pre {
        overflow: auto;
        @apply border rounded-lg shadow;


    }
    code{
        @apply p-4 w-full block box-border;
    }

</style>