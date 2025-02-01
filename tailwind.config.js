/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1320: "1320px",
      },
      fontFamily: {
        Montserrat: ["Montserrat"], 
      },
    },
  },
  plugins: [],
};
