<script>
    import Card from "./Card.svelte";

    export let cards;
</script>

<div>
    {#each cards as card} 
        <Card heading={card.heading} description={card.description} page={card.page} />
    {/each}
</div>

<style>
    div {
        display: flex;
    }

    @media only screen and (max-width: 768px) {
        div {
            display: inline-block;
            max-width: 320px;
        }
    }
</style>
