/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tealSlateStart: "#9eefff",
        tealSlateEnd: "#23c0df",
        brandText: "#0F172A",
        tealSlateBgStart: "#1E90A8",
        tealSlateBgEnd: "#64748B",
      },
      boxShadow: {
        "soft-lg": "0 8px 30px rgba(15,23,42,0.06)",
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};
