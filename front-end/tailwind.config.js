/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'base': '#646cff',
        'base2': '#535bf2',
      },
      fontFamily:{
        Bebas: ['Bebas Neue', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif']
      },
    },
  },
  plugins: [],
}

