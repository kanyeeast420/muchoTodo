module.exports = {
  content: ["./*/**/*.tsx", "./*/*/**/*.tsx"],
  theme: {
    extend: {
      outline: false,
      gridTemplateRows: {
        auto: "auto auto",
      },
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
  plugins: [require("tailwind-scrollbar")],
  corePlugins: {
    outline: false,
  },
  variants: {
    scrollbar: ["dark"],
  },
};
