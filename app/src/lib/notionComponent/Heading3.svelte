<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import Toggleable from "./Toggleable.svelte";

    export let item;
    export let expanded = false;
</script>
<Toggleable toggleable={item.has_children} color={item.block.heading_3.color??'none'}
            on:open
            on:close
            on:mountedToggle
            id={item.block.id}
>
    <h3 slot="title" class="text-base sm:text-lg p-1 sm:p-2 md:text-xl xl:text-2xl 2xl:text-3xl 2xl:p-4  text-accent color-{item.block.heading_3.color??'none'} font-semibold">
        <RichText richText={item.block.heading_3.rich_text}/>
    </h3>
    <slot></slot>
</Toggleable>
