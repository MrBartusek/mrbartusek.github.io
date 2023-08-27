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
        washed: '#1c2630',
        'very-washed': '#252e37',
        primary: '#2563eb'
      }
    },
  },
  plugins: [],
}
