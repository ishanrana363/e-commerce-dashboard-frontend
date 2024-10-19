/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        bgcolor : "#1E2A5E"
      }
    },
  },
  plugins: [require('daisyui'),],
}