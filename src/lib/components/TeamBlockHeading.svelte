<script>
    export let team
</script>

<div style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url({team.image});">
    <h3>{team.name}</h3>
    <p>{team.headline}</p>
</div>

<style>
   div {
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

    h3 {
        color: #fafafa;
        font-weight: 700;
        font-size: 3em;
        margin: 0;
    }

    p {
        color: #fafafa;
        font-size: 1.2em;
        font-weight: 500;
        margin: 0;
    }

    @media only screen and (max-width: 768px) {
        h3 {
            font-weight: 500;
            font-size: 2em;
        }
        p {
            font-size: 1em;
            font-weight: normal;
        }
    }
</style>
