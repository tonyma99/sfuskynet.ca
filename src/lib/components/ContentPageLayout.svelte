<script>
    import { Container, PageHeading } from '$lib/components'
    export let headingText
    export let titleText = headingText
    export let description
</script>

<svelte:head>
    <title>SFU Robot Soccer - {titleText}</title>
</svelte:head>

<Container>
    <PageHeading>{headingText}</PageHeading>
    {#if description}
    <p>{@html description}</p>
    {/if}
    <slot />
</Container>
