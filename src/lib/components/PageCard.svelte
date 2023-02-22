<script lang="ts">
  export let heading: string
  export let description: string
  export let page: string
</script>

<div
  style="cursor:pointer"
  on:click={() => {
    window.location.href = page
  }}
  on:keypress={() => {
    window.location.href = page
  }}
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
    gap: 16px;
    width: 100%;
    flex-direction: column;
    flex-basis: 100%;
    background-color: #e0e0e0;
    padding: 1.5em;
    font-size: 1rem;
    border-radius: 0.5rem;
  }

  div:hover {
    background-color: #d8d8d8;
  }

  p:first-of-type {
    font-weight: bold;
    font-size: 22px;
    margin: 0;
  }

  p:nth-of-type(2) {
    margin: 0;
  }
</style>
