<script>
    import Profile from "./Profile.svelte"
    export let data
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
        {#each data.people.execs as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>
    
    <div class="exec-team section--directors">
        <h3 id="director-team">Directors</h3>
        {#each data.people.directors as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>

    <div class="exec-team section--leads">
        <h3 id="leads-team">Leads</h3>
        {#each data.people.leads as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>

    <div class="exec-team section--heads">
        <h3 id="heads-team">Heads</h3>
        {#each data.people.heads as exec}
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
