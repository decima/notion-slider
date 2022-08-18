<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import ToggleIcon from "./ToggleIcon.svelte";
    import Toggleable from "./Toggleable.svelte";

    export let item;
    export let expanded = false;
</script>
<Toggleable toggleable={item.has_children} color={item.block.heading_1.color??'none'}>
    <h1 slot="title" class="text-7xl p-2 text-primary color-{item.block.heading_1.color??'none'} font-semibold">
        <RichText richText={item.block.heading_1.rich_text}/>
    </h1>
    <slot></slot>
</Toggleable>
