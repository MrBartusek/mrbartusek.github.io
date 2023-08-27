/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#161e27',
        washed: '#1d2731',
        'very-washed': '#2d3640',
        primary: '#2563eb'
      }
    },
  },
  plugins: [],
}
