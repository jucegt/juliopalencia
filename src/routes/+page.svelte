<script lang="ts">
  import Benefits from '$comp/content/benefits.svelte';
  import ButtonCta from '$comp/header/button-cta.svelte';
  import Contact from '$comp/content/contact.svelte';
  import Experience from '$comp/content/experience.svelte';
  import Faq from '$comp/content/faq.svelte';
  import Footer from '$comp/footer.svelte';
  import Header from '$comp/header.svelte';
  import Hero from '$comp/hero.svelte';
  import Nav from '$comp/header/nav.svelte';
  import Services from '$comp/content/services.svelte';
  import Testimonials from '$comp/content/testimonials.svelte';
</script>

<Header right={ButtonCta}>
  <Nav />
</Header>
<Hero />
<Benefits />
<Services />
<Testimonials />
<Experience />
<Faq />
<Contact />
<Footer />
