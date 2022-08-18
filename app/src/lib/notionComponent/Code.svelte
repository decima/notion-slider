<script>

    export let item;


</script>

<div class="mockup-code my-1 ">
    <div class="mx-4">
        {#each item.block.code.rich_text as lines}
            <pre><code data-trim data-noescape
                       class="language-{item.block.code.language}">{lines.plain_text}</code></pre>
        {/each}
    </div>
</div>

<slot/>
<style>
    pre {
        overflow: auto;
    }

    pre, code {
        @apply text-xs;
        max-width: 100%;
    }
</style>