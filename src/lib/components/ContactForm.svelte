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
		background-color: #ffffff70;
		border: 1px solid #00000040;
		border-radius: 8px;
		font-family: inherit;
		font-size: 1rem;
		padding: 0.5rem;
		width: 100%;
	}

	::placeholder {
		color: var(--grey-400);
	}

	button {
		background-color: var(--primary-color-dark);
		border: none;
		color: #fff;
		font-weight: bold;
		transition: 0.2s;
	}

	button:hover {
		background-color: var(--primary-color);
	}

	button:disabled {
		background-color: var(--grey-300);
	}

	button:focus,
	button:active {
		background-color: var(--primary-color-dark);
	}

	textarea {
		height: 192px;
		resize: none;
	}

	p {
		color: var(alertColor);
	}
</style>
