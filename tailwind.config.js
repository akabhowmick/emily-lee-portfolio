/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        pencil: "url('./public/custom-pencil.png') 10 10, auto",
      },
    },
  },
  plugins: [],
};
