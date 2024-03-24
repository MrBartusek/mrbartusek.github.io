/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-hover': '#0052ce',
        dark: '#182029',
        light: '#f9fafb'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
