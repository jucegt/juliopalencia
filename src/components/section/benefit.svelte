<script lang="ts">
  import { type Icon as IconType } from '@lucide/svelte';

  import { cn } from '$util/cn';
  import Button from '$comp/button.svelte';
  import Card from '$comp/card.svelte';
  import CardHeader from '$comp/card-header.svelte';

  type BenefitProps = {
    icon: typeof IconType;
    title: string;
    description: string;
    layout?: string;
    illustration?: string;
    footer: String;
    buttonText?: string;
    buttonTextHidden?: string;
    buttonIcon?: typeof IconType;
    buttonHref?: string;
    class?: string;
  };

  let {
    icon,
    title,
    description,
    illustration,
    footer,
    buttonText,
    buttonTextHidden,
    buttonIcon,
    buttonHref,
    layout,
    ...restProps
  }: BenefitProps = $props();

  const Icon = icon;
  const ButtonIcon = buttonIcon ?? null;
</script>

<Card
  as="div"
  class={cn(
    'shrink-0 basis-full sm:basis-96 md:basis-112',
    restProps.class,
    layout === 'horizontal' && 'flex-row'
  )}
  role="listitem"
>
  {#if layout === 'horizontal'}
    <div class="flex shrink-1 grow-1 flex-col gap-4">
      <CardHeader icon={Icon}>{title}</CardHeader>
      <p>{description}</p>
      <p class={cn('flex grow-1 flex-col justify-end', illustration && 'lg:grow-0')}>
        <strong>{footer}</strong>
      </p>
      {#if buttonIcon && buttonText}
        <Button href={buttonHref} variant="underline" class="mt-4 w-fit">
          <ButtonIcon
            size="24"
            strokeWidth="2"
            class="transition-[rotate] ease-in-out group-hover:-rotate-10"
          />
          <span>
            {buttonText}
            {#if buttonTextHidden}
              <span class="hidden xl:inline">{buttonTextHidden}</span>
            {/if}
          </span>
        </Button>
      {/if}
    </div>
    {#if illustration}
      <div
        class={cn(
          'hidden max-w-[215px] shrink-0 grow-1 basis-[215px] bg-contain bg-center bg-no-repeat lg:block',
          illustration
        )}
      ></div>
    {/if}
  {:else}
    <CardHeader icon={Icon}>{title}</CardHeader>
    <p>{description}</p>
    {#if illustration}
      <div
        class={cn('my-4 hidden grow-1 bg-contain bg-center bg-no-repeat lg:block', illustration)}
      ></div>
    {/if}
    <p class={cn('flex grow-1 flex-col justify-end', illustration && 'lg:grow-0')}>
      <strong>{footer}</strong>
    </p>
    {#if buttonIcon && buttonText}
      <Button href={buttonHref} variant="underline" class="mt-4 w-fit">
        <ButtonIcon
          size="24"
          strokeWidth="2"
          class="transition-[rotate] ease-in-out group-hover:-rotate-10"
        />
        <span>
          {buttonText}
          {#if buttonTextHidden}
            <span class="hidden xl:inline">{buttonTextHidden}</span>
          {/if}
        </span>
      </Button>
    {/if}
  {/if}
</Card>
