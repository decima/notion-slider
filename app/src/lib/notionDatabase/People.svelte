<script>

    import PeopleList from "../notionPrimaries/PeopleList.svelte";

    export let item;

</script>


<PeopleList persons={item.people}/>
