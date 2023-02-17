<script>
    import { navigating, page } from '$app/stores';

    let menu = false;

    let innerWidth
    $: if (innerWidth <= 768 || $navigating) menu = false

    function toggle() {
        menu = menu ? false : true;
    }

    const links = [
        { path: '/', name: 'Home' },
        { path: '/teams', name: 'Teams' },
        { path: '/execs', name: 'Execs' },
        { path: '/sponsors', name: 'Sponsors' },
        { path: '/contact', name: 'Contact'}
    ]
</script>

<svelte:window bind:innerWidth />

<header>
    <div>
        <a href="/">
            <img src="/images/logo.png" alt="SFU Robot Socccer Club team logo" width=42 height=42>
        </a>
    </div>
    {#if innerWidth !== undefined}
    <div>
        {#if innerWidth > 768} 
        <ul>
            {#each links as link}
            <li><a href={link.path} on:click={toggle} aria-current="{$page.url.pathname === link.path}">{link.name}</a></li>
            {/each}
        </ul>
        {:else}
        <span on:click={toggle} on:keypress={toggle}><img src="/menu.svg" alt="Menu button" width=32 height=32></span>
        {/if}
    </div>
    {/if}
    {#if menu && innerWidth <= 768}
    <div id="mobile">
        <ul>
            {#each links as link}
            <li><a href={link.path} on:click={toggle} aria-current="{$page.url.pathname === link.path}">{link.name}</a></li>
            {/each}
        </ul>
    </div>
    {/if}
</header>

<style>
    header {
        align-items: center;
        background-color: white;
        display: flex;
        height: 64px;
        padding: 0 48px;
        z-index: 1;
    }

    header > :nth-child(1) {
        flex: 1;
        display: flex;
        justify-content: flex-start;
    }

    header > :nth-child(2) {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    a:hover {
        color: cornflowerblue;
        text-decoration: underline;
    }

    li {
        display: inline-flex;
    }

    li + li {
        margin-left: 16px;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    span {
        background: none;
        border: none;
        padding: 0.5rem;
    }

    span img {
        vertical-align: middle;
    }

    #mobile {
        position: absolute;
        background-color: #fff;
        left: 0;
        top: 64px;
        width: 100%;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    }

    #mobile a {
        display: block;
        font-size: 1.2em;
    }

    #mobile li {
        text-align: center;
        margin-left: 0;
        display: block;
        padding: 6px;
    }

    [aria-current]:not([aria-current="false"]) {
        color: #a6192e;
    }

    @media only screen and (max-width: 768px) {
        header {
            padding: 0 24px;
        }
    }
</style>
