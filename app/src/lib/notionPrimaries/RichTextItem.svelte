<script>

    import HtmlRichTextItem from "./HtmlRichTextItem.svelte";
    import katex from "katex"
    import "katex/dist/katex.min.css"
    export let richText;
    export let overrideStyle = false;

    function renderEquation(input) {
        try {
            const res=  katex.renderToString(input, {
                throwOnError: true,
            });
            return res


        } catch (e) {
            console.error(e);
            return input;
        }

    }
</script>
<HtmlRichTextItem isWrapped={richText.href!=null} href={richText.href}>

    {#if richText.type == "text"}

        {#if richText.annotations.code}
            <code
                    class:font-bold={richText.annotations.bold &&!overrideStyle}
                    class:italic={richText.annotations.italic &&!overrideStyle}
                    class:underline={richText.annotations.underline &&!overrideStyle}
                    class:line-through={richText.annotations.strikethrough &&!overrideStyle}
                    class:underline-line-through={richText.annotations.underline && richText.annotations.strikethrough &&!overrideStyle}
                    class="text-primary-content bg-primary color-{!overrideStyle?richText.annotations.color:''}"
            >
                {richText?.text?.content?.value ?? richText?.text?.content}
            </code>
        {:else}

        <span
                class:font-bold={richText.annotations.bold &&!overrideStyle}
                class:italic={richText.annotations.italic &&!overrideStyle}
                class:underline={richText.annotations.underline &&!overrideStyle}
                class:line-through={richText.annotations.strikethrough &&!overrideStyle}
                class:underline-line-through={richText.annotations.underline && richText.annotations.strikethrough &&!overrideStyle}
                class="color-{!overrideStyle?richText.annotations.color:''}"
        >
        {@html richText.text.content.replace(/\n/g, "<br />")}
        </span>
        {/if}
    {:else if richText.type == "mention"}
        <span>{richText.plain_text}</span>
    {:else if richText.type == "equation"}
        <span>{@html renderEquation(richText.plain_text)}</span>
    {:else}
        UNSUPPORTED
    {/if}
</HtmlRichTextItem>


<style>
    .underline-line-through {
        text-decoration: underline line-through;
    }


</style>
