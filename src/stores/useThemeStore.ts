import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

const stored = (typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null) as Theme | null;
const initial: Theme = stored === 'light' ? 'light' : 'dark';

export const theme = writable<Theme>(initial);

theme.subscribe((value) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
    localStorage.setItem('theme', value);
  }
});
