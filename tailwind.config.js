/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        }
      },
      backgroundImage: {
        'vitral-gradient': 'linear-gradient(135deg, #005F6B 0%, #94A69A 100%)',
        'vitral-gradient-subtle': 'linear-gradient(135deg, rgba(0, 95, 107, 0.08) 0%, rgba(148, 166, 154, 0.12) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tagline: '0.15em',
      },
      minHeight: {
        touch: '48px',
      },
      minWidth: {
        touch: '48px',
      },
      boxShadow: {
        'vitral-card': '0 4px 20px -2px rgba(31, 36, 33, 0.08)',
        'vitral-hover': '0 10px 25px -5px rgba(0, 95, 107, 0.15)',
      }
    },
  },
  plugins: [],
}
