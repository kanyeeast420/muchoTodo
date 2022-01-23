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
        "Integral CF",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      IntegralCF: ["Integral CF"],
      code: ["Consolas"],
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
