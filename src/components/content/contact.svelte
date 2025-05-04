<script lang="ts">
  import { Clock, MessageCircleMore, ShieldCheck } from '@lucide/svelte';

  import { t } from '$i18n/config';
  import Container from '$comp/container.svelte';
  import Header from '$comp/section/header.svelte';
  import ShinyText from '$comp/shiny-text.svelte';
  import Testimonial from '$comp/section/testimonial.svelte';
  import TrustedBullet from '$comp/trusted-bullet.svelte';
</script>

<Container
  as="section"
  class="my-24 flex flex-col md:my-48"
  aria-labelledby="contact-heading"
  id="contact"
>
  <Header badge={$t('contact.title')} title={$t('contact.subtitle')} id="contact-heading">
    {$t('contact.description.text.one')}
    <ShinyText>{$t('contact.description.shiny.one')}</ShinyText>
    <br class="hidden md:block" />
    {$t('contact.description.text.two')}
    <ShinyText>{$t('contact.description.shiny.two')}</ShinyText>
  </Header>
  <div class="gap- flex flex-wrap items-center gap-8 lg:gap-16">
    <div class="shrink-0 grow-0 basis-full lg:basis-[46%] xl:basis-[34%]">
      <Testimonial
        name={$t('contact.testimonial.name')}
        business={$t('contact.testimonial.business')}
      >
        {$t('contact.testimonial.testimonial')}
      </Testimonial>
      <TrustedBullet class="mt-8 lg:mt-16">
        <Clock class="text-primary shrink-0 grow-0 basis-[24px]" size="24" strokeWidth="2" />
        <span>{$t('contact.trustedBullets.one')}</span>
      </TrustedBullet>
      <TrustedBullet class="mt-4 lg:mt-8">
        <MessageCircleMore
          class="text-primary shrink-0 grow-0 basis-[24px]"
          size="24"
          strokeWidth="2"
        />
        <span>
          {$t('contact.trustedBullets.two.text')}
          <ShinyText>{$t('contact.trustedBullets.two.shiny')}</ShinyText>
        </span>
      </TrustedBullet>
      <TrustedBullet class="mt-4 lg:mt-8">
        <ShieldCheck class="text-primary shrink-0 grow-0 basis-[24px]" size="24" strokeWidth="2" />
        <span>
          {$t('contact.trustedBullets.three.text')}
          <ShinyText>{$t('contact.trustedBullets.three.shiny')}</ShinyText>
        </span>
      </TrustedBullet>
    </div>
    <div class="shrink-1 grow-1 basis-full lg:basis-0"></div>
  </div>
</Container>
