/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'rice': {
          50: '#FFFBF0',
          100: '#F5F0E1',
          200: '#E8DCBF',
          300: '#D6C7A0',
          400: '#C4AD7F',
          500: '#B19460',
          600: '#8B724A',
          700: '#6E5A3A',
          800: '#554531',
          900: '#3B3022',
        },
        'leaf': {
          50: '#F0F6E8',
          100: '#E1ECD1',
          200: '#C3D9A3',
          300: '#A5C675',
          400: '#87B347',
          500: '#699F19',
          600: '#558014',
          700: '#4A6741',
          800: '#344D2F',
          900: '#1D3419',
        },
        'earth': {
          50: '#F9F1E6',
          100: '#F3E4CD',
          200: '#E7C89C',
          300: '#DBAD6A',
          400: '#CF9139',
          500: '#C37607',
          600: '#A65F06',
          700: '#8B5A2B',
          800: '#6F4721',
          900: '#543518',
        },
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'grain-texture': "url('https://images.pexels.com/photos/7511651/pexels-photo-7511651.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};