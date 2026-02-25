/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1B96C4',
          dark: '#1F2937',
        },
      },
    },
  },
  plugins: [],
}

