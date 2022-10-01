<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import ToggleIcon from "./ToggleIcon.svelte";
    import Toggleable from "./Toggleable.svelte";

    export let item;
    export let expanded = false;
</script>
<Toggleable toggleable={item.has_children} color={item.block.heading_2.color??'none'}>
    <h2 slot="title" class=" text:lg sm:text-xl p-1 sm:p-2 md:text-2xl xl:text-3xl 2xl:text-4xl 2xl:p-4 text-secondary color-{item.block.heading_2.color??'none'}  font-semibold">
        <RichText richText={item.block.heading_2.rich_text}/>
    </h2>
    <slot></slot>
</Toggleable>
