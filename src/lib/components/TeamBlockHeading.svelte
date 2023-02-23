<script lang="ts">
	import type { Team } from '$lib/types'

	export let team: Team
</script>

<div
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({team.image});"
>
	<h2>{team.name}</h2>
	<p>{team.headline}</p>
</div>

<style>
	div {
		aspect-ratio: 18/7;
		background-size: cover;
		border-radius: 0.25rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-height: 256px;
		overflow: hidden;
		width: 100%;
	}

	h2 {
		font-family: 'Helvetica Now Display', sans-serif;
		font-size: 3em;
		margin: 0;
		text-shadow: 0px 1.5px 0px #1a1a1a;
	}

	p {
		font-size: 1.1rem;
		margin: 0;
		text-shadow: 0px 1px 0px #1a1a1a;
	}

	h2,
	p {
		color: #f0f0f0;
	}

	@media only screen and (max-width: 768px) {
		div {
			border-radius: 0;
			left: 50%;
			margin-left: -50vw;
			margin-right: -50vw;
			position: relative;
			right: 50%;
			width: 100vw;
		}

		h2 {
			font-size: 2em;
		}

		p {
			font-size: 1em;
			font-weight: normal;
		}
	}
</style>
