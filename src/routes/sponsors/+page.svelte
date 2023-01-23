<script>
    const sponsors = [
        {
            name: 'Altium',
            logo: '/Altium.jpeg',
            website: 'https://www.altium.com/',
        },
        {
            name: 'SolidWorks',
            logo: '/SolidWorks.jpeg',
            website: 'https://www.solidworks.com/',
        },
    ];
</script>

<svelte:head>
    <title>SFU Robot Soccer - Sponsors</title>
</svelte:head>

<div class="main--content">
    <div class="section--intro">
        <h1>Sponsors</h1>
        <p>The sponsors section of our website recognizes and thanks the companies and organizations that have generously supported us. Their contributions have allowed us to continue our mission and provide valuable services to our community. We appreciate their support and encourage our audience to support these sponsors in return.</p>
    </div>

    <div class="section--gold_sponsors">
        <h3>Gold Sponsors</h3>
        {#each sponsors as sponsor}
            <a href="{sponsor.website}"><img src={sponsor.logo} alt="{sponsor.name} logo" width=256></a>
        {/each}
    </div>
</div>

<style>
    .main--content {
        max-width: 64rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem;
    }

    h1 {
        font-size: 3em;
    }

    div + div {
        margin-top: 4rem;
    }

    .section--gold_sponsors h3 {
        font-size: 2em;
    }

    .section--gold_sponsors img {
        display: inline-block;
        margin: 8px;
    }
</style>
