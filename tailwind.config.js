/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    borderWidth: ['responsive', 'first', 'hover', 'focus','last','odd','even'],
  },
  plugins: [],
}
