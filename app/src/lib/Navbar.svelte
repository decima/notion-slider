<script>
    import {useLocation} from "svelte-navigator";
    import {session} from "./stores/session.js";

    const location = useLocation();
    let y = 0;

</script>
<svelte:window bind:scrollY={y}/>

{#if !$location.pathname.startsWith("/slides/") &&!$location.pathname.startsWith("/database/")}
<nav class="select-none bg-lime-300 flex items-stretch w-full sticky z-50 top-0 left-0 hover:opacity-100 transition-all	duration-300	  py-4 "
     class:opacity-0={$location.pathname.startsWith("/slides/")}
     class:bg-white={y >= 90}
     class:drop-shadow={y>=90}
     >


    <div class="container mx-auto px-12  m-auto line-height flex justify-between ">
        <div>
            <a href="/"><h1 class="text-4xl transition-all duration-300		" class:text-lg={y >= 90}>Notion Slider
            </h1></a>
        </div>
        <div>
        </div>
        <div class="leading-8 menu">

            {#if $session}
                <a href="/slides">Slides</a>
                <a href="/logout">Logout</a>
            {:else}
                <a href="/login">Login</a>
            {/if}
        </div>
    </div>
</nav>
    {/if}
<style>
a{
    @apply h-full;
    @apply mx-4 inline-block;

}
.menu a{
    @apply underline;
}
.menu a:hover{
    @apply no-underline	;
}

</style>