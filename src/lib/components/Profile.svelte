<script lang="ts">
	export let name: string
	export let position: string | undefined = undefined
	export let image = '/images/profile/default_profile.png'
	export let linkedin: string | undefined = undefined
</script>

<div>
	<img src={image} alt="{name}'s profile picture" width="128" height="128" />
	<p>{name}</p>
	{#if position}<p>{position}</p>{/if}
	{#if linkedin}
		<a href={linkedin} aria-label={`${name}'s LinkedIn profile'`}>
			<img src="/linkedin.svg" alt="LinkedIn icon" width="16" height="16" />
		</a>
	{/if}
</div>

<style>
	div {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 6px;
		justify-content: top;
		width: 160px;
	}

	div > img {
		border-radius: 50%;
		margin-bottom: 6px;
	}

	p {
		line-height: 1;
		margin: 0;
	}

	p:nth-of-type(1) {
		font-weight: bold;
	}

	p:nth-of-type(2) {
		font-size: 0.875rem;
	}
</style>
