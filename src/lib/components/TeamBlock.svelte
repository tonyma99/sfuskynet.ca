<script>
    import { Chip, TeamBlockHeading } from '$lib/components'
    export let team, idx;
    let margin
    idx !== 0 ? margin = '3rem 0 0 0' : margin = '0'
</script>

<div style:margin>
    <TeamBlockHeading team={team}/>
    <p>{team.description}</p>
    <div>
        {#each team.tags as tag}
        <Chip>{tag}</Chip>
        {/each}
    </div>
</div>
