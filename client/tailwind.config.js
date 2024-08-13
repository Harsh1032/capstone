/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://cdn-webth.garenanow.com/webth/cdn/fconline/eventslocker/bg.png')",
      }
    },
  },
  plugins: [],
}