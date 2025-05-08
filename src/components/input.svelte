<script lang="ts">
  import { type Icon as IconType } from '@lucide/svelte';

  import { cn } from '$util/cn';
  import { phoneMask } from '$action/phone-mask';
  import { zodValidate } from '$action/zod-validate';

  type InputProps = {
    id: string;
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    class?: string;
    icon?: typeof IconType;
    invalid?: boolean;
  };

  let { id, label, icon, invalid, ...restProps }: InputProps = $props();
  let hasChanged = $state(false);

  const Icon = icon;

  function handleChange() {
    hasChanged = true;
  }

  $effect(() => {
    if (invalid) hasChanged = false;
  });
</script>

<div class={cn(restProps.class)}>
  <label for={id} class="text-dark font-onest mb-2 block font-bold">{label}</label>
  <div class="relative">
    <input
      {...restProps}
      {id}
      use:zodValidate={restProps.type as 'email' | 'tel'}
      use:phoneMask={restProps.type === 'tel' ? true : undefined}
      onchange={handleChange}
      class={cn(
        'peer bg-light-50 border-light-200 text-dark focus:ring-primary h-12 w-full rounded-lg border placeholder:text-gray-200 focus:ring-2 focus:ring-offset-2',
        icon && 'pl-12',
        invalid && !hasChanged && 'ring-2 ring-red-400 ring-offset-2'
      )}
    />
    {#if icon}
      <Icon
        class="peer-focus:text-primary pointer-events-none absolute top-[13px] left-[15px] size-6 text-gray-200"
      />
    {/if}
  </div>
</div>
