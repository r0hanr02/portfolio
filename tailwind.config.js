/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'text-lg': '2px 2px 6px rgba(0, 0, 0, 0.5)', // Custom text shadow
        'text-md': '1px 1px 4px rgba(0, 0, 0, 0.4)',
        'text-sm': '1px 1px 2px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        custom: {
          light: '#F0D2AD',
          dark: '#3B2318',
          accent: '#DCA87B',
          secondaryDark: '#4A2718',
          secondaryAccent: '#78462B',
        },
      },
      backgroundImage: {
        'portfolio-gradient': 'linear-gradient(to right, #F0D2AD, #78462B, #DCA87B)',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}




