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
        'body': '#040404',
        'base': '#646cff', // rename
        'base2': '#535bf2', // rename preference
      },
      fontFamily:{
        Bebas: ['Bebas Neue', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif']
      },
    },
  },
  plugins: [],
}

