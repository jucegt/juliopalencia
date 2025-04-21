<script>
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import ShinyText from '../shiny-text.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="contact-heading">
  <Header badge="Contact" title="Ready to start?" id="contact-heading">
    Send me a message and I’ll help you get your business online ›
    <ShinyText>quickly, clearly, and stress-free.</ShinyText>
    <br class="hidden md:block" />
    You can share your idea or just ask a question ›
    <ShinyText>I’ll answer you directly.</ShinyText>
  </Header>
</Container>
