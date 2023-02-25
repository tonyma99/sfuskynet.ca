<script lang="ts">
	export let heading: string
	export let description: string
	export let page: string
</script>

<div
	style="cursor:pointer"
	on:click={() => {
		window.location.href = page
	}}
	on:keypress={() => {
		window.location.href = page
	}}
>
	<p>{heading}</p>
	<p>{description}</p>
	<a href={page}>Visit</a>
</div>

<style>
	a {
		align-self: center;
		background-color: var(--primary-color-dark);
		border-radius: var(--border-radius);
		color: #fff;
		font-size: 0.9375rem;
		font-weight: bold;
		margin-top: auto;
		padding: 0.5rem 0.8rem;
		transition: 0.2s;
	}

	a:hover {
		background-color: var(--primary-color);
	}

	div {
		background-color: var(--grey-100);
		border-radius: var(--border-radius);
		display: flex;
		flex-basis: 100%;
		flex-direction: column;
		gap: 16px;
		padding: 1.5em;
		transition: 0.2s;
		width: 100%;
	}

	div:hover {
		filter: brightness(95%);
	}

	p:first-of-type {
		font-size: 1.375rem;
		font-weight: 700;
		margin: 0;
	}

	p:nth-of-type(2) {
		margin: 0;
	}
</style>
