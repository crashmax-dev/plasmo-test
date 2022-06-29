/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"]
    }
  },
  variants: { extend: { typography: ["dark"] } },
  plugins: [require("@tailwindcss/typography")]
}
