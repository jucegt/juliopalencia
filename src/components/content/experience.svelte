<script lang="ts">
  import { t } from '$i18n/config';
  import Container from '$comp/container.svelte';
  import Header from '$comp/section/header.svelte';
  import Logo from '$comp/logo.svelte';
  import logos from '$data/logos';
  import ShinyText from '$comp/shiny-text.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="experience-heading">
  <Header badge={$t('experience.title')} title={$t('experience.subtitle')} id="experience-heading">
    {$t('experience.description.text')}
    <ShinyText>{$t('experience.description.shiny')}</ShinyText>
  </Header>
  <div
    class="before:content-'' after:content-'' before:from-light before:to-light/0 after:from-light after:to-light/0 dark:before:from-dark dark:before:to-dark/0 dark:after:from-dark dark:after:to-dark/0 relative overflow-hidden before:absolute before:top-0 before:left-0 before:z-10 before:h-37 before:w-10 before:bg-gradient-to-r after:absolute after:top-0 after:right-0 after:h-37 after:w-10 after:bg-gradient-to-l md:before:aspect-square md:before:w-37 md:after:aspect-square md:after:w-37"
  >
    <div class="animate-slide hover:pause flex min-w-max whitespace-nowrap">
      {#each logos as { id, name } (id)}
        <Logo aria-label={name} {id} alt={name} title={name} />
      {/each}
      {#each logos as { id, name } (id)}
        <Logo aria-label={name} {id} alt={name} title={name} aria-hidden="true" />
      {/each}
    </div>
  </div>
  <p class="text-gray/50 mt-4 text-center text-sm text-balance">
    {$t('experience.disclaimer')}
  </p>
</Container>
