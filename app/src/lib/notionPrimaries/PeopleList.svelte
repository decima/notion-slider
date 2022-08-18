<script>

    import PeopleText from "./PeopleText.svelte";

    export let persons
</script>
{#each persons as person}
    <PeopleText bind:person/><br/>
{/each}