<script>
    import {onMount} from "svelte";
    import {navigate} from "svelte-navigator";
    import logo from "../../assets/logo.svg"

    let redirectRoute = ""
    onMount(() => {
        redirectRoute = encodeURIComponent(window.location.href + "auth")
        const item = JSON.parse(localStorage.getItem("notion_auth"))
        if (item?.access_token) {
            navigate("/slides")
        }


    })
</script>
<div class="w-full min-h-full bg-lime-300">

    <div class="container mx-auto pt-4">
        <h1 class="text-7xl lg:w-1/2 w-full ring-0	ring-transparent	 my-24 mx-auto text-center">
            <img src={logo} class="w-1/6 mx-auto"/>

            Transform <span
                class="underline">any</span> Notion page into simple ✨ slides.</h1>

        <a class="block  mb-16 text-center bg-lime-500 p-4 text-4xl rounded border-8 border-lime-400 w-1/4 mx-auto hover:bg-lime-200"
           href="/login">Login to start 🧙‍♂️</a>

    </div>

    <div class="container mx-auto">
        <h2 class="text-5xl  underline">How does it works?</h2>
        <ul class="list-disc text-lg my-6">
            <li>First create a notion page, and split every slides with a Divider Element.</li>
            <li>Click on "Login" and grant access to the notion page you want to use as a notion Slider.</li>
            <li>Then you'll be able to access a listing of all pages you granted access.</li>
        </ul>
    </div>
    <div class="container mx-auto">
        <h2 class="text-5xl  underline">Privacy?</h2>
        <p class="list-disc w-1/2 text-lg my-6">
            This project is free-to-use and will be open-sourced once i've cleaned the codebase.
            Even if I work with a backend server, no data is stored in any way, and wont be, because this is not the
            point of this.
        </p>
    </div>
    <div class="container mx-auto">
        <h2 class="text-5xl  underline">Why does this project exists?</h2>
        <p class="list-disc text-lg my-6">
            I recently (July 2022) decided to move all my life on notion, and because I give lectures at the university
            🎓,
            I needed a tool to make some slides.
            <br/><br/>
            <a target="_blank" href="/slides/demo">You can check how it renders here</a>

            <br/><br/>

            Oh and by the way, as you can see, I'm a backend developer 😉
        </p>
    </div>
    <div class="container mx-auto">
        <h2 class="text-5xl  underline">Contact</h2>
        <p class="w-1/2 text-lg my-6">
            If you encounter any issue, or I didn't implemented some block as a slide renderer, or just want to say hi
            and share something with me, feel free to reach me on twitter <a target="_blank"
                                                                             href="https://twitter.com/d3cima"><i
                class="fa-brands fa-twitter"></i>d3cima</a>
        </p>
    </div>


    <div class=" mx-auto bg-black text-white  pb-12 text-center pt-4">

        &copy; Decima — <a target="_blank" href="https://muffinfactory.io">Muffinfactory.io</a> — <a href="/tos">Terms
        of use</a>
    </div>
</div>


<style>
    a {
        @apply underline;
    }

    a:hover {
        text-decoration: none;
    }
</style>

