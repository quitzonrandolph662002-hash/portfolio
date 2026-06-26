/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // palette sampled directly from the original mockup
        ink: "#23221F",
        paper: "#F3F2E9", // light warm beige background
        cream: "#EFEBDA",
        butter: "#F7F2C8", // light yellow accent
        mint: "#AAD7CE", // turquoise
        sage: "#4FA192", // deeper turquoise (accents/labels)
        sand: "#ECE7D6",
        clay: "#B79B7E",
      },
      boxShadow: {
        frame: "0 22px 45px -22px rgba(35,34,31,0.45)",
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
