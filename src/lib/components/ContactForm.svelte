<script lang="ts">
	let alert = false
	let color: string
	let disabled = false
	let success = false
	$: success ? (color = '#376e37') : (color = '#a6192e')

	const handleSubmit = async (event: Event) => {
		disabled = true
		const formElement = event.target as HTMLFormElement
		const formData = new FormData(formElement)
		formElement.reset()
		const result = await fetch('/api/message', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(Object.fromEntries(formData))
		})
		if (result.status === 200) success = true
		alert = true
		disabled = false
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<input name="name" type="text" placeholder="Full name" required />
		<input name="email" type="email" placeholder="Email" required />
		<textarea name="message" placeholder="Message" required />
		<button {disabled}>Submit</button>
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
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin: auto;
		max-width: 576px;
	}

	form > * {
		background-color: rgba(255, 255, 255, 0.4);
		border: 1px solid #c0c0c0;
		border-radius: 0.5em;
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 1rem;
		padding: 6px 12px;
		width: 100%;
	}

	form button {
		background-color: #a6192e;
		border: none;
		color: #f0f0f0;
		font-weight: bold;
		padding: 8px;
		transition: 0.3s;
	}

	form button:hover {
		background-color: #cc0633;
	}

	form button:disabled {
		background-color: #999;
	}

	form button:focus,
	form button:active {
		background-color: #a6192e;
	}

	form textarea {
		height: 192px;
		resize: none;
	}

	p {
		color: var(alertColor);
	}
</style>
