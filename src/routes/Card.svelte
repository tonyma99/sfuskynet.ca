<script>
    export let heading;
    export let description;
    export let page;
</script>

<div>
    <h3>{heading}</h3>
    <p>{description}</p>
    <a href={page}>Visit</a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        background-color: #eee;
        padding: 1.5em;
        margin: 0 1rem;
        font-size: 1rem;
        border-radius: 0.5rem;
    }

    h3 {
        font-weight: 600;
        font-size: 1.6em;
        margin: 0;

    }

    a {
        font-weight: 600;
        margin-top: auto;
        align-self: center;
        background-color: #a6192e;
        color: #fff;
        padding: 6px 12px;
        border-radius: 0.5rem;
    }

    a:hover {
        background-color: #cc0633;
    }

    @media only screen and (max-width: 768px) {
        div {
            display: inline-block;
            margin: 1rem 0;
        }
    }
</style>
