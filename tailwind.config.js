module.exports = {
  purge: {
    enabled: process.env.TAILWIND_MODE === "build",
    content: ["./src/**/*.{html,scss,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      32: "8rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
