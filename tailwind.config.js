/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e88e5',
          dark: '#1565c0',
        },
        secondary: {
          DEFAULT: '#ff8c00',
          dark: '#e67e00',
        },
      },
    },
  },
  plugins: [],
}; 