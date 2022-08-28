/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
      '13': '3.25rem',
      '15': '3.75rem',
      '128': '32rem',
      '144': '36rem',
    },
    fontFamily: {
      inter: ['Inter']
    },
    animation: {
      goyang: 'goyang 1s ease-in-out infinite'
    },
    keyframes: {
      goyang: {
        '0%, 100%' : { transform: 'rotate(-3deg)'},
        '50%' : { transform: 'rotate(3deg)' },
      },
    },
    },
  },
  plugins: [],
  darkMode: 'class'
}
