<script>
    export let toggleable = false;
    export let expanded = false;
    export let color="none";
</script>
<div
        class:m-1={toggleable}
        class:collapse={toggleable}
        class:collapse-open={expanded && toggleable}
        class:collapse-arrow={toggleable} class="color-{color}"
        class:bg-base-100={toggleable}
        class:rounded-box={toggleable}
>
    <div class:collapse-title={toggleable} on:click={()=>{expanded=!expanded}}>
        <slot name="title">
        </slot>
    </div>
    {#if expanded}
    <div class="collapse-content"><slot></slot></div>
        {/if}
</div>
