/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e6edff',
          200: '#ccdaff',
          300: '#99b5ff',
          400: '#668fff',
          500: '#0052CC', // Azul Royal - Cor Primária
          600: '#0041a3',
          700: '#003d99',
          800: '#003380',
          900: '#002966',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00C853', // Verde Esportivo - Cor Secundária
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#f8f7ff',
          100: '#f1efff',
          200: '#e4e0ff',
          300: '#d1c7ff',
          400: '#b8a9ff',
          500: '#6554C0', // Roxo Sutil - Cor de Acento
          600: '#5a47ad',
          700: '#4f3d99',
          800: '#443386',
          900: '#392973',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121', // Grafite Escuro - Texto
        },
        background: '#FFFFFF', // Branco Neve - Fundo
      }
    },
  },
  plugins: [],
}
