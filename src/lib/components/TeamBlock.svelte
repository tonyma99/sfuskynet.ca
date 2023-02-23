<script lang="ts">
	import { Chip, TeamBlockHeading } from '$lib/components'
	import type { Team } from '$lib/types'

	export let team: Team
	export let idx: number
	let margin: string
	idx !== 0 ? (margin = '3rem 0 0 0') : (margin = '0')
</script>

<div style:margin>
	<TeamBlockHeading {team} />
	<p>{team.description}</p>
	<div>
		{#each team.tags as tag}
			<Chip>{tag}</Chip>
		{/each}
	</div>
</div>
