<script>
    import {Route, Router} from "svelte-navigator";
    import ListSlides from "./lib/pages/ListSlides.svelte";
    import Auth from "./lib/pages/Auth.svelte";
    import Homepage from "./lib/pages/Homepage.svelte";
    import Logout from "./lib/pages/Logout.svelte";
    import Terms from "./lib/pages/Terms.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import Login from "./lib/pages/Login.svelte";
    import Database from "./lib/pages/Database.svelte";
    import Presentation from "./lib/pages/Presentation.svelte";


</script>

<main class="h-screen w-screen">
    <Router>
        <Navbar></Navbar>


        <Route path="" component={Homepage} primary={false}/>
        <Route path="/tos" component={Terms} primary={false}/>
        <Route path="logout" component={Logout} primary={false}/>
        <Route path="login" component={Login} primary={false}/>
        <Route path="auth" component={Auth} primary={false}/>
        <Route path="slides" component="{ListSlides}" primary={false}/>
        <Route path="presentation/:id" component={Presentation} primary={false}/>
        <Route path="database/:id" component={Database} primary={false}/>
    </Router>

</main>