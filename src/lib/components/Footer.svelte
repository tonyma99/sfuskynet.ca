<footer>
	<img src="/images/logo.png" alt="SFU Robot Socccer Club team logo" width="42" height="42" />
	<a href="contact">Contact Us</a>
	<a href="https://go.sfss.ca/clubs/721/info" target="_blank" rel="noreferrer"
		>Join Us <img src="/external.svg" alt="External link icon" width="12" height="12" /></a
	>
	<p>SFU Robot Soccer</p>
	<p>Created by <a href="https://github.com/tonyma99/sfuskynet.ca">Tony Ma</a></p>
</footer>

<style>
	footer {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 4px;
		justify-content: center;
		margin-top: 4rem;
		padding: 1rem;
	}

	footer > a {
		align-items: center;
		color: var(--grey-700);
		display: flex;
		gap: 6px;
		transition: 0.2s;
	}

	a:hover {
		color: #000;
	}

	footer > a,
	footer > p {
		margin: 0;
		padding: 2px;
	}

	footer > p:last-child {
		display: none;
		font-size: 0.75rem;
		padding: 5px;
	}

	footer > p:last-child a {
		color: var(--grey-700);
		transition: 0.2s;
	}

	footer > p:last-child a:hover {
		color: #000;
	}

	footer > img {
		margin: 8px;
	}
</style>
