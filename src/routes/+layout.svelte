<script lang="ts">
	import '../app.css'
	import '@fontsource/inter'
	import '@fontsource/inter/700.css'
	import '@fontsource/inter/900.css'
	import { Footer, Header } from '$lib/components'
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
		background-color: #f0f0f0;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		font-weight: 900;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6),
	:global(p) {
		color: #1f1f1f;
	}

	:global(::selection) {
		background: #a6192e40;
	}

	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex: 1;
		flex-direction: column;
		margin: 0 auto;
		width: 100%;
	}
</style>
