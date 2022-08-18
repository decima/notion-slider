<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import Toggleable from "./Toggleable.svelte";

    export let item;
    export let expanded = false;
</script>
<Toggleable toggleable={item.has_children} color={item.block.heading_3.color??'none'}>
    <h3 slot="title" class="text-4xl text-accent color-{item.block.heading_3.color??'none'} font-semibold">
        <RichText richText={item.block.heading_3.rich_text}/>
    </h3>
    <slot></slot>
</Toggleable>
