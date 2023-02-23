<script lang="ts">
	import { ContentPageLayout } from '$lib/components'
	import type { Sponsor } from '$lib/types'

	export let data: { sponsors: Array<Sponsor> }
	const headingText = 'Sponsors'
	const description = `
		The sponsors section of our website recognizes and thanks the companies and organizations that have generously supported us.
		Their contributions have allowed us to continue our mission and provide valuable services to our community.
		We appreciate their support and encourage our audience to support these sponsors in return.`
</script>

<ContentPageLayout {headingText} {description}>
	<h2>Gold Sponsors</h2>
	<div>
		{#each data.sponsors as sponsor}
			<a href={sponsor.website} target="_blank" rel="noreferrer"
				><img src={sponsor.logo} alt="{sponsor.name} logo" width="256" height="64" /></a
			>
		{/each}
	</div>
</ContentPageLayout>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	a {
		display: inline-block;
	}

	img {
		display: block;
		object-fit: contain;
	}
</style>
