/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#286bfc',
        'primary-hover': '#0052ce',
        dark: '#182029',
        light: '#f9fafb'
      },
      container: {
				screens: {
					sm: '576px',
					md: '786px',
					lg: '992px',
					xl: '1000px',
					'2xl': '1150px',
				},
			},
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
