<script lang="ts">
  import { ChevronsUpDown, type Icon as IconType } from '@lucide/svelte';

  import { cn } from '$util/cn';

  type SelectOption = {
    value: string;
    label: string;
  };

  type SelectProps = {
    id: string;
    name: string;
    label: string;
    options: SelectOption[];
    class?: string;
    placeholder?: string;
    icon?: typeof IconType;
    invalid?: boolean;
  };

  let { id, name, label, options, icon, placeholder, invalid, ...restProps }: SelectProps =
    $props();

  const Icon = icon;

  let isDefaultValueSelected = $state(true);
  let hasChanged = $state(false);

  function handleChange() {
    isDefaultValueSelected = false;
    hasChanged = true;
  }

  $effect(() => {
    if (invalid) hasChanged = false;
  });
</script>

<div class={cn(restProps.class)}>
  <label for={id} class="text-dark font-onest dark:text-light mb-2 block font-bold">{label}</label>
  <div class="relative">
    <select
      {...restProps}
      {id}
      {name}
      onchange={handleChange}
      class={cn(
        'peer bg-light-50 ring-offset-light-100 dark:ring-offset-dark-100 dark:bg-dark-50 dark:border-dark-200 border-light-200 text-dark focus:ring-primary dark:placeholder:text-dark-placeholder h-12 w-full appearance-none rounded-lg border bg-none px-4 pr-10 placeholder:text-gray-200 focus:ring-2 focus:ring-offset-2',
        icon && 'pl-12',
        isDefaultValueSelected && 'dark:text-dark-placeholder text-gray-200',
        invalid && !hasChanged && 'ring-2 ring-red-400 ring-offset-2'
      )}
    >
      <option disabled selected>{placeholder}</option>
      {#each options as { value, label }}
        <option class="text-dark dark:text-light" {value}>{label}</option>
      {/each}
    </select>

    {#if icon}
      <Icon
        class="peer-focus:text-primary dark:text-dark-placeholder pointer-events-none absolute top-[13px] left-[15px] size-6 text-gray-200"
      />
    {/if}
    <ChevronsUpDown
      class="text-gray pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
    />
  </div>
</div>
