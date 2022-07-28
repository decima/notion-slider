<script>
    export let item;
</script>
<div>
    <slot></slot>
</div>

<style>

    div {
        @apply grid gap-2;

        grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );
    }
</style>