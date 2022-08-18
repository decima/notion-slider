<script>
    export let item
    export let show=false;
    function toJSON(obj) {
        return JSON.stringify(obj,null, 2)
    }

</script>
<div on:click={()=>show=!show}>.
{#if show}
    Component <span class="font-mono bg-red-50 cursor-pointer text-xs">{item?.type??"ITEM"}</span> not implemented yet
<pre class="h-52 overflow-scroll"><code>{toJSON(item)}</code></pre>
    <slot></slot>
{/if}

</div>