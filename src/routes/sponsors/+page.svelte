<script lang="ts">
	import { ContentPageLayout } from '$lib/components'
	import type { Sponsor } from '$lib/types'

	export let data: { sponsors: any }
	const headingText = 'Sponsors'
	const description = `
		The sponsors section of our website recognizes and thanks the companies and organizations that have generously supported us.
		Their contributions have allowed us to continue our mission and provide valuable services to our community.
		We appreciate their support and encourage our audience to support these sponsors in return.`
</script>

<ContentPageLayout {headingText} {description}>
	<div>
		{#each data.sponsors.large as sponsor}
			{#if sponsor.website}
			<a href={sponsor.website} target="_blank" rel="noreferrer">
				{#if sponsor.logo}
					<img src={sponsor.logo} alt="{sponsor.name} logo" width="320" height="96" />
				{:else}
				<div class="sponsorName">
					<span>{sponsor.name}</span>
				</div>
				{/if}
			</a>
			{:else}
				{#if sponsor.logo}
					<img src={sponsor.logo} alt="{sponsor.name} logo" width="320" height="96" />
				{:else}
				<div class="sponsorName">
					<span>{sponsor.name}</span>
				</div>
				{/if}
			{/if}
		{/each}
	</div>

	<div>
		{#each data.sponsors.medium as sponsor}
			{#if sponsor.website}
			<a href={sponsor.website} target="_blank" rel="noreferrer">
				{#if sponsor.logo}
					<img src={sponsor.logo} alt="{sponsor.name} logo" width="256" height="72" />
				{:else}
				<div class="sponsorName">
					<span>{sponsor.name}</span>
				</div>
				{/if}
			</a>
			{:else}
				{#if sponsor.logo}
					<img src={sponsor.logo} alt="{sponsor.name} logo" width="256" height="72" />
				{:else}
				<div class="sponsorName">
					<span>{sponsor.name}</span>
				</div>
				{/if}
			{/if}
		{/each}
	</div>

	<div>
		{#each data.sponsors.small as sponsor}
			{#if sponsor.website}
			<a href={sponsor.website} target="_blank" rel="noreferrer">
				{#if sponsor.logo}
					<img src={sponsor.logo} alt="{sponsor.name} logo" width="128" height="64" />
				{:else}
					<div class="sponsorName">
						<span>{sponsor.name}</span>
					</div>
				{/if}
			</a>
			{:else}
				{#if sponsor.logo}
					<img src={sponsor.logo} alt="{sponsor.name} logo" width="128" height="64" />
				{:else}
				<div class="sponsorName">
					<span>{sponsor.name}</span>
				</div>
				{/if}
			{/if}
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

	div + div {
		margin-top: 3rem;
	}

	span {
		text-align: center;
		font-size: 1.1rem;
		font-weight: bold;
		vertical-align: middle;
	}

	.sponsorName {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 256px;
	}
</style>
