import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          light: '#B37FEB',
          dark: '#531DAB',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          light: '#36CFC9',
          dark: '#08979C',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          light: '#FF85C0',
          dark: '#C41D7F',
        },
        healing: {
          pink: '#F8ECE9',
          mauve: '#E4D3DB',
          peach: '#EEBFAA',
          terra: '#C4532D',
          brown: '#B37B54',
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(124, 58, 237, 0.5)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

export default config 