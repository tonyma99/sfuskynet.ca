<script>
    import { page } from '$app/stores';
</script>

<header>
    <div>
        <a href="/">
            <img src="/logo.png" alt="SFU Robot Socccer Club team logo" width=42>
        </a>
    </div>
    <div>
        <ul>
            <li><a href="/" aria-current="{$page.url.pathname === "/"}">Home</a></li>
            <li><a href="team" aria-current="{$page.url.pathname.includes("team")}">Team</a></li>
            <li><a href="gallery" aria-current="{$page.url.pathname.includes("gallery")}">Gallery</a></li>
            <li><a href="sponsors" aria-current="{$page.url.pathname.includes("sponsors")}">Sponsors</a></li>
        </ul>
    </div>
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

    [aria-current]:not([aria-current="false"]) {
        color: #a6192e;
    }

    @media only screen and (max-width: 768px) {
        header {
            padding: 0 24px;
        }

        header > :nth-child(2) {
            display: none;
        }
    }
</style>
