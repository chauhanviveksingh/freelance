/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'], // Specify where Tailwind should look for classes
  theme: {
    extend: {
      colors: {
        primary: '#1A202C', // Dark blue-gray
        secondary: '#ffffff', // White
        accent: '#2563EB', // Bright blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
};
