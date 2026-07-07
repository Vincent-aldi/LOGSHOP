/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",     // hitam utama (bukan pure black, lebih lembut)
        paper: "#FDFDFC",   // putih utama
        smoke: "#F1F1EF",   // abu sangat muda untuk section background
        line: "#DEDDD8",    // garis/border tipis
        mute: "#6B6B66",    // teks sekunder
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
