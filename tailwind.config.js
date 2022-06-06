module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        nftTheme: {

          "primary": "#0085FF",

          "secondary": "#434970",

          "accent": "#111827",

          "neutral": "#f3f4f6",

          "base-100": "#12163C",

          "info": "#06b6d4",

          "success": "#145240",

          "warning": "#B39409",

          "error": "#ED5E76",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
