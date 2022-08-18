<script>
    import Default from "../notionComponent/Default.svelte";

    export let item;
    let file = true;
    let external = true;
</script>
{#if file && external }

    <div class="card card-compact w-full  lg:w-1/2 xl:w-1/4 h-auto bg-base-100 shadow-xl">
        <figure>
            {#if item.type === "file"}
                <img src="{item.file.url}"
                     class="object-scale-down mx-auto w-full"
                     alt="{item.file.url}"
                     on:error={()=>{file=false;}}/>

            {:else if item.type === "external"}
                <img src="{item.external.url}"
                     class="object-scale-down  h-auto mx-auto w-full"
                     alt="{item.external.url}"
                     on:error={()=>{external=false;}}/>

            {/if}
        </figure>
    </div>
{:else if external }
    <a href="{item?.external?.url}" target="_blank">{item?.external?.url}</a>
{:else if file }
    <a href="{item?.file?.url}" target="_blank">{item?.file?.url}</a>

{/if}
