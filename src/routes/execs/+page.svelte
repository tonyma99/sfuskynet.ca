<script>
    import { ContentPageLayout, Profile } from '$lib/components'
    export let data
</script>

<ContentPageLayout
    titleText='Execs'
    headingText='Executive Team'
>
    <div>
        <h3>Executives</h3>
        {#each data.people.execs as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>
    
    <div>
        <h3>Directors</h3>
        {#each data.people.directors as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>

    <div>
        <h3>Leads</h3>
        {#each data.people.leads as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>

    <div>
        <h3>Heads</h3>
        {#each data.people.heads as exec}
        <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} email={exec.email} />
        {/each}
    </div>
</ContentPageLayout>
