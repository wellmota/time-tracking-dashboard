/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.9rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        blue: "hsl(246, 80%, 60%)",
        work: "hsl(15, 100%, 70%)",
        study: "var(--studyRed)",
        play: "var(--playBlue)",
        exercise: "var(--exerciseGreen)",
        social: "var(--socialViolet)",
        selfCare: "var(--selfCareOrange)",
        neutralVeryDarkBlue: "var(--neutralVeryDarkBlue)",
        neutralDarkBlue: "var(--neutralDarkBlue)",
        neutralDesaturatedBlue: "var(--neutralDesaturatedBlue)",
        neutralPaleBlue: "var(--neutralPaleBlue)",
        red: "#D20000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-study",
    "bg-exercise",
    "bg-play",
    "bg-social",
    "bg-selfCare",
    "bg-work",
  ],
};
