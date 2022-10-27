<script>
    export let name;
    export let headline;
    export let image;
    export let description;
    export let tags;
</script>

<div class="team--section">
    <div class="team--image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url({image});">
        <h3 class="team--name">{name}</h3>
        <p class="team--headline">{headline}</p>
    </div>
    <p class="team--description">{description}</p>
    <div class="team--tags">
    {#each tags as tag}
        <span class="team--tag">{tag}</span>
    {/each}
    </div>
</div>

<style>
    div {
        margin-top: 4rem;
    }

    div > * {
        margin: 0;
        margin-bottom: 16px;
    }

    div > :last-child {
        margin: 0;
    }

    .team--image {
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        color: white;
        background-size: contain;
        border-radius: 0.5rem;
        width: 100%;
        aspect-ratio: 18/7;
        color: white;
    }

    .team--name {
        color: #fafafa;
        text-shadow: 0 4px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        font-size: 3em;
        margin: 0;
    }

    .team--headline {
        color: #fafafa;
        text-shadow: 0 3px rgba(0, 0, 0, 0.2);
        font-size: 1.2em;
        font-weight: 500;
        margin: 0;
    }

    .team--tag {
        background-color: #a6192e;;
        border-radius: 2em;
        color: #f8f8f8;
        display: inline-flex;
        font-size: 0.8em;
        line-height: normal;
        margin: 4px;
        padding: 0.4em 0.8em;
    }

    @media only screen and (max-width: 768px) {
        .team--name {
            font-weight: 500;
            font-size: 2em;
        }
        .team--headline {
            font-size: 1em;
            font-weight: normal;
        }
    }
</style>
