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
        healing: {
          pink: '#F8ECE9',    // 浅粉色
          mauve: '#E4D3DB',   // 淡紫色
          peach: '#EEBFAA',   // 桃色
          terra: '#C4532D',   // 赤褐色
          brown: '#B37B54',   // 棕色
        }
      },
      fontFamily: {
        crimson: ['Crimson', 'serif'],
        averia: ['Averia', 'serif'],
        sans: ['Open Sans Light', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
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
      },
      backgroundImage: {
        'water-texture': "url('/water-texture.jpg')",
      }
    },
  },
  plugins: [],
}

export default config 