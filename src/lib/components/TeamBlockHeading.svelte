<script>
    export let team
</script>

<div style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url({team.image});">
    <h2>{team.name}</h2>
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
        border-radius: 0.25rem;
        width: 100%;
        aspect-ratio: 18/7;
        color: white;
    }

    h2 {
        font-family: 'Helvetica Now Display', sans-serif;
        text-transform: uppercase;
        color: #fafafa;
        font-size: 3em;
        margin: 0;
    }

    p {
        color: #fafafa;
        font-size: 1.1rem;
        margin: 0;
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
