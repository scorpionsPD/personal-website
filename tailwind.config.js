/** @type {import('tailwindcss').Config} */
// Dark teal-ink tokens: the deep ink of vamiq.app and scotitech.com as the page,
// with warm off-white type and a brighter teal accent (October 2026).
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
        canvas: "#0b1514",
        surface: "#101e1c",
        sunken: "#172826",
        band: "#0e2826",
        ink: { DEFAULT: "#040a09", soft: "#0b1514" },
        strong: "#eef4f2",
        body: "#bccac6",
        muted: "#8a9c98",
        "on-ink": "#eef4f2",
        "on-ink-muted": "#a9bcb8",
        line: { DEFAULT: "#213330", strong: "#2f4540" },
        brand: { DEFAULT: "#5ccdbd", strong: "#8be3d6", soft: "#123330" },
        grade: "#002d35",
        vamiq: "#5ccdbd",
        axos: "#7aa8d6",
        onq: { DEFAULT: "#82a9d2", amber: "#e6a84a" },
        accent: "#5ccdbd"
      },
      fontFamily: {
        sans,
        body: sans,
        display: serif
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.25)",
        card: "0 2px 4px rgba(0,0,0,0.3), 0 18px 40px rgba(0,0,0,0.35)",
        lift: "0 8px 16px rgba(0,0,0,0.35), 0 30px 60px rgba(0,0,0,0.5)"
      },
      maxWidth: {
        page: "1200px",
        prose: "68ch"
      }
    }
  },
  plugins: []
};
