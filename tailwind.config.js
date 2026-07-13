/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/@svelte-kit/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Cabinet Grotesk"', 'sans-serif'],
      },
      colors: {
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        violet: {
          300: '#c4b5fd',
          400: '#a78bfa',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
