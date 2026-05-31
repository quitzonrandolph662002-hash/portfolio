/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2B2A26",
        paper: "#FBFAF4",
        cream: "#F2ECCB",
        butter: "#F4EFD2",
        mint: "#A9CFC6",
        sage: "#7FAEA2",
        sand: "#E7E0CD",
        clay: "#B79B7E",
      },
      fontFamily: {
        display: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        body: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        mono: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      borderRadius: {
        blob: "42% 58% 56% 44% / 48% 42% 58% 52%",
      },
    },
  },
  plugins: [],
};
