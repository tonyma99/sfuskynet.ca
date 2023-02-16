<script>
    import { ContentPageLayout, TeamBlock } from '$lib/components'
    export let data
    
</script>

<ContentPageLayout
    headingText='Teams'
    description={`
        At the SFU Robot Soccer Club, our team members come from different majors, experience levels and backgrounds.
        Our core teams are our <b>Mechanics</b>, <b>Electronics</b> and <b>Software</b> team where we work together
        to get our autonomous robots competition ready.
    `}
>   
    {#each data.teams as team, idx}
    <TeamBlock idx={idx} name={team.name} headline={team.headline} image={team.image} description={team.description} id={team.id} tags={team.tags} />
    {/each}
</ContentPageLayout>
