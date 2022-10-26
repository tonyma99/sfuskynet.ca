<script>
    import "../app.css";
    import Header from './Header.svelte';
</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <footer>
		<img src="/logo.png" alt="SFU Robot Socccer Club team logo" width=42>
        <p>SFU Robot Soccer</p>
    </footer>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
	}

	footer p {
		margin: 0;
		margin-top: 4px;
		color: #777;
	}
</style>
