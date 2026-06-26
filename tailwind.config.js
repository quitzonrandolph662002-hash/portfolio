/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // clean, minimal palette from the original mockup
        ink: "#23221F",
        paper: "#F4EEE1", // light beige background
        cream: "#EAE2D0",
        butter: "#F3E7A6", // light yellow accent
        mint: "#93D2C7", // turquoise
        sage: "#4FA99C", // deeper turquoise
        sand: "#E7DEC9",
        clay: "#B79B7E",
      },
      fontFamily: {
        // one clean grotesque everywhere (Gilroy-like)
        display: ['"Onest"', "system-ui", "sans-serif"],
        body: ['"Onest"', "system-ui", "sans-serif"],
        mono: ['"Onest"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      borderRadius: {
        blob: "42% 58% 56% 44% / 48% 42% 58% 52%",
      },
    },
  },
  plugins: [],
};
