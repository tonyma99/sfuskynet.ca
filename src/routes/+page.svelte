<script>
    import Cards from "./Cards.svelte";

    const cards = [
        {
            heading: 'Team',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quam assumenda inventore illum recusandae',
            page: '/team',
        },
        {
            heading: 'Gallery',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate praesentium blanditiis similique eos',
            page: '/gallery',
        },
        {
            heading: 'Sponsors',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quam assumenda inventore illum recusandae',
            page: '/sponsors',
        },
    ];
</script>

<svelte:head>
    <title>SFU Robot Soccer</title>
</svelte:head>

<div>
    <div class="section--intro">
        <h1 class="intro--heading">SFU Robot Soccer</h1>
        <p class="intro--text">Build a legacy and tradition of extracurricular innovation and engineering engagement.</p>
    </div>

    <div class="section--cards">
        <p class="cards--text">SFU's first Robot Soccer club aims to combine the excitement of soccer with the future of automated technology as we compete in RoboCup Soccer competitions. Our team encourages students from all programs to come together and learn concepts that are not taught in class and get hands-on experience with robotics, artificial intelligence, and teamwork.</p>    
        <Cards {cards} />
    </div>
</div>

<style>
    .intro--heading {
        font-size: 3em;
        line-height: 1;
    }

    .intro--text {
        font-size: 1.2em;
        font-weight: 500;
    }

    .cards--text {
        margin-bottom: 3rem;
    }

    div + div {
        margin-top: 4rem;
    }
</style>
