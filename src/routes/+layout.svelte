<script>
    import "../app.css";
    import Header from './Header.svelte';
	import Footer from "./Footer.svelte";
</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
        text-align: center;
		margin-bottom: 4rem;
	}
</style>
