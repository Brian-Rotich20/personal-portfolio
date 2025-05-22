/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        dark: {
          100: "#1E1E1E",
          200: "#121212",
          300: "#0A0A0A"
        },
        light: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#EEEEEE"
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}