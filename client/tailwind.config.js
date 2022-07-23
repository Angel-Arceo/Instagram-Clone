/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'lobster': ['Lobster', 'cursive'],
      'rubik': ['Rubik', 'sans-serif']
    },
    borderWidth: {
      '1': '1px'
    },
    extend: {
      colors: {
        'gray': '#dadce0',
        'gray-secondary': '#efefef'
      },
      spacing: {
        '100': '1000px',
        
      }
    },
  },
  plugins: [],
};
