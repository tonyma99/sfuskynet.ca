<div>
  <slot />
</div>

<style>
  div {
    padding: 0 1rem;
    display: flex;
    gap: 2rem;
  }

  @media only screen and (max-width: 768px) {
    div {
      margin: 0 auto;
      padding: 0;
      flex-direction: column;
      max-width: 320px;
    }
  }
</style>
