// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#A8DADC', // Pastel green
        secondary: '#457B9D', // Pastel blue
        // Dark mode colors
        darkPrimary: '#1D1D1D', // Matte black
        darkSecondary: '#4A4A4A', // Grey
        accent: '#E63946', // Accent color for buttons and links
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
