<svelte:options accessors/>

<script>
    import {createEventDispatcher} from "svelte";
    import ToggleIcon from "./ToggleIcon.svelte";

    export let toggleable = false;
    export let expanded = false;
    export let color = "none";
    const dispatch = createEventDispatcher();
let title=null;
    export function toggle() {
        if (expanded) {
            close();
        } else {
            open();
        }
    }

    export function open() {
        expanded = true
        dispatch('open');
    }

    export function close() {
        expanded = false
        dispatch('close');
    }
    export function scrollTo(){
        setTimeout(()=>{
        title.scrollIntoView(true, {behavior: "smooth"});
        },100);
    }


</script>
<div
        class:m-1={toggleable}
        class:collapse={toggleable}
        class:collapse-open={expanded && toggleable}
        class:collapse-arrow={toggleable} class="color-{color}"
        class:bg-base-100={toggleable}
        class:rounded-box={toggleable}
>
    <div class:p-2={toggleable} on:click={toggle}>
        <div bind:this="{title}" class="flex items-center gap-2">
            {#if toggleable}
                <div>
                    <ToggleIcon bind:expanded/>
                </div>
            {/if}
            <slot name="title"></slot>
        </div>
    </div>

    <div class="collapse-content" class:hidden={!expanded}>
        <slot></slot>
    </div>
</div>
