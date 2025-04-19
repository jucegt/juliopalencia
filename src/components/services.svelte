<script>
  import Container from './container.svelte';
  import Header from './section/header.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48">
  <Header badge="Services" title="What I offer">
    Here are the services I offer to help your business get online, automate tasks, or simply run
    more efficiently. Each one is designed to give you peace of mind › <span
      class="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text font-bold text-transparent"
      >no technical knowledge required.</span
    >
  </Header>
</Container>
