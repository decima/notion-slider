<script>
    import {Route, Router} from "svelte-navigator";
    import ListSlides from "./lib/pages/ListSlides.svelte";
    import Slides from "./lib/pages/Slides.svelte";
    import Auth from "./lib/pages/Auth.svelte";
    import Homepage from "./lib/pages/Homepage.svelte";
    import Logout from "./lib/pages/Logout.svelte";
    import Terms from "./lib/pages/Terms.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import Login from "./lib/pages/Login.svelte";
    import Database from "./lib/pages/Database.svelte";
</script>

<main class="h-screen w-screen">
    <Router>

        <Navbar></Navbar>


        <Route path="" component={Homepage}/>
        <Route path="/tos" component={Terms}/>
        <Route path="logout" component={Logout}/>
        <Route path="login" component={Login}/>
        <Route path="auth" component={Auth}/>
        <Route path="slides" component="{ListSlides}"/>
        <Route path="slides/:id" component={Slides}/>
        <Route path="database/:id" component={Database}/>
    </Router>
</main>