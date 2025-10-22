module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AABF91',
  secondary: '#755179ff',
        neutral: {
          light: '#fdfaf4',
          medium: '#666666',
          dark: '#202020ff',
        },
      },
      fontFamily: {
        title: ['Inter', 'Montserrat', 'sans-serif'],
        body: ['Open Sans', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  plugins: [],
}
