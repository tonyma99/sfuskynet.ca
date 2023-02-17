<script>
    let success = false
    let alert = false
    let waiting = false
    let color;
    $: alert ? color = '#376e37' : color = '#a6192e'
    async function handleSubmit(e) {
        waiting = true
        const formData = new FormData(e.target)
        e.target.reset()
        const result = await fetch("/api/message", {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'content-type': 'application/json'
            },
        })
        if (result.status === 200) success = true
        alert = true
        waiting = false
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input name="name" type="text" placeholder="Full name" required>
    <input name="email" type="email" placeholder="Email" required>
    <textarea name="message" type="text" placeholder="Message" required />
    <button disabled={waiting}>
        {#if !waiting}
        Submit
        {:else if waiting}
        <i class="fa-solid fa-circle-notch"></i>
        {/if}
    </button>
</form>
{#if alert}
<div>
    <p style:color>
        {#if success}
        Message successfully sent.
        {:else}
        Message failed to send.
        {/if}
    </p>
</div>
{/if}

<style>
    form {
        max-width: 576px;
        margin: auto;
    }

    form > * {
        width: 100%;
        padding: 6px 12px;
        margin-bottom: 8px;
        border-radius: 0.5em;
        border: 1px solid #bbb;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1rem;
    }

    form button {
        background-color: #a6192e;
        border: none;
        color: #f8f8f8;
        display: block;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 10px;
    }

    form button:hover {
        background-color: #cc0633;
    }

    form button:disabled {
        background-color: #999;
    }

    form textarea {
        height: 192px;
        min-height: 35px;
    }

    @keyframes rotate {
        from { -webkit-transform: rotate(0deg) } 
        to { -webkit-transform: rotate(360deg) } 
    }

    @-webkit-keyframes rotate {
        from { -webkit-transform: rotate(0deg) } 
        to { -webkit-transform: rotate(360deg) } 
    }

    i {
        -webkit-animation: rotate 1s linear infinite;
        -moz-animation: rotate 1s linear infinite;
        -ms-animation: rotate 1s linear infinite;
        -o-animation: rotate 1s linear infinite;
        animation: rotate 1s linear infinite;
    }

    p {
        color: var(alertColor)
    }

    textarea {
        resize: vertical;
    }
</style>
