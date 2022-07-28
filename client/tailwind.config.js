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
        'secondary-gray': '#efefef',
        'tertiary-gray': '#737373'
      },
      spacing: {
        '100': '1000px',
        
      }
    },
  },
  plugins: [],
};
