<script lang="ts">
  import type { Icon as IconType } from '@lucide/svelte';
  import { ChevronsUpDown } from '@lucide/svelte';
  import { TelInput, normalizedCountries } from 'svelte-tel-input';
  import type {
    DetailedValue,
    E164Number,
    CountryCode,
    TelInputOptions
  } from 'svelte-tel-input/types';

  import { cn } from '$util/cn';
  import { t } from '$i18n/config';

  type TelInputProps = {
    id: string;
    name: string;
    label: string;
    value?: E164Number | null;
    country?: CountryCode | null;
    valid?: boolean;
    invalid?: boolean;
    detailedValue?: DetailedValue | null;
    options?: TelInputOptions;
    icon?: typeof IconType | null;
    placeholder?: string;
  };

  let {
    id,
    name,
    label,
    value = null,
    country = null,
    valid = true,
    invalid = false,
    detailedValue = null,
    options = {},
    icon = null,
    placeholder
  }: TelInputProps = $props();

  let isDefaultValueSelected = $state(true);
  let hasChangedSelect = $state(false);
  let hasChangedInput = $state(false);
  let localValid = $state(valid);

  function handleChangeSelect() {
    isDefaultValueSelected = false;
    hasChangedSelect = true;
  }
  function handleChangeInput() {
    hasChangedInput = true;
  }
  function handleBlur() {
    localValid = valid;
  }

  const Icon = icon;

  $effect(() => {
    if (invalid) hasChangedSelect = false;
    if (invalid) hasChangedInput = false;
  });
</script>

<div class="group">
  <label for={id} class="text-dark dark:text-light font-onest mb-2 block font-bold">{label}</label>
  <div
    class={cn(
      'focus-within:ring-primary ring-offset-light-100 dark:ring-offset-dark-100 flex rounded-lg transition-all ease-in-out focus-within:ring-2 focus-within:ring-offset-2',
      ((invalid && (!hasChangedSelect || !hasChangedInput)) || !localValid) &&
        'ring-2 ring-red-400 ring-offset-2'
    )}
  >
    <div class="relative focus-within:z-10">
      <select
        class={cn(
          'bg-light-50 border-light-200 dark:border-dark-200 dark:text-light dark:bg-dark-50 text-dark -mr-[1px] block h-12 appearance-none rounded-l-lg border bg-none px-4 pr-10 focus:ring-0',
          icon && 'pl-12',
          isDefaultValueSelected && 'dark:text-dark-placeholder text-gray-200'
        )}
        aria-label={$t('interactions.country')}
        name="country"
        bind:value={country}
        onchange={handleChangeSelect}
      >
        <option value={null} hidden={country !== null}>{$t('interactions.country')}</option>
        {#each normalizedCountries as currentCountry (currentCountry.id)}
          <option
            class="text-dark dark:text-light"
            value={currentCountry.iso2}
            selected={currentCountry.iso2 === country}
            aria-selected={currentCountry.iso2 === country}
          >
            {currentCountry.iso2} (+{currentCountry.dialCode})
          </option>
        {/each}
      </select>
      {#if icon}
        <Icon
          class="group-focus-within:text-primary dark:text-dark-placeholder pointer-events-none absolute top-[13px] left-[15px] size-6 text-gray-200"
        />
      {/if}
      <ChevronsUpDown
        class="text-gray pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
      />
    </div>

    <div class="relative w-full">
      <TelInput
        {placeholder}
        {id}
        {name}
        {options}
        bind:country
        bind:valid
        bind:value
        bind:detailedValue
        onblur={handleBlur}
        onchange={handleChangeInput}
        class={cn(
          'bg-light-50 border-light-200 text-dark dark:border-dark-200 dark:bg-dark-50 dark:text-light dark:placeholder:text-dark-placeholder h-12 w-full rounded-r-lg border placeholder:text-gray-200 focus:ring-0'
        )}
      />
    </div>
  </div>
</div>
