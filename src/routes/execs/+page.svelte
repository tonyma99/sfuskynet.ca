<script lang="ts">
	import { ContentPageLayout, Profile } from '$lib/components'
	import type { Persons } from '$lib/types'

	export let data: {
		executives: Array<Person>
		directors: Array<Person>
		leads: Array<Person>
		heads: Array<Person>
	}
</script>

<ContentPageLayout titleText="Execs" headingText="Executive Team">
	<div>
		<h2>Executives</h2>
		<div>
			{#each data.executives as executive}
				<Profile
					name={executive.name}
					position={executive.position}
					image={executive.image}
					linkedin={executive.linkedin}
				/>
			{/each}
		</div>
	</div>

	<div>
		<h2>Directors</h2>
		<div>
			{#each data.directors as exec}
				<Profile
					name={exec.name}
					position={exec.position}
					image={exec.image}
					linkedin={exec.linkedin}
				/>
			{/each}
		</div>
	</div>

	<div>
		<h2>Leads</h2>
		<div>
			{#each data.leads as exec}
				<Profile
					name={exec.name}
					position={exec.position}
					image={exec.image}
					linkedin={exec.linkedin}
				/>
			{/each}
		</div>
	</div>

	<div>
		<h2>Heads</h2>
		<div>
			{#each data.heads as exec}
				<Profile
					name={exec.name}
					position={exec.position}
					image={exec.image}
					linkedin={exec.linkedin}
				/>
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
