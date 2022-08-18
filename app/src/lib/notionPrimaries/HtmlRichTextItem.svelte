<script>
    export let isWrapped = false;
    export let href;
</script>

{#if isWrapped}
    <a {href} target="_blank" class="link link-primary">
        <slot/>
    </a>
{:else}
    <slot/>
{/if}