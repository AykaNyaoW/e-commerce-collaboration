/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['poppins', 'sans-serif'],
      },
      colors: {
        'dark': '#1E2124',
        'light': '#36393E',
        'primary': '#FFA62F',
        'secondary': '#5AB2FF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #FFA62F 0%, #FF5C00 100%)', // Gradient for buttons
      },
      height: {
        '50': '50px', // Custom height for header
      }
    },
  },
  plugins: [],
};
