<script>

    import File from "../notionPrimaries/File.svelte";

    export let item;
</script>
<div class="flex flex-col lg:flex-row">
{#each item.files as file}
        <File item={file}/>
    {/each}
</div>
