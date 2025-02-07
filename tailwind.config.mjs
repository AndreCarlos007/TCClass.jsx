/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        colorOne: "var(--color-one)",
        colorTwo: "var(--color-two)",
        colorTree: "var(--color-tree)",
        colorFor: "var(--color-for)",

        colorPrimary: "var(--color-primary)",
        colorSecundary: "var(--color-secundary)",
        colorWhite: "var(--color-textWhite)"
      },
    },
  },
  plugins: [],
};
