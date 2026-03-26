/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexus-bg': '#050508',
        'nexus-panel': 'rgba(20, 20, 25, 0.4)',
        'nexus-border': 'rgba(255, 255, 255, 0.05)',
        'nexus-accent': '#00ffcc',
      }
    },
  },
  plugins: [],
}
