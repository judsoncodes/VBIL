/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic ROSE Brand Logo Palette
        maroon: {
          950: '#6B0A0F',
          900: '#9E1117', // Deep ROSE Brand Red
          800: '#F50108', // Official Sampled ROSE Brand Logo Red (#F50108)
          700: '#FF333B',
          600: '#FF5960',
          200: '#FCD2D4',
          100: '#FDE8E9',
          50: '#FEF2F3',
        },
        gold: {
          600: '#C49132',
          500: '#D9A441', // Warm biscuit-gold accent
          400: '#E2B65E',
          200: '#F4E3BF',
          100: '#FAF2E3',
        },
        cream: {
          50: '#FFFDF9',
          100: '#F7EFE1', // Base background surface
          200: '#EFE4D0',
          300: '#E2D3B8',
          400: '#D4C1A0',
        },
        espresso: {
          900: '#17110E',
          800: '#241A15', // Near-black text
          700: '#34261F',
          600: '#4D3B31',
          400: '#7A6456',
          200: '#BDB0A6',
          100: '#EAE6E2',
        },
        rosePink: {
          600: '#D69499',
          500: '#E8B4B8', // Soft rose accent thread
          300: '#F1CDD0',
          100: '#FAECEE',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Newsreader', '"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(36, 26, 21, 0.08)',
        'warm-hover': '0 20px 40px -15px rgba(245, 1, 8, 0.2)',
        'gold-glow': '0 0 25px rgba(217, 164, 65, 0.3)',
      },
      aspectRatio: {
        'product': '4 / 5',
        'hero': '16 / 9',
        'square': '1 / 1',
      }
    },
  },
  plugins: [],
}
