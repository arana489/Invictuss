/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkest-blue' : '#172F4E',
      'orange' : '#E9993F',
      'light-blue' : '#5AAFD8',
      'dark-blue' : '#204678',
      'bright-orange' : '#FF9A28',
      'bright-blue' : '#4ABAE5',
      'light-gray' : '#D9D9D9',
      'white' : '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}