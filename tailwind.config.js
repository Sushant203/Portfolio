/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000428",
        secondary: "#A9AABC",
        third: "#2980B9",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        custombounce: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10%)" },
          "75%": { transform: "translateY(-40%)" },
        },
      },
      animation: {
        custombounce: "custombounce 3s infinte",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
