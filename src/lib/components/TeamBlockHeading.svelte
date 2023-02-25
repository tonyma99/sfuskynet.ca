<script lang="ts">
	import type { Team } from '$lib/types'

	export let team: Team
</script>

<div
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url({team.image});"
>
	<h2>{team.name}</h2>
	<p>{team.headline}</p>
</div>

<style>
	div {
		aspect-ratio: 18/7;
		background-size: cover;
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-height: 192px;
		overflow: hidden;
		width: 100%;
	}

	h2 {
		font-size: 2.5rem;
		margin: 0;
	}

	p {
		font-weight: 500;
		margin: 0;
	}

	h2,
	p {
		color: #fff;
	}

	@media only screen and (max-width: 64rem) {
		div {
			border-radius: 0;
			left: 50%;
			margin-left: -50vw;
			margin-right: -50vw;
			position: relative;
			right: 50%;
			width: 100vw;
		}
	}

	@media only screen and (max-width: 768px) {
		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1rem;
			font-weight: normal;
		}
	}
</style>
