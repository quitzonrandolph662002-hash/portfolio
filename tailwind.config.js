/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16130F",
        cream: "#F3EEE4",
        paper: "#FBF8F1",
        clay: "#B98A6E",
        terracotta: "#C06B4A",
        sage: "#8C9A82",
        dust: "#8AA1B1",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
    },
  },
  plugins: [],
};
