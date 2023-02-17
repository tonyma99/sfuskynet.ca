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
        <div>
            {#each data.people.execs as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
            {/each}
        </div>
    </div>
    
    <div>
        <h2>Directors</h2>
        <div>
            {#each data.people.directors as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
            {/each}
        </div>
    </div>

    <div>
        <h2>Leads</h2>
        <div>
            {#each data.people.leads as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
            {/each}
        </div>
    </div>

    <div>
        <h2>Heads</h2>
        <div>
            {#each data.people.heads as exec}
            <Profile name={exec.name} position={exec.position} profile={exec.profile} linkedin={exec.linkedin} />
            {/each}
        </div>
    </div>
</ContentPageLayout>

<style>
    div > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
</style>
