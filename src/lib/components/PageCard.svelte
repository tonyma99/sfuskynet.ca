<script>
    export let heading;
    export let description;
    export let page;
</script>

<div style="cursor:pointer"
    on:click={() => { window.location.href = page }}
    on:keypress={() => { window.location.href = page }}
>
    <p>{heading}</p>
    <p>{description}</p>
    <a href={page}>Visit</a>
</div>

<style>
    a {
        font-weight: bold;
        margin-top: auto;
        align-self: center;
        background-color: #a6192e;
        color: #f8f8f8;
        padding: 6px 12px;
        border-radius: 0.5rem;
    }

    a:hover {
        background-color: #cc0633;
    }
    
    div {
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-basis: 100%;
        background-color: #eee;
        padding: 1.5em;
        margin: 0 1rem;
        font-size: 1rem;
        border-radius: 0.5rem;
    }

    div:hover {
        background-color: #e3e3e3;
    }

    p:first-of-type {
        font-weight: bold;
        font-size: 1.2rem;
        margin: 0;

    }

    @media only screen and (max-width: 768px) {
        div {
            display: inline-block;
            margin: 1rem 0;
        }
    }
</style>
