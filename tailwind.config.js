/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  important: true,
  theme: {
    extend: {
      keyframes: {
        'btn-shadow-hover': {
          '0%': { boxShadow: '0 0 0 0 red' }
        },
        'pulse-shadow': {
          '0%, 100%': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
          '50%': { boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
        },
      },
      animation: {
        'pulse-shadow': 'pulse-shadow 2s ease-in-out infinite',
        'btn-shadow-hover': 'btn-shadow-hover 1.2s'
      },
    },
  },
  plugins: [],
}