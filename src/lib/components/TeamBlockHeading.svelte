<script>
    export let team
</script>

<div style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({team.image});">
    <h2>{team.name}</h2>
    <p>{team.headline}</p>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        background-size: contain;
        border-radius: 0.25rem;
        width: 100%;
        aspect-ratio: 18/7;
    }

    h2 {
        font-family: 'Helvetica Now Display', sans-serif;
        font-size: 3em;
        margin: 0;
    }

    p {
        font-size: 1.1rem;
        margin: 0;
    }

    h2, p {
        text-shadow: 0px 2px 0px #222;
        color: #fafafa;
    }

    @media only screen and (max-width: 768px) {
        div {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            border-radius: 0;
        }
        
        h2 {
            font-size: 2em;
        }
        p {
            font-size: 1em;
            font-weight: normal;
        }
    }
</style>
