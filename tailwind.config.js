/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-bg': 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        noto: ['Noto Serif TC', 'serif'],
      }
    },
  },
  plugins: [],
}
