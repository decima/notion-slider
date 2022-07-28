<script>
    import RichText from "../notionPrimaries/RichText.svelte";
    import Icon from "./Icon.svelte";

    export let item;
</script>
<div class="p-4 mx-4 border color-{item.block.callout.color} rounded-lg">
    <div class="flex text-xl">
        <Icon icon={item.block.callout.icon}></Icon>
        <div>
            <RichText richText={item.block.callout.rich_text}/>
        </div>
    </div>
    <slot/>
</div>