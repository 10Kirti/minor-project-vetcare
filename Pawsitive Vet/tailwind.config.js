/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'custom_font':'font-family: "Roboto", sans-serif',
      },
      colors:{
        'custom_green':'#00bd56',
        'custom_balck':'#1a1a1a',
        'custom_gray':'#F5F5F5',
        'custom_dark_gray':'rgba(255, 255, 255, 0.6)',
      },
      backgroundColor:{
        'custom_gradient':'linear-gradient(45deg, #207dff 0%, #00bd55 100%)',
      },
    },
  },
  plugins: [],
}