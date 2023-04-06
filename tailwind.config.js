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
    extend: {
      colors: {
        background: colors.zinc[900]
      },
      fontFamily: {
        body: ['var(--font-montserrat)'],
        heading: ['var(--font-cal-sans)']
      },
      spacing: {
        '6vw': '6vw'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.400'),
            fontSize: theme('fontSize.lg'),
            'p, span, strong': {
              color: theme('colors.neutral.400'),
              fontFamily: theme('fontFamily.body')
            },
            a: {
              color: theme('colors.neutral.300'),
              fontFamily: theme('fontFamily.body')
            },
            strong: {
              fontWeight: '700'
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.neutral.300'),
              fontFamily: theme('fontFamily.heading')
            },
            h1: {
              fontSize: theme('fontSize.5xl')
            },
            h2: {
              fontSize: theme('fontSize.4xl')
            },
            h3: {
              fontSize: theme('fontSize.2xl')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
