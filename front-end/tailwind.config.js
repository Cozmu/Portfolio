/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      },
      colors: {
        'main-dark': '#0d0d0d',
        'tertiary': '#646cff', // rename
        'base2': '#535bf2', // rename preference
        'contrast': '#4b54ff',
      },
      fontFamily:{
        Bebas: ['Bebas Neue', 'sans-serif'],
        Oswald: ['Oswald', 'Bebas Neue', 'sans-serif']
      },
    },
  },
  plugins: [],
}

