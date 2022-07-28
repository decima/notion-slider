<script>

    export let item;


</script>

<pre>
    <code data-trim data-noescape class="language-{item.block.code.language=='plain'?'':item.block.code.language}">{#each item.block.code.rich_text as lines}{lines.plain_text}{/each}</code></pre>
<slot/>
<style>
    pre{
        overflow: auto;
    }
    pre,code{
        @apply text-xs;
        max-width:   100%;
    }
</style>