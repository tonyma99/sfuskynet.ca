<script>
    import { navigating, page } from '$app/stores';

    let menu = false;

    $: innerWidth = 0;
    $: mobile = innerWidth <= 768;
    $: if (!mobile && menu || $navigating && menu) {
        menu = false;
    }

    function toggle() {
        menu = menu ? false : true;
    }
</script>

<svelte:window bind:innerWidth />

<header>
    <div>
        <a href="/">
            <img src="/logo.png" alt="SFU Robot Socccer Club team logo" width=42>
        </a>
    </div>
    {#if mobile === false} 
    <div>
        <ul>
            <li><a href="/" aria-current="{$page.url.pathname === "/"}">Home</a></li>
            <li><a href="team" aria-current="{$page.url.pathname.includes("team")}">Team</a></li>
            <li><a href="sponsors" aria-current="{$page.url.pathname.includes("sponsors")}">Sponsors</a></li>
            <li><a href="contact" aria-current="{$page.url.pathname.includes("contact")}">Contact</a></li>
        </ul>
    </div>
    {:else}
    <div>
        <button on:click={toggle}><img src="/menu.svg" alt="Menu button" width=32></button>
    </div>
    {/if}
    {#if menu}
    <div class="mobile--menu">
        <ul>
            <li on:click={toggle} class="mobile--menu_item"><a href="/" aria-current="{$page.url.pathname === "/"}">Home</a></li>
            <li on:click={toggle} class="mobile--menu_item"><a href="team" aria-current="{$page.url.pathname.includes("team")}">Team</a></li>
            <li on:click={toggle} class="mobile--menu_item"><a href="sponsors" aria-current="{$page.url.pathname.includes("sponsors")}">Sponsors</a></li>
            <li on:click={toggle} class="mobile--menu_item"><a href="contact" aria-current="{$page.url.pathname.includes("contact")}">Contact</a></li>
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
        margin-left: 1rem;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    button {
        background: none;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    .mobile--menu {
        position: absolute;
        background-color: #fff;
        left: 0;
        top: 64px;
        width: 100%;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    }

    .mobile--menu a {
        display: block;
        font-size: 1.2em;
    }

    .mobile--menu_item {
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
