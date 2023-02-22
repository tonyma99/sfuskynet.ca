<script lang="ts">
  import { navigating, page } from '$app/stores'

  let menu = false
  let innerWidth: number
  $: if (innerWidth <= 768 || $navigating) menu = false

  function toggle() {
    menu = menu ? false : true
  }

  const links = [
    { path: '/', name: 'Home' },
    { path: '/teams', name: 'Teams' },
    { path: '/execs', name: 'Execs' },
    { path: '/sponsors', name: 'Sponsors' },
    { path: '/contact', name: 'Contact' }
  ]
</script>

<svelte:window bind:innerWidth />

<header>
  <div>
    <a href="/">
      <img src="/images/logo.png" alt="SFU Robot Socccer Club team logo" width="42" height="42" />
    </a>
  </div>
  {#if innerWidth !== undefined}
    <div>
      {#if innerWidth > 768}
        <ul>
          {#each links as link}
            <li>
              <a href={link.path} on:click={toggle} aria-current={$page.url.pathname === link.path}>{link.name}</a>
            </li>
          {/each}
        </ul>
      {:else}
        <span class="material-icons-round" on:click={toggle} on:keypress={toggle}>{!menu ? 'menu' : 'close'} </span>
      {/if}
    </div>
  {/if}
  {#if menu && innerWidth <= 768}
    <div id="mobile">
      <ul>
        {#each links as link}
          <li><a href={link.path} on:click={toggle} aria-current={$page.url.pathname === link.path}>{link.name}</a></li>
        {/each}
      </ul>
    </div>
  {/if}
</header>

<style>
  header {
    align-items: center;
    display: flex;
    height: 64px;
    padding: 0 48px;
    z-index: 1;
    font-size: 1.05rem;
  }

  header > :nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  header > :nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  a {
    transition: 0.3s;
  }

  a:hover {
    color: #777;
  }

  li {
    display: inline-flex;
  }

  li + li {
    margin-left: 16px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  span {
    padding: 0.25rem;
    font-size: 36px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
  }

  #mobile {
    position: absolute;
    background-color: #f8f8f8;
    left: 0;
    top: 64px;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0;
  }

  #mobile a {
    display: block;
    font-size: 1.2em;
  }

  #mobile li {
    text-align: center;
    margin-left: 0;
    display: block;
    padding: 6px;
  }

  [aria-current]:not([aria-current='false']) {
    color: #a6192e;
  }

  @media only screen and (max-width: 768px) {
    header {
      padding: 0 24px;
    }
  }
</style>
