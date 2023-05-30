/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },

    fontSize: {
      sm: ["1.4rem", "2.4rem"],
      md: ["1.6rem", "2.4rem"],
    },

    keyframes: {
      slideIn: {
        "0%": { left: "-0.2rem" },
        "100%": { left: "3.3rem" },
      },

      slideBack: {
        "0%": { left: "3.3rem" },
        "100%": { left: "-0.2rem" },
      },
    },

    animation: {
      slideIn: "slideIn 0.3s forwards",
      slideBack: "slideBack 0.3s",
    },

    extend: {
      colors: {
        "text-color-dark-mode": "#FFFFFF",
        "text-color-light-mode": "#000000",
        "stroke-color-dark-mode": "rgba(255, 255, 255, 0.5)",
        "stroke-color-light-mode": "rgba(0, 0, 0, 0.5)",
        "surface-color-dark-mode": "rgba(255, 255, 255, 0.1)",
        "surface-color-dark-mode-hover": "rgba(255, 255, 255, 0.05)",
        "surface-color-light-mode": "rgba(0, 0, 0, 0.05)",
        "surface-color-light-mode-hover": "rgba(0, 0, 0, 0.02)",
        "highlight-color-dark-mode": "rgba(255, 255, 255, 0.2)",
        "highlight-color-light-mode": "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
