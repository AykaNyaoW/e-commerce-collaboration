/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['poppins', 'sans-serif'],
        sans: ['sans-serif', 'poppins'],
      },
      colors: {
        'dark': '#1E2124',
        'grey': '#36393E',
        'lightgrey': '#424549',
        'primary': '#FFA62F',
        'primary-light': '#F4BB44',
        'secondary': '#0096FF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #FFA62F 0%, #E3963E 100%)',  // Gradient for buttons
      },
      height: {
        '50': '50px', // Custom height for header
      },
      
    },
  },
  plugins: [],
};
