<script lang="ts">
  import { writable } from 'svelte/store';
  import { cn } from '../utilities/cn';

  export let texts: string[] = [];
  export let typingSpeed: number = 100;
  export let deletingSpeed: number = 50;
  export let delayAfterTyping: number = 5000;
  export let delayAfterDeleting: number = 500;
  export let loop: boolean = true;
  const text = writable('');

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  (async () => {
    let index = 0;

    do {
      const currentText = texts[index % texts.length];

      for (let i = 1; i <= currentText.length; i++) {
        text.set(currentText.slice(0, i));
        await wait(typingSpeed);
      }
      await wait(delayAfterTyping);

      for (let i = currentText.length; i >= 0; i--) {
        text.set(currentText.slice(0, i));
        await wait(deletingSpeed);
      }
      await wait(delayAfterDeleting);

      index++;
    } while (loop || index < texts.length);
  })();
</script>

<span
  {...$$restProps}
  class={cn('animate-blink border-r border-[currentColor] text-base/4', $$restProps.class)}
>
  {$text}
</span>
