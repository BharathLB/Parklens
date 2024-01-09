module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_7a": "#0000007a", "900_0d": "#0000000d" },
        light_green: { 500: "#80c341", 600: "#77b43e" },
        blue_gray: { 400: "#8c8c8c", 500: "#74788d", 700: "#505d69" },
        deep_orange: { A700: "#f21905" },
        white: { A700: "#ffffff" },
        gray: { 50: "#f9fafb", 300: "#e2e2e2" },
      },
      fontFamily: { inter: "Inter", notosans: "Noto Sans" },
      boxShadow: { bs: "0px 1px  6px 0px #0000000d" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
