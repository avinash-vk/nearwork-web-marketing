/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"', "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poly: ["Poly", "sans-serif"],
      },
    },
  },
  plugins: [],
};
