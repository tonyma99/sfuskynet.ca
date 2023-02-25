<script lang="ts">
	import { navigating, page } from '$app/stores'
	import { slide } from 'svelte/transition'

	let menu = false
	let innerWidth: number
	$: if (innerWidth <= 768 || $navigating) menu = false

	const links = [
		{ path: '/', name: 'Home' },
		{ path: '/teams', name: 'Teams' },
		{ path: '/execs', name: 'Execs' },
		{ path: '/sponsors', name: 'Sponsors' },
		{ path: '/contact', name: 'Contact' }
	]

	const toggle = () => {
		menu = menu ? false : true
	}
</script>

<svelte:window bind:innerWidth />

<header>
	<div>
		<div>
			<a href="/">
				<img src="/images/logo.png" alt="SFU Robot Socccer Club team logo" width="42" height="42" />
			</a>
		</div>
		{#if innerWidth !== undefined}
			<div>
				{#if innerWidth > 768}
					<ul>
						{#each links as link}
							<li>
								<a
									href={link.path}
									on:click={toggle}
									aria-current={$page.url.pathname === link.path}><span>{link.name}</span></a
								>
							</li>
						{/each}
					</ul>
				{:else}
					<span on:click={toggle} on:keypress={toggle}>
						{#if !menu}
							<img src="menu_open.svg" alt="Open menu button icon" width="36" height="36" />
						{:else}
							<img src="menu_close.svg" alt="Close menu button icon" width="36" height="36" />
						{/if}
					</span>
				{/if}
			</div>
		{/if}
	</div>
	{#if menu && innerWidth <= 768}
		<div id="mobile" transition:slide={{ duration: 200 }}>
			<ul>
				{#each links as link}
					<li>
						<a href={link.path} on:click={toggle} aria-current={$page.url.pathname === link.path}
							>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>

<style>
	header > div {
		align-items: center;
		display: flex;
		font-weight: 500;
		height: 64px;
		margin: auto;
		max-width: var(--header-max-width);
		padding: 0 16px;
		z-index: 1;
	}

	header > div > :nth-child(1) {
		justify-content: flex-start;
	}

	header > div > :nth-child(2) {
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	li a {
		padding: 4px;
		transition: 0.2s;
	}

	li a span {
		display: inline-block;
		transition: 0.2s;
	}

	li a:hover span {
		transform: scale(1.125);
	}

	a > img:only-child {
		display: block;
	}

	li {
		display: inline-flex;
	}

	li + li {
		margin-left: 8px;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	div > span {
		cursor: pointer;
		padding: 0.25rem;
		touch-action: manipulation;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
	}

	span img {
		display: block;
	}

	#mobile {
		background-color: var(--background-color);
		height: fit-content;
		justify-content: center;
		position: relative;
	}

	#mobile a {
		display: block;
		font-size: 1.25rem;
	}

	#mobile ul {
		margin-top: 0;
	}

	#mobile li {
		display: block;
		margin-left: 0;
		padding: 4px;
		text-align: center;
	}

	[aria-current]:not([aria-current='false']) {
		color: var(--primary-color-dark);
	}

	[aria-current]:not([aria-current='true']) {
		color: var(--grey-700);
	}

	[aria-current]:not([aria-current='true']):hover {
		color: #000;
	}
</style>
