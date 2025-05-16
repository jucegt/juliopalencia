<script lang="ts">
  import {
    BadgeAlert,
    BadgeCheck,
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

  import { cn } from '$util/cn';
  import { servicesList } from '$data/services';
  import { t, locale } from '$i18n/config';
  import Button from '$comp/button.svelte';
  import Card from '$comp/card.svelte';
  import Container from '$comp/container.svelte';
  import Header from '$comp/section/header.svelte';
  import Input from '$comp/input.svelte';
  import InputTel from '$comp/input-tel.svelte';
  import Select from '$comp/select.svelte';
  import ShinyText from '$comp/shiny-text.svelte';
  import Testimonial from '$comp/section/testimonial.svelte';
  import Textarea from '$comp/textarea.svelte';
  import Toast from '$comp/toast.svelte';
  import TrustedBullet from '$comp/trusted-bullet.svelte';

  const list = servicesList[($locale as 'en' | 'es') || 'es'];

  const TIMEOUT = 10000;

  let showSuccess = $state(false);
  let showError = $state(false);
  let invalidFields = $state<string[]>([]);
  let hideToast = $state(false);
  let intent = $state('email');

  const handleForm: SubmitFunction = () => {
    return async ({ result, update }) => {
      if (result.type === 'success' && result.data?.success && result.data?.url) {
        window.open(result.data.url, '_blank');
        await update();
      } else if (result.type === 'success' && result.data?.success) {
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
      <TrustedBullet class="group mt-8 lg:mt-16">
        <Clock
          class="text-primary shrink-0 grow-0 basis-6 transition-[rotate] ease-in-out group-hover:-rotate-10"
          size="24"
          strokeWidth="2"
        />
        <span>{$t('contact.trustedBullets.one')}</span>
      </TrustedBullet>
      <TrustedBullet class="group mt-4 lg:mt-8">
        <MessageCircleMore
          class="text-primary shrink-0 grow-0 basis-6 transition-[rotate] ease-in-out group-hover:-rotate-10"
          size="24"
          strokeWidth="2"
        />
        <span>
          {$t('contact.trustedBullets.two.text')}
          <ShinyText>{$t('contact.trustedBullets.two.shiny')}</ShinyText>
        </span>
      </TrustedBullet>
      <TrustedBullet class="group mt-4 lg:mt-8">
        <ShieldCheck
          class="text-primary shrink-0 grow-0 basis-6 transition-[rotate] ease-in-out group-hover:-rotate-10"
          size="24"
          strokeWidth="2"
        />
        <span>
          {$t('contact.trustedBullets.three.text')}
          <ShinyText>{$t('contact.trustedBullets.three.shiny')}</ShinyText>
        </span>
      </TrustedBullet>
    </div>
    <form
      method="POST"
      action="?/send"
      use:enhance={handleForm}
      class="relative shrink-1 grow-1 basis-full lg:basis-0"
    >
      <Card class="gap-4 md:grid md:grid-cols-2 md:gap-8 lg:flex xl:grid">
        <Input
          id="name"
          name="name"
          label={$t('contact.form.name.label')}
          type="text"
          placeholder={$t('contact.form.name.placeholder')}
          icon={User}
          invalid={invalidFields.includes('name')}
        />
        <Input
          id="email"
          name="email"
          label={$t('contact.form.email.label')}
          type="email"
          placeholder={$t('contact.form.email.placeholder')}
          icon={Mail}
          invalid={invalidFields.includes('email')}
        />
        <InputTel
          id="phone"
          name="phone"
          label={$t('contact.form.phone.label')}
          placeholder={$t('contact.form.phone.placeholder')}
          icon={Phone}
          invalid={invalidFields.includes('country') || invalidFields.includes('phone')}
        />
        <Select
          id="service"
          name="service"
          label={$t('contact.form.service.label')}
          placeholder={$t('contact.form.service.placeholder')}
          options={list}
          icon={ListTree}
          invalid={invalidFields.includes('service')}
        />
        <Textarea
          class="md:col-span-2"
          id="message"
          name="message"
          label={$t('contact.form.message.label')}
          placeholder={$t('contact.form.message.placeholder')}
          rows={8}
        />
        <input type="hidden" name="intent" value={intent} />
        <div class="flex flex-wrap justify-center gap-4 text-center md:col-span-2">
          <p class="text-dark font-onest dark:text-light block shrink-0 basis-full font-bold">
            {$t('contact.form.submit.label')}
          </p>
          <Button variant="primary" type="submit" onclick={() => (intent = 'email')}>
            <span class="z-10">Email</span>
            <Mail
              size="24"
              strokeWidth="2"
              class="z-10 transition-[rotate] ease-in-out group-hover:rotate-10"
            />
          </Button>
          <Button
            variant="secondary"
            class="focus-visible:ring-dark text-dark hover:text-light dark:text-dark bg-green-500 hover:bg-green-700 dark:bg-green-500"
            type="submit"
            onclick={() => (intent = 'whatsapp')}
          >
            WhatsApp <SendHorizonal
              size="24"
              strokeWidth="2"
              class="transition-[rotate] ease-in-out group-hover:-rotate-10"
            />
          </Button>
        </div>
        {#if showSuccess}
          <Toast
            icon={BadgeCheck}
            title={$t('contact.form.submit.success.title')}
            class={cn(hideToast && 'translate-y-50 opacity-0')}
          >
            {$t('contact.form.submit.success.text')}
          </Toast>
        {/if}
        {#if showError}
          <Toast
            type="error"
            icon={BadgeAlert}
            title={$t('contact.form.submit.error.title')}
            class={cn(hideToast && 'translate-y-50 opacity-0')}
          >
            {$t('contact.form.submit.error.text')}
          </Toast>
        {/if}
      </Card>
    </form>
  </div>
</Container>
