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
    <div class="section section--intro" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/background.jpg');">
        <img class="intro-logo" src="/logo.png" alt="SFU Robot Socccer Club team logo" width=128>
        <h1 class="intro--heading">SFU Robot Soccer</h1>
        <p class="intro--text">Build a legacy and tradition of extracurricular innovation and engineering engagement.</p>
    </div>

    <div class="section section--cards">
        <p class="cards--text">SFU's first Robot Soccer club aims to combine the excitement of soccer with the future of automated technology as we compete in RoboCup Soccer competitions. Our team encourages students from all programs to come together and learn concepts that are not taught in class and get hands-on experience with robotics, artificial intelligence, and teamwork.</p>    
        <Cards {cards} />
    </div>

    <div class="section section--about">
        <h3>About SFU Robot Soccer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nulla aliquid laudantium ad aliquam maxime voluptatum labore necessitatibus explicabo. Porro exercitationem voluptate velit ullam doloribus ab facere, in quasi magni! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione itaque quos, eos doloribus delectus necessitatibus quod, eum dolores reprehenderit voluptatem velit laudantium? Aperiam veniam voluptates voluptatibus libero! Amet, accusamus quaerat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt, adipisci velit amet, nobis fugit hic nesciunt quod repudiandae omnis vero cum nisi itaque ipsa corrupti tempore autem excepturi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id officiis, alias minus quisquam mollitia facere quae rem dolor odio vel fugit cumque, libero beatae fuga quibusdam perferendis omnis natus.</p>
    </div>

    <div class="section section--join">
        <h3>Join Us!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nostrum. Culpa odio assumenda ipsam eos? Quas animi, debitis voluptates fuga veniam commodi architecto enim ab. Illo dolor asperiores quod atque.</p>
        <div class="join--button_container"><a class="join--button join--join_button" href="https://go.sfss.ca/clubs/721/info">Join Us</a></div>
        <div class="join--button_container"><a class="join--button join--email_button" href="mailto:sfurs@sfu.ca">Contact Us</a></div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .section--intro {
        height: 70vh;
        max-height: 1024px;
        background-size: cover;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .section--cards, .section--about, .section--join {
        max-width: 64rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem;
    }

    .intro--heading, .intro--text {
        color: #f8f8f8;
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 64rem;
    }

    h3 {
        font-size: 1.5em;
    }

    .intro-logo {
        margin: 0 auto;
        margin-bottom: 1rem;
    }
    
    .intro--heading {
        font-family: 'Archivo Black', sans-serif;
        font-size: 4em;
        line-height: 1;
        text-transform: uppercase;
        text-shadow: 0 4px rgba(0, 0, 0, 0.2);
    }

    .intro--text {
        font-family: 'Poppins', sans-serif;
        font-size: 1.25em;
        margin-top: 1rem;
        line-height: 1.2;
        text-shadow: 0 3px rgba(0, 0, 0, 0.2);
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

    div.section + div.section {
        margin-top: 4rem;
    }

    @media only screen and (max-width: 768px) {
        .intro--heading {
            font-size: 3em;
            line-height: 1;
        }

        .intro--text {
            font-size: 1.2em;
            margin-top: 1rem;
            line-height: 1.2;
        }
    }

    @media only screen and (max-height: 768px) {
        .intro-logo {
            display: none;
        }
    }
</style>
