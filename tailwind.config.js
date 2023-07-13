/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
       borderOpacity: {
         10: "0.1",
         20: "0.2",
         95: "0.95",
       },
     },
  },
  plugins: [],
};
