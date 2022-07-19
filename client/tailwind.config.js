/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      '1': '1px'
    },
    extend: {
      colors: {
        'gray': '#dadce0'
      },
      spacing: {
        '6': '6px',
      }
    },
  },
  plugins: [],
};

