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
        <h1>SFU Robot Soccer</h1>
        <p>Build a legacy and tradition of extracurricular innovation and engineering engagement.</p>
        <p>SFU's first Robot Soccer club aims to combine the excitement of soccer with the future of automated technology as we compete in RoboCup Soccer competitions. Our team encourages students from all programs to come together and learn concepts that are not taught in class and get hands-on experience with robotics, artificial intelligence, and teamwork.</p>    
    </div>

    <div class="section--cards">
        <Cards {cards} />
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
</style>
