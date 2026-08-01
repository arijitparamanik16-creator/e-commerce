/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "520px",
        md: "1020px",
        lg: "1340px",
        xl: "1550px",
        "2xl": "1700px",
        "3xl": "2010px",
      },
    },
  },
  plugins: [],
};
