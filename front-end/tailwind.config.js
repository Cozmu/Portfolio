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
      transitionProperty: {
        'width': 'width'
      },
      animation: {
        'loading': 'keyLoading 1.5s infinite',
        'typing': 'typing 2.5s steps(11), blinking 0.5s infinite step-end alternate',
      },
      keyframes: {
        keyLoading: {
          '0%, 100%': { opacity: 1, transform: scale(1) },
          '50%': { opacity: 0.5, transform: scale(0.95) },
        },
        typing: {
          'from': { width: 0 }
        },
        blinking: { 
          '50%': { borderColor: 'transparent' } 
        }
      },
      boxShadow: {
        'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        'carousel': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      },
      colors: {
        'main-dark': '#0d0d0d',
        'tertiary': '#646cff',
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

