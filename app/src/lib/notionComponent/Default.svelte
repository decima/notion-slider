<script>
    export let item

    function toJSON(obj) {
        return JSON.stringify(obj,null, 2)
    }

    let show = false;
</script>
<div on:click={()=>show=!show}>.
{#if show}
    Component <span class="font-mono bg-red-50 cursor-pointer text-xs">{item.type}</span> not implemented yet
<pre class="h-52 overflow-scroll"><code>{toJSON(item.block[item.type])}</code></pre>
    <slot></slot>
{/if}

</div>