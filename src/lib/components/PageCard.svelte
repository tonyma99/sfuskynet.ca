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
		background-color: #a6192e;
		border-radius: 0.5rem;
		color: #f0f0f0;
		font-weight: bold;
		margin-top: auto;
		padding: 6px 12px;
		transition: 0.3s;
	}

	a:hover {
		background-color: #cc0633;
	}

	div {
		background-color: #e0e0e0;
		border-radius: 0.5rem;
		display: flex;
		flex-basis: 100%;
		flex-direction: column;
		font-size: 1rem;
		gap: 16px;
		padding: 1.5em;
		transition: 0.3s;
		width: 100%;
	}

	div:hover {
		background-color: #d8d8d8;
	}

	p:first-of-type {
		font-size: 22px;
		font-weight: bold;
		margin: 0;
	}

	p:nth-of-type(2) {
		margin: 0;
	}
</style>
