export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#ffc0e0',
          purple: '#e8b4f8',
          blue: '#b8e6f8',
          green: '#c8f8d8',
          yellow: '#f0f8b8',
          lavender: '#d9c4f8',
          mint: '#d4f8e8',
        },
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #ffc0e0 0%, #e8b4f8 25%, #b8e6f8 50%, #c8f8d8 75%, #f0f8b8 100%)',
        'gradient-bubble': 'linear-gradient(135deg, rgba(232, 180, 248, 0.4), rgba(200, 248, 216, 0.4))',
        'gradient-accent': 'linear-gradient(135deg, #e8b4f8, #b8e6f8)',
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(200, 150, 255, 0.15)',
        'soft-pink': '0 8px 32px rgba(255, 192, 224, 0.2)',
        'soft-green': '0 8px 32px rgba(200, 248, 216, 0.2)',
      },
      borderRadius: {
        bubble: '3rem',
      },
    },
  },
  plugins: [],
};
