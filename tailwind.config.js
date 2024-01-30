/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
      'icy-blue': '#edf4f3',
      'midnight-blue': '#002d2e',
      'beige': '#e5c996',
      'peach': '#dfbea6',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'#ffffff'
      }
    },
  },
  plugins: [],
}
