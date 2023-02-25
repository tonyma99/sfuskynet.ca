<script lang="ts">
	import { Container, PageHeading } from '$lib/components'
	export let headingText: string
	export let titleText = headingText
	export let description = ''
</script>

<svelte:head>
	<title>SFU Robot Soccer - {titleText}</title>
</svelte:head>

<Container>
	<div>
		<PageHeading>{headingText}</PageHeading>
		{#if description}
			<p>{@html description}</p>
		{/if}
	</div>
	<slot />
</Container>

<style>
	div {
		margin-bottom: 64px;
	}
</style>
