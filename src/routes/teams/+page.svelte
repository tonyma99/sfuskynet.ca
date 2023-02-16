<script>
    import Team from "./Team.svelte";

    const teams = [
        {
            name: 'Mechanics',
            headline: 'Practical design of robotic mechanisms',
            image: '/mechanics.jpg',
            description: 'The Mechanics team gives shape and character to our team of robots and is a great way to get started in the club. Members are introduced to the basics of CAD and work on designing components such as base-plates, motor mounts and kicker systems, usually under the supervision of more senior members. During this process, the mechanics team focuses on creating an efficient design workflow and generating documentation so that future team members can learn about how our robots have evolved over time. Mechanics members primarily use SolidWorks to familiarize themselves with the basics of mechanical design and experience teamwork in a production environment.',
            id: 'mechanics-team',
            tags: [
                '3D Printing',
                'CNC Milling',
                'SolidWorks',
            ],
        },
        {
            name: 'Electronics',
            headline: 'Design and test robot PCBs and firmware',
            image: '/electronics.jpg',
            description: 'The electronics team designs and tests all the electrical components on the robots, including creating custom PCBs from scratch. Our modular PCB design integrates multiple daughterboards, including the motor driver, kicker driver and dribbler motor driver boards onto a central motherboard using removable connectors. This team gives its members experience using Altium Designer, an industry standard PCB design tool, working through the entire design process from schematic capture to PCB routing. In addition, members of the electronics team work a lot on testing and troubleshooting all parts of the design to work on improvements for future robot generations.',
            id: 'electronics-team',
            tags: [
                'Altium Designer',
                'C',
                'C++',
                'LTSpice',
            ],
        },
        {
            name: 'Software',
            headline: 'Building the brains of our system',
            image: '/software.jpg',
            description: 'At the software team our members collaborate together to develop the core and support elements of our software system. As speed gives us a competitive advantage we use a C++ tech stack to develop our AI and robotic control algorithms as well as our interface. We are looking for motivated students who are interested in applying their knowledge across and beyond the curriculum into practice. We are currently working on developing our robotic command and control systems, our data systems and improving our GUI among other tasks. In our team we hope you not only gain technical experience but also experience in collaborating with your peers through pair programming, code reviews, documentation and meetings.',
            id: 'software-team',
            tags: [
                'Boost',
                'C++',
                'Docker',
                'Eigen',
                'Git',
                'Google Protobuffers',
                'Python',
                'Qt5',
            ],
        },
    ];
</script>

<svelte:head>
    <title>SFU Robot Soccer - Teams</title>
</svelte:head>

<div class="main--content">
    <div class="section--intro">
        <h1>Teams</h1>
        <p>At the SFU Robot Soccer Club, our team members come from different majors, experience levels and backgrounds. Our core teams are our <b>Mechanics</b>, <b>Electronics</b> and <b>Software</b> team where we work together to get our autonomous robots competition ready.</p>
    </div>
    
    <div class="section--teams">
        <h3>Teams</h3>
        {#each teams as team, idx}
            <Team idx={idx} name={team.name} headline={team.headline} image={team.image} description={team.description} id={team.id} tags={team.tags} />
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

    h3 {
        font-size: 2em;
    }
</style>
