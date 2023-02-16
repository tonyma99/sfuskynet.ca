<script>
    export let team
</script>

<div style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url({team.image});">
    <h3>{team.name}</h3>
    <p>{team.headline}</p>
</div>

<style>
    @font-face {
        font-family: 'Helvetica Now Display';
        src: local('Helvetica Now Display Ext Blk'), local('Helvetica-Now-Display-Ext-Blk'),
            url('webfonts/HelveticaNowDisplay-ExtBlk/HelveticaNowDisplay-ExtBlk.woff2') format('woff2'),
            url('webfonts/HelveticaNowDisplay-ExtBlk/HelveticaNowDisplay-ExtBlk.woff') format('woff'),
            url('webfonts/HelveticaNowDisplay-ExtBlk/HelveticaNowDisplay-ExtBlk.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }

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
        font-family: 'Helvetica Now Display';
        text-transform: uppercase;
        color: #fafafa;
        font-weight: bold;
        font-size: 3em;
        margin: 0;
    }

    p {
        color: #fafafa;
        font-size: 1.1rem;
        margin: 0;
    }

    @media only screen and (max-width: 768px) {
        h3 {
            font-weight: bold;
            font-size: 2em;
        }
        p {
            font-size: 1em;
            font-weight: normal;
        }
    }
</style>
