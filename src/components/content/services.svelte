<script lang="ts">
  import { Compass, Workflow } from '@lucide/svelte';
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import SmallTitle from '../section/small-title.svelte';
  import ShinyText from '../shiny-text.svelte';
  import Step from '../section/step.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="services-heading">
  <Header badge="Services" title="What I offer" id="services-heading">
    Here are the services I offer to help your business get online, automate tasks, or simply run
    more efficiently. Each one is designed to give you peace of mind ›
    <ShinyText>no technical knowledge required.</ShinyText>
  </Header>
  <div class="gap- flex flex-wrap items-center gap-8 lg:gap-16">
    <div class="shrink-0 grow-0 basis-full lg:basis-[46%] xl:basis-[28%]">
      <SmallTitle>
        <Workflow class="text-primary" size="32" strokeWidth="2" /> How it works
      </SmallTitle>
      <Step before={1} class="mt-8">Tell me about your business</Step>
      <Step before={2} class="mt-4 md:mt-6">I plan and build a solution for you</Step>
      <Step before={3} class="mt-4 md:mt-6">You review and give feedback</Step>
      <Step before={4} class="mt-4 md:mt-6">We launch or implement it!</Step>
      <button
        class="focus-visible:ring-primary ring-primary mt-8 flex cursor-pointer flex-wrap items-center gap-x-4 gap-y-2 rounded-md p-1 focus:outline-none focus-visible:ring-2"
      >
        <Compass size="24" strokeWidth="2" class="text-primary" />
        <ShinyText>Not sure where to start?</ShinyText>
        I’ll guide you
      </button>
    </div>
    <div class="shrink-1 grow-1 basis-full lg:basis-0"></div>
  </div>
</Container>
