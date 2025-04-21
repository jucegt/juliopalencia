<script>
  import { Clock, MessageCircleMore, ShieldCheck } from '@lucide/svelte';
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import ShinyText from '../shiny-text.svelte';
  import Testimonial from '../testimonial.svelte';
  import TrustedBullet from '../trusted-bullet.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="contact-heading">
  <Header badge="Contact" title="Ready to start?" id="contact-heading">
    Send me a message and I’ll help you get your business online ›
    <ShinyText>quickly, clearly, and stress-free.</ShinyText>
    <br class="hidden md:block" />
    You can share your idea or just ask a question ›
    <ShinyText>I’ll answer you directly.</ShinyText>
  </Header>
  <div class="gap- flex flex-wrap items-center gap-8 lg:gap-16">
    <div class="shrink-0 grow-0 basis-full lg:basis-[46%] xl:basis-[34%]">
      <Testimonial name="Javier" business="Small business owner">
        “He helped me get a clean, well-made website up in just a few days. I always felt like he
        was just a message away if I had questions.”
      </Testimonial>
      <TrustedBullet class="mt-8 lg:mt-16">
        <Clock class="text-primary shrink-0 grow-0 basis-[24px]" size="24" strokeWidth="2" />
        <span>I usually reply within 24 hours</span>
      </TrustedBullet>
      <TrustedBullet class="mt-4 lg:mt-8">
        <MessageCircleMore
          class="text-primary shrink-0 grow-0 basis-[24px]"
          size="24"
          strokeWidth="2"
        />
        <span>
          I’ll reach out via WhatsApp or email › <ShinyText>whichever you prefer</ShinyText>
        </span>
      </TrustedBullet>
      <TrustedBullet class="mt-4 lg:mt-8">
        <ShieldCheck class="text-primary shrink-0 grow-0 basis-[24px]" size="24" strokeWidth="2" />
        <span>
          Your info stays private › <ShinyText>I don’t share it with anyone</ShinyText>
        </span>
      </TrustedBullet>
    </div>
    <div class="shrink-1 grow-1 basis-full lg:basis-0"></div>
  </div>
</Container>
