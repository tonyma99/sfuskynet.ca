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
        transition: 0.3s;
        font-weight: bold;
        margin-top: auto;
        align-self: center;
        background-color: #a6192e;
        color: #f0f0f0;
        padding: 6px 12px;
        border-radius: 0.5rem;
    }

    a:hover {
        background-color: #cc0633;
    }
    
    div {
        transition: 0.3s;
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-basis: 100%;
        background-color: #e0e0e0;
        padding: 1.5em;
        margin: 0 1rem;
        font-size: 1rem;
        border-radius: 0.5rem;
    }

    div:hover {
        background-color: #d8d8d8;
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
