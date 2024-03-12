/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        blue: "hsl(246, 80%, 60%)",
        workRed: "hsl(15, 100%, 70%)",
        playBlue: "hsl(195, 74%, 62%)",
        studyRed: "hsl(348, 100%, 68%)",
        exerciseGreen: "hsl(145, 58%, 55%)",
        socialViolet: "hsl(264, 64%, 52%)",
        selfCareOrange: "hsl(43, 84%, 65%)",
        neutralVeryDarkBlue: "hsl(226, 43%, 10%)",
        neutralDarkBlue: "hsl(235, 46%, 20%)",
        neutralDesaturatedBlue: "hsl(235, 45%, 61%)",
        neutralPaleBlue: "hsl(236, 100%, 87%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
