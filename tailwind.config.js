/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    " ./node_modules/@svelte-kit/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
export default config;
