/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "ubuntu-mono": ['"Ubuntu Mono"', "monospace"],
      },
      keyframes: {
        fadeInDropDown: {
          "0%": { opacity: 0, transform: "translateY(350px)" },
          "100%": { opacity: 1, transform: "translateY(60%)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeInDropDown: "fadeInDropDown 500ms ease-in-out forwards",
        fadeIn: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
