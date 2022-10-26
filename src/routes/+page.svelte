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
        <img class="intro--background" src="/background.jpg" alt="Background">
        <p class="intro--text">Build a legacy and tradition of extracurricular innovation and engineering engagement.</p>
    </div>

    <div class="section--cards">
        <p class="cards--text">SFU's first Robot Soccer club aims to combine the excitement of soccer with the future of automated technology as we compete in RoboCup Soccer competitions. Our team encourages students from all programs to come together and learn concepts that are not taught in class and get hands-on experience with robotics, artificial intelligence, and teamwork.</p>    
        <Cards {cards} />
    </div>

    <div class="section--about">
        <h3>About SFU Robot Soccer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nulla aliquid laudantium ad aliquam maxime voluptatum labore necessitatibus explicabo. Porro exercitationem voluptate velit ullam doloribus ab facere, in quasi magni! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione itaque quos, eos doloribus delectus necessitatibus quod, eum dolores reprehenderit voluptatem velit laudantium? Aperiam veniam voluptates voluptatibus libero! Amet, accusamus quaerat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt, adipisci velit amet, nobis fugit hic nesciunt quod repudiandae omnis vero cum nisi itaque ipsa corrupti tempore autem excepturi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id officiis, alias minus quisquam mollitia facere quae rem dolor odio vel fugit cumque, libero beatae fuga quibusdam perferendis omnis natus.</p>
    </div>

    <div class="section--join">
        <h3>Join Us!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nostrum. Culpa odio assumenda ipsam eos? Quas animi, debitis voluptates fuga veniam commodi architecto enim ab. Illo dolor asperiores quod atque.</p>
        <div class="join--button_container"><a class="join--button join--join_button" href="https://go.sfss.ca/clubs/721/info">Join Us</a></div>
        <div class="join--button_container"><a class="join--button join--email_button" href="mailto:sfurs@sfu.ca">Contact Us</a></div>
    </div>
</div>

<style>
    h3 {
        font-size: 1.5em;
    }
    
    .intro--heading {
        font-size: 3em;
        line-height: 1;
    }

    .intro--background {
        width: 100%;
    }

    .intro--text {
        font-size: 1.2em;
        font-weight: 500;
    }

    .cards--text {
        margin-bottom: 3rem;
    }

    .join--button_container {
        margin-top: 1.5em;
    }

    .join--button {
        color: white;
        font-weight: 500;
        padding: 0.5em 1em;
        border-radius: 0.5em;
    }

    .join--join_button {
        color: #f8f8f8;
        background-color: #a6192e;
    }

    .join--join_button:hover {
        background-color: #cc0633;
    }

    .join--email_button {
        color: #f8f8f8;
        background-color: #0091ea;
    }

    .join--email_button:hover {
        background-color: #00b0ff;
    }

    div + div {
        margin-top: 4rem;
    }
</style>
