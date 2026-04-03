/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        'sport-dark': '#020203',
        'sport-gray': '#74798C',
        'sport-light': '#FBFBFB',
        'sport-card': '#FFFFFF',
        'sidebar-bg': '#020203',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
