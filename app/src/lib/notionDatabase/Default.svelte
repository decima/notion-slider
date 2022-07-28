<script>
    export let item;
    let content = item[item.type];

    function toJSON(obj) {
        return JSON.stringify(obj, null, 2)
    }
</script>
{item.type}
<pre class="h-52 overflow-scroll"><code>{toJSON(content)}</code></pre>
