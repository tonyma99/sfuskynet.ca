<script lang="ts">
	export let name: string
	export let position: string
	export let image = '/images/default_profile.png'
	export let linkedin: string
</script>

<div>
	<img src={image} alt="{name}'s profile picture" width="128" height="128" />
	<p>{name}</p>
	<p>{position}</p>
	<a href={linkedin} aria-label={`${name}'s LinkedIn profile'`}>
		<img src="/linkedin.svg" alt="LinkedIn icon" width="16" height="16" />
	</a>
</div>

<style>
	div {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 6px;
		justify-content: top;
		width: 10rem;
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
		color: #444;
		font-size: 0.9rem;
	}
</style>
