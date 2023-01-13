<script>
	let success = false;
	let submitted = false;
		
	function handleSubmit(e) {
		success = true;

        const formData = new FormData(e.target)

        fetch("/api/message", {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'content-type': 'application/json'
            },
        })

        e.target.reset();
	}
</script>

<svelte:head>
    <title>SFU Robot Soccer - Contact</title>
</svelte:head>

<div class="main--content">
    <div class="section--intro">
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit eius dignissimos molestias optio nulla et voluptate rerum perferendis! Nesciunt aliquid unde sequi ducimus beatae eius fugiat odit illo sapiente.</p>
    </div>

    <div class="section--main">
        {#if success}	
            <p class="alert-success">Message successfully sent.</p>
        {/if}
        <form id="contact-form" class:submitted on:submit|preventDefault={handleSubmit}>
            <input name="name" type="text" class="form-input" placeholder="Full name" required>
            <input name="email" type="email" class="form-input" placeholder="Email" required>
            <textarea name="message" type="text" class="form-input" placeholder="Message" required />
            <button class="form-input" on:click={() => submitted = true}>Submit</button>
        </form>
    </div>
</div>

<style>
    .main--content {
        max-width: 64rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem;
    }
    
    h1 {
        font-size: 3em;
    }

    .section--main {
        margin-top: 4rem;
    }

    textarea {
        resize: vertical;
    }

    #contact-form {
        max-width: 576px;
        margin: auto;
    }

    #contact-form > * {
        width: 100%;
        padding: 6px 12px;
        margin-bottom: 8px;
        border-radius: 0.5em;
        border: 1px solid #bbb;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1rem;
    }

    #contact-form textarea {
        height: 192px;
    }

    #contact-form button {
        background-color: #a6192e;
        border: none;
        color: #f8f8f8;
        display: block;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 10px;
    }

    #contact-form button:hover {
        background-color: #cc0633;
    }

    .alert-success {
        color: #376e37;
    }
</style>
