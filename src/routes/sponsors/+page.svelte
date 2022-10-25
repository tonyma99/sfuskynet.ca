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

<div>
    <div class="section--intro">
        <h1>Sponsors</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus, eaque voluptatibus ad fugit incidunt velit eum cupiditate itaque rerum hic doloribus cum earum sed modi delectus illo exercitationem adipisci!</p>
    </div>

    <div class="section--gold_sponsors">
        <h3>Gold Sponsors</h3>
        {#each sponsors as sponsor}
            <a href="{sponsor.website}"><img src={sponsor.logo} alt="{sponsor.name} logo" width=256></a>
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

    .section--gold_sponsors h3 {
        font-size: 2em;
        font-weight: 500;
    }

    .section--gold_sponsors img {
        display: inline-block;
        margin: 8px;
    }
</style>
