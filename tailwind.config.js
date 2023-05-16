// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        body: ['var(--font-jakarta)'],
        heading: ['var(--font-cal-sans)']
      },
      colors: {
        body: colors.neutral['800'],
        'body-secondary': colors.neutral['500']
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.body'),
            a: {
              fontWeight: 400,
              textUnderlineOffset: '2px',
              textDecorationThickness: '2px',
              textDecorationColor: theme('colors.neutral.400'),
              transitionProperty: 'all',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '150ms'
            },
            'a:hover': {
              textDecorationColor: theme('colors.body')
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.heading')
            }
          }
        }
      }),
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
