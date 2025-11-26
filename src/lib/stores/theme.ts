import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const getInitialTheme = () => {
  if (!browser) return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const theme = writable<string>(getInitialTheme());

export const toggleTheme = () => {
  theme.update(current => {
    const newTheme = current === 'light' ? 'dark' : 'light';
    if (browser) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
    return newTheme;
  });
};
