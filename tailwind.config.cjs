/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'darkest-blue' : '#172F4E',
      'orange' : '#E9993F',
      'light-blue' : '#2FB2DC',
      'dark-blue' : '#204678',
      'bright-orange' : '#FF9A28',
      'bright-blue' : '#2FB2DC',
      'light-gray' : '#D9D9D9',
      'white' : '#FFFFFF',
      'blue-bg': '#04142A',
      'contactBlue':'#132237',
      'nav':'#0B1B30',
      
    },
    fontSize:
    {
      'xl':'3rem',
      'lg':'1.875rem',
      'm':'1.25rem',
      'sm':'1rem',
      'xs':'0.75rem'
    },
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        'ssp': ['Source Serif Pro', 'serif'],
      },
      animation: {
        
      },
      keyframes: {
        
      }
    },
  },
  plugins: [],
}