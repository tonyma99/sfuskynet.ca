<script>
    export let name;
    export let headline;
    export let description;
    export let tags;
</script>

<div class="team--section">
    <h3 class="team--name">{name}</h3>
    <p class="team--headline">{headline}</p>
    <p class="team--description">{description}</p>
    <div class="team--tags">
    {#each tags as tag}
        <span class="team--tag">{tag}</span>
    {/each}
    </div>
</div>

<style>
    div {
        margin-top: 3rem;
    }

    div > * {
        margin: 0;
        margin-bottom: 16px;
    }

    div > :last-child {
        margin: 0;
    }

    .team--name {
        font-size: 2em;
        font-weight: 500;
    }

    .team--headline {
        font-weight: 500;
    }

    .team--description {
        font-size: 1em;
        
    }

    .team--tag {
        background-color: #a6192e;
        border-radius: 2em;
        color: #fff;
        display: inline-flex;
        font-size: 0.8em;
        line-height: normal;
        margin: 2px;
        padding: 0.4em 0.8em;
    }
</style>
