<script lang="ts">
	import '../app.css'
	import '@fontsource/inter'
	import '@fontsource/inter/500.css'
	import '@fontsource/inter/700.css'
	import '@fontsource/inter/900.css'
	import '@fontsource/inter-tight/900.css'
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
