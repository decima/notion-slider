<script>
    import Default from "./Default.svelte";

    export let item;
</script>
<table class:col-header={item.block.table.has_column_header} class:row-header={item.block.table.has_row_header}>
    <slot></slot>
</table>
<style>

</style>