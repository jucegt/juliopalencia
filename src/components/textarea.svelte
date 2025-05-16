<script lang="ts">
  import { cn } from '$util/cn';

  type TextareaProps = {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    class?: string;
    rows?: number;
  };

  let { id, name, label, rows = 4, ...restProps }: TextareaProps = $props();
</script>

<div class={cn(restProps.class)}>
  <label for={id} class="text-dark font-onest dark:text-light mb-2 block font-bold">{label}</label>
  <div class="relative">
    <textarea
      {...restProps}
      {id}
      {name}
      {rows}
      class={cn(
        'peer bg-light-50 border-light-200 ring-offset-light-100 dark:ring-offset-dark-100 dark:bg-dark-50 dark:placeholder:text-dark-placeholder dark:border-dark-200 text-dark focus:ring-primary dark:text-light w-full rounded-lg border px-4 py-3 transition-all ease-in-out placeholder:text-gray-200 focus:ring-2 focus:ring-offset-2'
      )}
    ></textarea>
  </div>
</div>
