/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        vitral: {
          primary: '#005F6B',
          secondary: '#94A69A',
          dark: '#1F2421',
          'bg-light': '#F8F9FA',
          'bg-dark': '#121614',
          'card-dark': '#1A201C',
        },
      },
    },
  },
  plugins: [],
}
