<script>

</script>
<div class="container mx-auto">
    <div class=" prose prose-xl dark:prose-invert">
        <h1>How to work with this tool?</h1>
        <div class="alert shadow-lg">

            <div>
                <div>
                    ℹ️
                </div>
                <div>
                    This tool is designed to work better with database pages than raw pages, but you can use
                    both. Some features may not be available to raw pages. (they are marked as <b>db-only</b>)
                </div>
            </div>
        </div>
        <section>

            <h2>Getting Started</h2>
            <h3>First, create a notion doc 🐣</h3>
            <p>
                Click on Login and grant access to the notion page you've just
                created.
                If you have created your notion page <b>after</b> login, don't worry, just logout and login again to add
                your new page.
                Because notion keeps in memory which pages you have already granted access, you won't have to give
                access again to already granted content.
            </p>
            <h3>Now you want to create a slide 🤔</h3>

            <p>
                In this notion-slider, we use dividers elements in notion to split the document into slides.
            </p>


            <h3>Slides control 🔮</h3>
            <ul>
                <li> Use <b>Right arrow</b> on your keyboard to go to next slide.</li>
                <li> Use <b>Left arrow</b> on your keyboard to go to previous slide.</li>
                <li> Use <b>Bottom arrow</b> To expand Toggles on the page</li>
                <li> Use <b>Top arrow</b> To reduce Toggles on the page</li>
            </ul>


            <h3><abbr title="Too many information">TMA</abbr>, i'm lost 😱</h3>
            <p>
                Don't worry, you can use <a class="link"
                                            href="https://decima.notion.site/Template-f5ad0e917edf47299a7da03948babc2d">this
                document</a> to help you.
            </p>
        </section>

        <section>
            <h2>
                Settings
                <div class="badge badge-primary">DB-Only feature</div>
                <div class="badge">0.5.0</div>
            </h2>

            This new feature is introduced in version 0.5.0. It grants you the ability to add settings for a better control your presentation.

            <h3>How to enable it?</h3>
            In your database, add a new field named <b>slideSettings</b> of type <b>Multi-select</b>
            This field will be read and with the following attributes you can remove/add features :
            <table class="table table-zebra	">
                <tr><th>Select to add</th><th>Description</th></tr>

                <tr><th><code>hideTitle</code></th><td>Hide the Title of the first slide</td></tr>
                <tr><th><code>hideIcon</code></th><td>Hide the Icon of the first slide</td></tr>
                <tr><th><code>noBackgroundShadow</code></th><td>Disable background shadow of the first slide</td></tr>
            </table>

            more to come on next releases with transitions to use, subtitle, custom css and much more, feel free to contact me if you have more stuff you want.
        </section>
        <div class="h-24"></div>
    </div>
</div>
