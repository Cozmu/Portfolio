/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main': '#0d0d0d',
        'body': '#040404',
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

