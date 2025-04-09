import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-roboto-mono)'],
        sans: ['var(--font-inter-sans)'],
        code: ['var(--font-geist-mono)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        neonCyan: '#00FFFF',
        neonBlue: '#0077FF',
        neonPurple: '#7F00FF',
        neonMagenta: '#FF00FF',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        'gradient-pulse': 'gradient-pulse 4s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY("30px")' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-pulse': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
} satisfies Config;
