/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        offBlack: "#080808",
      },
      textColor: {
        offBlack: "#080808",
      },
    },
  },
  plugins: [],
};
