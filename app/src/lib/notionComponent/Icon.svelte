<script>
    export let icon;
</script>

<div class="mr-2">
{#if icon.type == "file"}
    <img src="{icon.file.url}" class="h-10"/>
    {:else if icon.type == "emoji"}
    <span class="text-2xl">{icon.emoji} </span>
{/if}
</div>