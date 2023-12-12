import { scale } from '@cloudinary/url-gen/actions/resize';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'loading': 'keyLoading 1.5s infinite'
      },
      keyframes: {
        keyLoading: {
          '0%, 100%': { opacity: 1, transform: scale(1) },
          '50%': { opacity: 0.5, transform: scale(0.95) },
        }
      },
      boxShadow: {
        'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      },
      colors: {
        'main-dark': '#0d0d0d',
        'tertiary': '#646cff',
        'base2': '#610C9F', // rename preference
        'contrast': '#4b54ff',
      },
      fontFamily:{
        Bebas: ['Bebas Neue', 'sans-serif'],
        Oswald: ['Oswald', 'Bebas Neue', 'sans-serif']
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

