<script lang="ts">
	import { ContentPageLayout, Profile } from '$lib/components'
	import type { Person } from '$lib/types'

	export let data: {
		executives: Array<Person>
		directors: Array<Person>
		leads: Array<Person>
		heads: Array<Person>
		alumni: Array<Person>
	}
	const titleText = 'Execs'
	const headingText = 'Executive Team'
</script>

<ContentPageLayout {titleText} {headingText}>
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

	<div>
		<h2>Alumni</h2>
		<div>
			{#each data.alumni as alumn}
				<Profile
					name={alumn.name}
					position={alumn.position}
					image={alumn.image}
					linkedin={alumn.position}
				/>
			{/each}
		</div>
	</div>
</ContentPageLayout>

<style>
	div > div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}
</style>
