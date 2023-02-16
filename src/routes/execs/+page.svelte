<script>
    import { ContentPageLayout, Profile } from '$lib/components'
    export let data
</script>

<ContentPageLayout
    titleText='Execs'
    headingText='Executive Team'
>
    <div>
        <h2>Executives</h2>
        {#each data.people.execs as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
        {/each}
    </div>
    
    <div>
        <h2>Directors</h2>
        {#each data.people.directors as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
        {/each}
    </div>

    <div>
        <h2>Leads</h2>
        {#each data.people.leads as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
        {/each}
    </div>

    <div>
        <h2>Heads</h2>
        {#each data.people.heads as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
        {/each}
    </div>
</ContentPageLayout>
