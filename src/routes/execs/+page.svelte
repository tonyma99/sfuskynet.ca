<script>
    import Profile from "./Profile.svelte";

    const execs = [
        {
            name: 'Zach Spencer',
            position: 'President',
            profile: '/zach_spencer.jpeg',
            linkedin: 'https://www.linkedin.com/in/zachary-k-spencer/',
        },
        {
            name: 'Seyed Arad Shojaee',
            position: 'Vice President',
            profile: '/seyed_arad_shojaee.jpeg',
            linkedin: 'https://www.linkedin.com/in/seyed-arad-shojaee-a8a175222/',
        },
        {
            name: 'Thomas Challis',
            position: 'VP of Public Relations',
            profile: '/thomas_challis.jpeg',
            linkedin: 'https://www.linkedin.com/in/thomas-challis-36460b1ba/',
        },
        {
            name: 'Yu-Xing Lim',
            position: 'VP of Administration',
            profile: '/yu_xing_lim.jpeg',
            linkedin: 'https://www.linkedin.com/in/yu-xing-lim-10706b252/',
        },
        {
            name: 'Adam Spelrem',
            position: 'VP of Finance',
            profile: '/adam_spelrem.jpeg',
            linkedin: 'https://www.linkedin.com/in/adam-spelrem-8b5059256/',
        },
    ];

    const directors = [
        {
            name: 'Ara Christie',
            position: 'Director of Graphic Design',
            // profile: '/zach_spencer.jpeg',
            linkedin: 'https://www.linkedin.com/in/ara-christie-8a0404261',
        },
        {
            name: 'Matin Keivanloo',
            position: 'Director of Outreach',
            // profile: '/zach_spencer.jpeg',
            linkedin: 'https://www.linkedin.com/in/matin-keivanloo-2152a0204',
        },
    ]

    const leads = [
        {
            name: 'Matthew do Santos-Zounon',
            position: 'Software Team Lead',
            // profile: '/zach_spencer.jpeg',
            linkedin: 'https://www.linkedin.com/in/mdsz/',
        },
        {
            name: 'Arvin Amini',
            position: 'Mechanics Team Leader',
            // profile: '/zach_spencer.jpeg',
            linkedin: 'https://www.linkedin.com/in/arvin-amini/',
        },
        {
            name: 'Judd Foster',
            position: 'Electronics Team Leader',
            // profile: '/zach_spencer.jpeg',
            linkedin: 'https://www.linkedin.com/in/judd-foster-568963193/',
        },
    ]

    const heads = [
        {
            name: 'Vlad Nadtochii',
            position: 'Head of Software Development',
            linkedin: 'https://www.linkedin.com/in/vlad-nadtochii-b451b5175/',
        }
    ]
</script>

<svelte:head>
    <title>SFU Robot Soccer - Execs</title>
</svelte:head>

<div class="main--content">
    <div class="section--intro">
        <h1>Executive Team</h1>
        <p></p>
    </div>

    <div class="exec-team section--execs">
        <h3 id="executive-team">Executives</h3>
        {#each execs as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>
    
    <div class="exec-team section--directors">
        <h3 id="director-team">Directors</h3>
        {#each directors as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>

    <div class="exec-team section--leads">
        <h3 id="leads-team">Leads</h3>
        {#each leads as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>

    <div class="exec-team section--heads">
        <h3 id="heads-team">Heads</h3>
        {#each heads as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
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

    .section--intro {
        margin-bottom: 4rem;
    }

    h3 {
        font-size: 2em;
        margin: 0.5em;
    }
</style>
