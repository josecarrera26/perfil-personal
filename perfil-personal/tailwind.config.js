/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  darkMode: 'media',
  content: ["./src/**/*.{html,js}",  "./node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

