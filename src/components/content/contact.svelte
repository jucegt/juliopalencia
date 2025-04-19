<script>
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48">
  <Header badge="Contact" title="Ready to start?">
    Send me a message and I’ll help you get your business online › <span
      class="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text font-bold text-transparent"
      >quickly, clearly, and stress-free.</span
    ><br class="hidden md:block" />
    You can share your idea or just ask a question ›
    <span
      class="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text font-bold text-transparent"
      >I’ll answer you directly.</span
    >
  </Header>
</Container>
