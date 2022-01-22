module.exports = {
  content: ["./*/**/*.tsx", "./*/*/**/*.tsx"],
  theme: {
    extend: {
      outline: false,
    },
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      inter: ["Inter"],
    },
    fontSmoothing: ["hover", "focus"],
  },
  plugins: [],
  corePlugins: {
    outline: false,
  },
};
