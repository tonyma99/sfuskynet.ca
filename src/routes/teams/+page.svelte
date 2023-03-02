<script lang="ts">
	import { ContentPageLayout, Profile, TeamBlock } from '$lib/components'
	import type { Team } from '$lib/types'

	export let data: { teams: Array<Team> }
	const headingText = 'Teams'
	const description = `
		At the SFU Robot Soccer Club, our team members come from different majors, experience levels and backgrounds.
		Our core teams are our <b>Mechanics</b>, <b>Electronics</b> and <b>Software</b> teams where we work together
		to get our autonomous robots competition ready.
	`
</script>

<ContentPageLayout {headingText} {description}>
	{#each data.teams as team, idx}
		<TeamBlock {team} {idx} />
	{/each}

	<h2>Alumni</h2>
	<div>
		{#each Array(10) as _}
			<Profile name="Name" />
		{/each}
	</div>
</ContentPageLayout>

<style>
	h2 {
		margin-top: 64px;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}
</style>
