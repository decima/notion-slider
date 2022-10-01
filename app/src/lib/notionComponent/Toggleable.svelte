<script>
    import {createEventDispatcher, onMount} from "svelte";
    import ToggleableElement from "./ToggleableElement.svelte";

    export let toggleable = false;
    export let expanded = false;
    export let color = "none";
    export let id=0;
    let element = null
    const dispatch = createEventDispatcher();

    function toggle() {
        if (expanded) {
            close();
        } else {
            open();
        }
    }

    function open() {
        expanded = true
        dispatch('open');
    }

    function close() {
        expanded = false
        dispatch('close');
    }

    onMount(() => {
        if (toggleable){
            dispatch("mountedToggle", {id:id,item: element})
        }
    })


</script>
<ToggleableElement bind:toggleable bind:expanded bind:color
                   on:open
                   on:close
                   bind:this={element}
                   on:mountedToggle>

    <div slot="title">
        <slot name="title"></slot>
    </div>
    <slot></slot>

</ToggleableElement>
