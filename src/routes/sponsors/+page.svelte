<script lang="ts">
  import { ContentPageLayout } from '$lib/components'
  export let data: { sponsors: Array<Sponsor> }
</script>

<ContentPageLayout
  headingText="Sponsors"
  description={`
        The sponsors section of our website recognizes and thanks the companies and organizations that have generously supported us.
        Their contributions have allowed us to continue our mission and provide valuable services to our community.
        We appreciate their support and encourage our audience to support these sponsors in return.
    `}
>
  <h2>Gold Sponsors</h2>
  <div>
    {#each data.sponsors as sponsor}
      <a href={sponsor.website}><img src={sponsor.logo} alt="{sponsor.name} logo" width="256" /></a>
    {/each}
  </div>
</ContentPageLayout>

<style>
  a {
    display: inline-block;
  }
</style>
