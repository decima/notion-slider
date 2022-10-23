<script>
    import RichText from "../notionPrimaries/RichText.svelte";

    export let items = [];
    export let depth = 3;
</script>

<ul>

    {#each items as item }
        <li>
            <div class="{item.type}">
                <RichText richText={item.content.rich_text}/>
            </div>
            {#if item.children.length > 0}
                <!-- should never happen -->
                <div class="pl-4">
                    <svelte:self items={item.children} depth={depth-1}/>
                </div>
            {/if}
        </li>
    {/each}
</ul>
<style>

    .heading_1 {
        @apply font-bold;
    }
    .heading_2{
        @apply pl-4;
    }

    .heading_3 {
        @apply pl-8;
        @apply text-xs;

    }
</style>