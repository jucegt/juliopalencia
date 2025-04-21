<script>
  import Container from '../container.svelte';
  import Logo from '../logo.svelte';
  import Header from '../section/header.svelte';
  import ShinyText from '../shiny-text.svelte';

  const logos = [
    {
      id: 'intecap',
      name: 'Intecap'
    },
    {
      id: 'jeep',
      name: 'Jeep'
    },
    {
      id: 'revlon',
      name: 'Revlon'
    },
    {
      id: 'hyundai',
      name: 'Hyundai'
    },
    {
      id: 'cocacola',
      name: 'Coca-Cola'
    },
    {
      id: 'mcdonalds',
      name: "McDonald's"
    },
    {
      id: 'siman',
      name: 'Siman'
    },
    {
      id: 'mercedesbenz',
      name: 'Mercedes-Benz'
    },
    {
      id: 'gallo',
      name: 'Gallo'
    }
  ];
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="experience-heading">
  <Header badge="Experience" title="Pro-level experience" id="experience-heading">
    I’ve worked on projects for well-known companies.<strong>*</strong> That experience helps me
    bring high standards, clean design, and real results to every business I work with ›
    <ShinyText>no matter the size.</ShinyText>
  </Header>
  <div
    class="before:content-'' after:content-'' before:from-light before:to-light/0 after:from-light after:to-light/0 relative overflow-hidden before:absolute before:top-0 before:left-0 before:z-10 before:aspect-square before:w-37 before:bg-gradient-to-r after:absolute after:top-0 after:right-0 after:aspect-square after:w-37 after:bg-gradient-to-l"
  >
    <div class="animate-slide paused-on-hover flex min-w-max whitespace-nowrap">
      {#each logos as { id, name } (id)}
        <Logo aria-label={name} {id} alt={name} title={name} />
      {/each}
      {#each logos as { id, name } (id)}
        <Logo aria-label={name} {id} alt={name} title={name} aria-hidden="true" />
      {/each}
    </div>
  </div>
  <p class="mt-4 text-center text-sm text-balance opacity-50">
    *Logos represent companies I’ve worked with through teams, agencies or subcontracting. Their use
    does not imply a direct commercial relationship or official endorsement.
  </p>
</Container>
