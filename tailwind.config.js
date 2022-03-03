module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1100px",
        "2xl": "1200px",
      },
    },
    fontFamily: {
      sans: ["League Spartan", "sans"],
    },
    extend: {
      fontSize: {
        "8xl": "5rem",
        "9xl": "6rem",
      },
      dropShadow: {
        highlight: "0px 8px 15px rgba(0, 122, 255, 0.3)",
        white: "0px 8px 15px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
