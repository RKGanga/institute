/********************
 * Tailwind Config  *
 ********************/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f46e5', // indigo-600 (switch to #f9f506 if you prefer yellow)
          yellow: '#f9f506',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
