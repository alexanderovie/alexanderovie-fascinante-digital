// tailwind.config.ts (versión TS optimizada)
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/globals.css',
    './ui-pro/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        gradient:
          'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
      },
      animation: {
        opacity: 'opacity 0.25s ease-in-out',
        appearFromRight: 'appearFromRight 300ms ease-in-out',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        popup: 'popup 0.25s ease-in-out',
        shimmer: 'shimmer 3s ease-out infinite alternate',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        appearFromRight: {
          '0%': { opacity: 0.3, transform: 'translate(15%, 0px)' },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
        wiggle: {
          '0%, 20%, 80%, 100%': { transform: 'rotate(0deg)' },
          '30%, 60%': { transform: 'rotate(-2deg)' },
          '40%, 70%': { transform: 'rotate(2deg)' },
          '45%': { transform: 'rotate(-4deg)' },
          '55%': { transform: 'rotate(4deg)' },
        },
        popup: {
          '0%': { transform: 'scale(0.8)', opacity: 0.8 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '0 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('tailwind-scrollbar'), ← lo quitamos porque no es necesario
  ],
}

export default config