// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      lang: 'en' | 'es';
      theme: 'dark' | 'light';
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
