<script lang="ts">
  import { type Icon as IconType } from '@lucide/svelte';

  import { cn } from '$util/cn';
  import { zodValidate } from '$action/zod-validate';

  type InputProps = {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    class?: string;
    icon?: typeof IconType;
    invalid?: boolean;
  };

  let { id, label, icon, invalid, ...restProps }: InputProps = $props();
  let hasChanged = $state(false);
  let localInvalid = $state(false);

  function setInvalid(value: boolean) {
    localInvalid = value;
  }

  const Icon = icon;

  function handleChange() {
    hasChanged = true;
  }

  $effect(() => {
    if (invalid) hasChanged = false;
    if (localInvalid) hasChanged = false;
  });
</script>

<div class={cn(restProps.class)}>
  <label for={id} class="text-dark font-onest dark:text-light mb-2 block font-bold">{label}</label>
  <div class="relative">
    <input
      {...restProps}
      {id}
      use:zodValidate={{ type: restProps.type, setInvalid }}
      onchange={handleChange}
      class={cn(
        'peer bg-light-50 ring-offset-light-100 border-light-200 text-dark dark:text-light focus:ring-primary dark:bg-dark-50 dark:border-dark-200 dark:ring-offset-dark-100 dark:placeholder:text-dark-placeholder h-12 w-full rounded-lg border transition-all ease-in-out placeholder:text-gray-200 focus:ring-2 focus:ring-offset-2',
        icon && 'pl-12',
        ((invalid && !hasChanged) || localInvalid) && 'ring-2 ring-red-400 ring-offset-2'
      )}
    />
    {#if icon}
      <Icon
        class="peer-focus:text-primary dark:text-dark-placeholder pointer-events-none absolute top-[13px] left-[15px] size-6 text-gray-200"
      />
    {/if}
  </div>
</div>
