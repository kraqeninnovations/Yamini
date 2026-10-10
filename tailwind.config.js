/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F6F0E8',
          50: '#FDFBF9',
          100: '#FAF7F2',
          200: '#F6F0E8',
          300: '#EDE2D4',
        },
        gold: {
          light: '#D4C0A8',
          DEFAULT: '#B89A72',
          dark: '#967953',
          shimmer: '#E8D8C3',
        },
        burgundy: {
          light: '#653B40',
          DEFAULT: '#4A292D',
          dark: '#341A1E',
          deep: '#251215',
        },
        softwhite: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(184, 154, 114, 0.25)',
        'gold-hover': '0 10px 30px -4px rgba(184, 154, 114, 0.4)',
        'burgundy-soft': '0 4px 20px -2px rgba(74, 41, 45, 0.25)',
        'luxury': '0 20px 40px -15px rgba(74, 41, 45, 0.12)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
