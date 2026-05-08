/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0A2D6B', // The deep blue
        'brand-accent': '#0097C2',  // The teal
      },
    },
  },
  plugins: [],
}