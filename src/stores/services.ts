import { writable } from 'svelte/store';
import type { EmblaCarouselType } from 'embla-carousel';

const emblaMap = writable(new Map<string, EmblaCarouselType>());

export const carousels = {
  subscribe: emblaMap.subscribe,
  setInstance: (id: string, instance: EmblaCarouselType) => {
    emblaMap.update((map) => {
      map.set(id, instance);
      return map;
    });
  },
  getInstance: (id: string): EmblaCarouselType | undefined => {
    let value: EmblaCarouselType | undefined;
    emblaMap.subscribe((map) => {
      value = map.get(id);
    })();
    return value;
  },
  removeInstance: (id: string) => {
    emblaMap.update((map) => {
      map.delete(id);
      return map;
    });
  }
};
