/** @type {import('tailwindcss').Config} */
// "Warm paper" tokens, shared with vamiq.app and scotitech.com (October 2026).
const sans = [
  "ui-sans-serif",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif"
];

const serif = [
  "ui-serif",
  '"New York"',
  '"Iowan Old Style"',
  "Charter",
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "serif"
];

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f4f2ec",
        surface: "#fcfbf8",
        sunken: "#ebe7de",
        ink: { DEFAULT: "#0b1f1e", soft: "#12302e" },
        strong: "#0b1f1e",
        body: "#3b4a48",
        muted: "#66736f",
        "on-ink": "#eef4f2",
        "on-ink-muted": "#a9bcb8",
        line: { DEFAULT: "#e3dfd5", strong: "#cbc6ba" },
        brand: { DEFAULT: "#0f766e", strong: "#0b5d57", soft: "#e2efeb" },
        grade: "#002d35",
        vamiq: "#0f766e",
        axos: "#2f5d86",
        onq: { DEFAULT: "#46698f", amber: "#e6a84a" },
        accent: "#0f766e"
      },
      fontFamily: {
        sans,
        body: sans,
        display: serif
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,31,30,0.04), 0 8px 24px rgba(11,31,30,0.05)",
        card: "0 2px 4px rgba(11,31,30,0.04), 0 18px 40px rgba(11,31,30,0.08)",
        lift: "0 8px 16px rgba(11,31,30,0.06), 0 30px 60px rgba(11,31,30,0.14)"
      },
      maxWidth: {
        page: "1200px",
        prose: "68ch"
      }
    }
  },
  plugins: []
};
