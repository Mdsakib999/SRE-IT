import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-2px, -2px) rotate(-1deg)" },
          "50%": { transform: "translate(2px, -2px) rotate(1deg)" },
          "75%": { transform: "translate(-2px, 2px) rotate(-1deg)" },
          "100%": { transform: "translate(2px, 2px) rotate(0deg)" },
        },
        shake2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-5px, 5px)" },
          "40%": { transform: "translate(5px, -5px)" },
          "60%": { transform: "translate(-5px, -5px)" },
          "80%": { transform: "translate(5px, 5px)" },
        },
      },
      animation: {
        shake: "shake 2s infinite",
        shake2: "shake2 5s infinite",
      },
      fontFamily: {
        Dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [typography],
};
