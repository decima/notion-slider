<script>
    /**
     let person = {
        "object": "user",
        "id": "0bfaa180-0242-4306-a805-5d4c0db4b780",
        "type": "person",
        "name": "Henri LARGET",
        "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/ddeb82f6-6a45-43d1-ba44-b69e20341708/PXL_20210930_092115136.PORTRAIT.jpg",
        "person": {
            "email": ""
        },
        "bot": null
    }
     **/
    export let person
</script>
<div class="inline-block">   <span class="w-6 h-6 bg-cover inline-block bg-center"             style="background-image: url({person.avatar_url})"></span>
    {person.name}

</div>