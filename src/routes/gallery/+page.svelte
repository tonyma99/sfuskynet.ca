<script>
    const images = [
        '/gallery/adam-wilson-Zfksx-n_8qM-unsplash.jpg',
        '/gallery/cdd20-Ia3Dwq_azas-unsplash.jpg',
        '/gallery/coleman-glover-IEaAmJOZ-oU-unsplash.jpg',
        '/gallery/dell-LXI5kqCdEcE-unsplash.jpg',
        '/gallery/dell-xIodDks1cQ8-unsplash.jpg',
        '/gallery/eberhard-grossgasteiger-FqJ94z706I0-unsplash.jpg',
        '/gallery/eberhard-grossgasteiger-YN3kjlCR2hQ-unsplash.jpg',
        '/gallery/egor-litvinov-b4q5EIC30N4-unsplash.jpg',
        '/gallery/egor-litvinov-nvMECPntZFk-unsplash.jpg',
        '/gallery/harrison-mitchell-8s5Ydj_DGQ0-unsplash.jpg',
        '/gallery/jocelyn-morales-xSH5uuRxktc-unsplash.jpg',
        '/gallery/juli-kosolapova-vGFnb53g6-Y-unsplash.jpg',
        '/gallery/kateryna-hliznitsova-oTPjgxQviFU-unsplash.jpg',
        '/gallery/leonhard-niederwimmer-rdVmRUlD0p8-unsplash.jpg',
        '/gallery/massimo-frascati-nZfaIh-gSZU-unsplash.jpg',
        '/gallery/mathias-reding-flGiqXK2LFs-unsplash.jpg',
        '/gallery/mathias-reding-XdeCrwgiqDk-unsplash.jpg',
        '/gallery/max-muselmann-FrIhQy5j37w-unsplash.jpg',
        '/gallery/nahima-aparicio-KMlKaHZ39o0-unsplash.jpg',
        '/gallery/olena-sergienko-yLJSYGG7ZSE-unsplash.jpg',
        '/gallery/surface-cZ5c-6ek0Kk-unsplash.jpg',
        '/gallery/tamara-menzi-uDJ4IeOqoRQ-unsplash.jpg',
        '/gallery/vladislav-nahorny-UpUCd9v6j6A-unsplash.jpg',
    ]
</script>

<svelte:head>
    <title>SFU Robot Soccer - Gallery</title>
</svelte:head>

<div>
    <div class="section--intro">
        <h1>Gallery</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit eius dignissimos molestias optio nulla et voluptate rerum perferendis! Nesciunt aliquid unde sequi ducimus beatae eius fugiat odit illo sapiente.</p>
    </div>

    <div class="section--gallery">
        {#each images as image}
            <img src={image} alt="Gallery entry">
        {/each}
    </div>
</div>

<style>
    h1 {
        font-weight: 600;
        font-size: 3em;
    }

    div + div {
        margin-top: 4rem;
    }

    .section--gallery img {
        max-width: 100%;
    }
</style>
