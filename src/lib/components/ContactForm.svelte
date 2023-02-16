<script>
    let success = false
    let alert = false
    let color;
    $: alert ? color = '#376e37' : color = '#a6192e'
    async function handleSubmit(e) {
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
    }
</script>

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
<form on:submit|preventDefault={handleSubmit}>
    <input name="name" type="text" placeholder="Full name" required>
    <input name="email" type="email" placeholder="Email" required>
    <textarea name="message" type="text" placeholder="Message" required />
    <button>Submit</button>
</form>

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
        font-weight: 500;
        padding: 10px;
    }

    form button:hover {
        background-color: #cc0633;
    }

    form textarea {
        height: 192px;
        min-height: 35px;
    }

    p {
        color: var(alertColor)
    }

    textarea {
        resize: vertical;
    }
</style>
