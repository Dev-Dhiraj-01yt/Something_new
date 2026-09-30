/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1E4631',
          terracotta: '#C85A32',
          canvas: '#FCFBF9',
          surface: '#F4F1EC',
          sage: '#8FAB96',
        },
      },
      boxShadow: {
        card: '0 12px 34px rgba(30, 70, 49, 0.08)',
        soft: '0 24px 70px rgba(30, 70, 49, 0.12)',
      },
    },
  },
  plugins: [],
}
