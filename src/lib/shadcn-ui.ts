import animatePlugin from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import type {Config} from 'tailwindcss'
const {default: flattenColorPalette} = require('tailwindcss/lib/util/flattenColorPalette')
const {fontFamily} = require('tailwindcss/defaultTheme')

const shadcnPlugin = plugin(
  function ({addBase}) {
    addBase({
      ':root': {
        '--font-sans': 'Ubuntu',
        '--background': '0 0% 100%',
        '--foreground': '20 14.3% 4.1%',
        '--card': '0 0% 100%',
        '--card-foreground': '20 14.3% 4.1%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '20 14.3% 4.1%',
        '--primary': '24 9.8% 10%',
        '--primary-foreground': '60 9.1% 97.8%',
        '--secondary': '60 4.8% 95.9%',
        '--secondary-foreground': '24 9.8% 10%',
        '--muted': '60 4.8% 95.9%',
        '--muted-foreground': '25 5.3% 44.7%',
        '--accent': '60 4.8% 95.9%',
        '--accent-foreground': '24 9.8% 10%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '60 9.1% 97.8%',
        '--border': '20 5.9% 90%',
        '--input': '20 5.9% 90%',
        '--ring': '20 14.3% 4.1%',
        '--radius': '0.5rem',
      },
      '.dark': {
        '--background': '20 14.3% 4.1%',
        '--foreground': '60 9.1% 97.8%',
        '--card': '20 14.3% 4.1%',
        '--card-foreground': '60 9.1% 97.8%',
        '--popover': '20 14.3% 4.1%',
        '--popover-foreground': '60 9.1% 97.8%',
        '--primary': '60 9.1% 97.8%',
        '--primary-foreground': '24 9.8% 10%',
        '--secondary': '12 6.5% 15.1%',
        '--secondary-foreground': '60 9.1% 97.8%',
        '--muted': '12 6.5% 15.1%',
        '--muted-foreground': '24 5.4% 63.9%',
        '--accent': '12 6.5% 15.1%',
        '--accent-foreground': '60 9.1% 97.8%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '60 9.1% 97.8%',
        '--border': '12 6.5% 15.1%',
        '--input': '12 6.5% 15.1%',
        '--ring': '24 5.7% 82.9%',
      },
    }),
      addBase({
        '*': {
          '@apply border-border': {},
          'scroll-behavior': 'smooth',
        },
        body: {
          '@apply bg-background text-foreground': {},
        },
      })
  },

  {
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1250px',
        },
      },
      extend: {
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans], // <--------- 👈
        },
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: {height: '0'},
            to: {height: 'var(--radix-accordion-content-height)'},
          },
          'accordion-up': {
            from: {height: 'var(--radix-accordion-content-height)'},
            to: {height: '0'},
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  },
)

export const shadcnPreset = {
  prefix: '',
  darkMode: 'selector',
  content: [],
  plugins: [animatePlugin, addVariablesForColors, shadcnPlugin],
} satisfies Config

function addVariablesForColors({addBase, theme}: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
