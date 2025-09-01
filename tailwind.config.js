/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'stock-image': "url('./assets/Stock-Image.jpg')",
        'footer-texture': "url('/images/footer-texture.png')",
      },
    },
  },
  plugins: [],
}

