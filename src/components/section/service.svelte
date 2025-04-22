<script lang="ts">
  import { CircleCheck, Sparkle } from '@lucide/svelte';
  import { cn } from '../../utilities/cn';
  import SmallTitle from './small-title.svelte';
  import { formatCurrency } from '../../utilities/format-currency';

  export let variant: 'recommended' | 'default' = 'default';
  export let name: string = '';
  export let description: string = '';
  export let price: number = 0;
  export let text: string = '';
  export let list: string[] = [];

  const formatedPrice = formatCurrency(price);

  const classes = {
    recommended:
      'bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl lg:px-2 lg:pb-2 lg:rounded-[38px] grow-0 basis-full shrink-0 select-none',
    default: 'pt-8 lg:px-2 lg:pb-2 grow-0 basis-full shrink-0 select-none'
  };
</script>

<div class={cn(classes[variant])} role="listitem">
  {#if variant === 'recommended'}
    <p
      class="text-light font-onest flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase"
    >
      <Sparkle size="16" strokeWidth="2" /> Recommended
    </p>
  {/if}
  <article
    class={cn(
      'border-light-200 bg-light-100 dark:bg-dark-100 dark:border-dark-200 rounded-2xl border p-6 lg:rounded-4xl xl:p-16 2xl:px-20',
      variant === 'recommended' && 'lg:shadow-sm dark:lg:shadow-none'
    )}
  >
    <div class="grid gap-x-8 gap-y-4 lg:auto-rows-auto lg:grid-cols-2 xl:gap-x-16">
      <div class="order-1">
        <SmallTitle class="mb-4">{name}</SmallTitle>
        <p class="my-4 sm:text-balance xl:text-wrap 2xl:text-balance">{description}</p>
        <p>
          Starting at{' '}
          <strong class="text-dark font-onest dark:text-light text-xl font-bold">
            {formatedPrice}
          </strong>
        </p>
      </div>
      <div class="order-3 mt-4 flex flex-col gap-4 lg:order-2 lg:col-start-1 lg:row-start-2">
        <slot />
      </div>
      <div class="order-2 lg:order-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <p class="mb-4 lg:mb-8">{text}</p>
        <h4 class="text-dark font-onest dark:text-light mb-4 font-bold lg:mb-8">Includes:</h4>
        <ul class="flex flex-col gap-4 text-base/5">
          {#each list as item (item)}
            <li class="flex gap-4">
              <CircleCheck
                class="text-dark dark:text-light shrink-0 grow-0 basis-[24px]"
                size="20"
                strokeWidth="2"
              />
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </article>
</div>
