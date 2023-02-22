<script lang="ts">
  import { ContactForm, ContentPageLayout } from '$lib/components'
</script>

<ContentPageLayout
  headingText="Contact"
  description={`
    Our contact form is an easy and convenient way for you to get in touch with us.
    Simply fill out the form with your name, email address, and message, and we will respond to you as soon as possible.
    Whether you have a question, comment, or concern, our contact form is the quickest way to reach us.
  `}
>
  <ContactForm />
</ContentPageLayout>
