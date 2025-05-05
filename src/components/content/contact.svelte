<script lang="ts">
  import {
    BadgeAlert,
    BadgeCheck,
    CircleCheck,
    Clock,
    ListTree,
    Mail,
    MessageCircleMore,
    Phone,
    SendHorizonal,
    ShieldCheck,
    User
  } from '@lucide/svelte';
  import type { SubmitFunction } from '@sveltejs/kit';
  import { enhance } from '$app/forms';

  import { servicesList } from '$data/services';
  import { t, locale } from '$i18n/config';
  import Button from '$comp/button.svelte';
  import Card from '$comp/card.svelte';
  import Container from '$comp/container.svelte';
  import Header from '$comp/section/header.svelte';
  import Input from '$comp/input.svelte';
  import Select from '$comp/select.svelte';
  import ShinyText from '$comp/shiny-text.svelte';
  import Testimonial from '$comp/section/testimonial.svelte';
  import Textarea from '$comp/textarea.svelte';
  import TrustedBullet from '$comp/trusted-bullet.svelte';
  import Toast from '$comp/toast.svelte';
  import { cn } from '$util/cn';

  const list = servicesList[($locale as 'en' | 'es') || 'es'];

  const TIMEOUT = 10000;

  let showSuccess = $state(false);
  let showError = $state(false);
  let invalidFields = $state<string[]>([]);
  let hideToast = $state(false);

  const handleForm: SubmitFunction = () => {
    return async ({ result, update }) => {
      if (result.type === 'success' && result.data?.success) {
        showSuccess = true;
        showError = false;
        invalidFields = [];
        await update();
        setTimeout(() => {
          hideToast = true;
        }, TIMEOUT - 150);
        setTimeout(() => {
          showSuccess = false;
          hideToast = false;
        }, TIMEOUT);
      } else if (result.type === 'failure') {
        showError = true;
        invalidFields = result.data?.invalidFields ?? [];
        showSuccess = false;
        setTimeout(() => {
          hideToast = true;
        }, TIMEOUT - 150);
        setTimeout(() => {
          showError = false;
          hideToast = false;
        }, TIMEOUT);
      }
    };
  };
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
    <form
      method="POST"
      action="?/email"
      use:enhance={handleForm}
      class="relative shrink-1 grow-1 basis-full lg:basis-0"
    >
      <Card class="gap-4 md:grid md:grid-cols-2 md:gap-8 lg:flex xl:grid">
        <Input
          id="name"
          name="name"
          label="Name:"
          type="text"
          placeholder="e.g. John Doe"
          icon={User}
          invalid={invalidFields.includes('name')}
        />
        <Input
          id="email"
          name="email"
          label="Email:"
          type="email"
          placeholder="e.g. johndoe@mail.com"
          icon={Mail}
          invalid={invalidFields.includes('email')}
        />
        <Input
          id="phone"
          name="phone"
          label="Phone Number:"
          type="tel"
          placeholder="e.g. +1 (502) 9876-5432"
          icon={Phone}
          invalid={invalidFields.includes('phone')}
        />
        <Select
          id="service"
          name="service"
          label="What do you need?"
          placeholder="Select an option"
          options={list}
          icon={ListTree}
          invalid={invalidFields.includes('service')}
        />
        <Textarea
          class="md:col-span-2"
          id="message"
          name="message"
          label="Tell me about your project/business:"
          placeholder="You can describe what you want to build, what your business needs, or simply share your ideas."
          rows={8}
        />
        <div class="flex flex-wrap justify-center gap-4 text-center md:col-span-2">
          <p class="text-dark font-onest block shrink-0 basis-full font-bold">
            How do you want to send your message?
          </p>
          <Button variant="primary" type="submit">
            <span class="z-10">Email</span><Mail size="24" strokeWidth="2" class="z-10" />
          </Button>
          <Button
            variant="secondary"
            class="focus-visible:ring-dark text-dark hover:text-light bg-green-500 hover:bg-green-700"
            href="#"
          >
            WhatsApp <SendHorizonal size="24" strokeWidth="2" />
          </Button>
        </div>
        {#if showSuccess}
          <Toast
            icon={BadgeCheck}
            title="Thanks! Your message was sent successfully."
            class={cn(hideToast && 'translate-y-50 opacity-0')}
          >
            I’ll get back to you soon using your preferred method.
          </Toast>
        {/if}
        {#if showError}
          <Toast
            type="error"
            icon={BadgeAlert}
            title="Fill in the highlighted fields."
            class={cn(hideToast && 'translate-y-50 opacity-0')}
          >
            I need that info to get back to you.
          </Toast>
        {/if}
      </Card>
    </form>
  </div>
</Container>
