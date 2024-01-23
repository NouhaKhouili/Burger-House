/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'yellow': '#FFC044',
      'yellow-hover': '#f5b029',
      'red':'#CF3424',
      'red-hover': '#990e0e',
      'maron': '#452A18',
      'maron-hover': '#231105',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
    },

    fontFamily: {
      'secondery': ['Alfa Slab One', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },



    extend: {
      spacing: {
        '17': '4.25rem',
        '18': '4.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

