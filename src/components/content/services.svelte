<script lang="ts">
  import { Compass, FileText, Workflow, Wrench, Hammer, HelpCircle } from '@lucide/svelte';
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import SmallTitle from '../section/small-title.svelte';
  import ShinyText from '../shiny-text.svelte';
  import Step from '../section/step.svelte';
  import Service from '../section/service.svelte';
  import Button from '../button.svelte';
  import Carousel from '../carousel.svelte';

  const services = [
    {
      variant: 'recommended' as 'recommended',
      name: 'Business Website',
      description:
        'A clear and modern website designed just for your business › no templates, no tech stress.',
      price: 465,
      text: 'Let more people find you',
      list: [
        'Custom design',
        'Works on phones and computers',
        'WhatsApp or contact form',
        'Search-friendly'
      ],
      buttons: {
        primary: {
          text: 'I want my site',
          icon: Wrench,
          href: '#contact'
        },
        secondary: {
          text: 'Request a quote',
          icon: FileText,
          href: '#contact'
        }
      }
    },
    {
      name: 'Promotional Page',
      description:
        'A one-page website to highlight your offer and make it easy for customers to take action.',
      price: 325,
      text: 'Perfect for offers or new products',
      list: ['Eye-catching design', 'WhatsApp or checkout button', 'Mobile-friendly and fast'],
      buttons: {
        primary: {
          text: 'Let’s build one',
          icon: Hammer,
          href: '#contact'
        },
        secondary: {
          text: 'Ask first',
          icon: HelpCircle,
          href: '#contact'
        }
      }
    }
  ];
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="services-heading">
  <Header badge="Services" title="What I offer" id="services-heading">
    Here are the services I offer to help your business get online, automate tasks, or simply run
    more efficiently. Each one is designed to give you peace of mind ›
    <ShinyText>no technical knowledge required.</ShinyText>
  </Header>
  <div class="gap- flex flex-wrap items-center gap-8 lg:gap-16">
    <section
      class="shrink-0 grow-0 basis-full md:basis-[40%] lg:basis-[32%] xl:basis-[28%]"
      aria-labelledby="how-it-works-heading"
    >
      <SmallTitle id="how-it-works-heading">
        <Workflow class="text-primary h-6 w-6 md:h-8 md:w-8" strokeWidth="2" /> How it works
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
    </section>
    <div class="shrink-1 grow-1 basis-full md:basis-0">
      <div
        class="before:content-'' after:content-'' before:from-light before:to-light/0 after:from-light after:to-light/0 relative -mx-4 overflow-hidden px-4 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-4 before:bg-gradient-to-r after:absolute after:top-0 after:right-0 after:h-full after:w-4 after:bg-gradient-to-l lg:-mx-8 lg:px-8 lg:before:w-8 lg:after:w-8"
      >
        <Carousel breakpoints={null} role="list">
          {#each services as { buttons, ...rest } (rest.name)}
            <Service {...rest}>
              <Button class="w-fit" variant="primary" href={buttons.primary.href}>
                <span class="z-10">{buttons.primary.text}</span>
                <buttons.primary.icon class="z-10" size="24" strokeWidth="2" />
              </Button>
              <Button class="w-fit" variant="secondary" href={buttons.secondary.href}>
                <span>{buttons.secondary.text}</span>
                <buttons.secondary.icon size="24" strokeWidth="2" />
              </Button>
            </Service>
          {/each}
        </Carousel>
      </div>
    </div>
  </div>
</Container>
