<script>
    import Cards from "./Cards.svelte";

    const cards = [
        {
            heading: 'Teams',
            description: 'Innovative minds, diverse skills - Our Teams',
            page: '/teams',
        },
        {
            heading: 'Sponsors',
            description: 'Fueling our mission, powering our growth - Our Sponsors',
            page: '/sponsors',
        },
        {
            heading: 'Contact',
            description: 'Connect with us, get in touch - Contact Us',
            page: '/contact',
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
        <p>Welcome to the Simon Fraser University Robot Soccer Club! Our club is dedicated to promoting an interest in robotics and soccer among students by combining the knowledge of software, electronics, and mechanics.<br>
            <br>    
            We believe that robotics and soccer are a perfect match - both require teamwork, strategy, and problem-solving. Our club members learn about robotics and programming by building and programming robots to compete in robot soccer matches against other schools.<br>
            <br>
            Our club is divided into three teams, software, electronics, and mechanics, each responsible for different aspects of the robot design and performance. The software team develops and programs the robot's control systems and AI, the electronics team designs and builds the robot's power and communication systems, and the mechanics team designs and fabricates the robot's body and actuators.<br>
            <br>
            Our club is open to students of all skill levels, from those who have never worked with robots before to those who have prior experience. We provide training and resources to help our members learn and improve in their respective teams.<br>
            <br>
            We participate in various local, regional, and national robotics competitions and events throughout the year, where we get to showcase our robots and compete against other teams. We also hold regular meetings and practice sessions, where we work on building and programming our robots, as well as refining our strategies for competition.<br>
            <br>
            We are more than just a robotics club, we are a community of students who share a passion for robotics and soccer. We encourage and support each other to learn, grow, and succeed. Join us today and be part of a winning team!</p>
    </div>

    <div class="section section--join">
        <h3>Join Us!</h3>
        <p>Are you interested in robotics and soccer? Do you want to be part of a winning team? Then come and join us at the Simon Fraser University Robot Soccer Club! We are always looking for new members to join our software, electronics, and mechanics teams. We provide training and resources to help our members learn and improve, and we participate in various local, regional, and national robotics competitions and events throughout the year. Join us today and experience the excitement of building and programming robots to compete in robot soccer matches!</p>
        <div class="join--button_container"><a class="join--button join--join_button" href="https://go.sfss.ca/clubs/721/info">Join Us</a></div>
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
    }

    .intro--text {
        font-family: 'Poppins', sans-serif;
        font-size: 1.25em;
        margin-top: 1rem;
        line-height: 1.2;
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
