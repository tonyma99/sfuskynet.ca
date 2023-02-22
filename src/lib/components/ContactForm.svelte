<script lang="ts">
  let success = false
  let alert = false
  let disabled = false
  let color: string
  $: alert ? (color = '#376e37') : (color = '#a6192e')

  const handleSubmit = async (event: Event) => {
    disabled = true
    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)
    formElement.reset()
    const result = await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'content-type': 'application/json'
      }
    })
    if (result.status === 200) success = true
    alert = true
    disabled = false
  }
</script>

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

<style>
  form {
    display: flex;
    gap: 6px;
    flex-direction: column;
    max-width: 576px;
    margin: auto;
  }

  form > * {
    background-color: #fafafa;
    width: 100%;
    padding: 6px 12px;
    border-radius: 0.5em;
    border: 1px solid #d0d0d0;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
  }

  form button {
    transition: 0.3s;
    background-color: #a6192e;
    border: none;
    color: #f0f0f0;
    font-weight: bold;
    padding: 8px;
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
