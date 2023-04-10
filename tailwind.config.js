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
      center: true,
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        body: colors.neutral[400],
        heading: colors.neutral[300],
        background: colors.zinc[900],
        disabled: colors.neutral[500],
        'background-highlight': colors.zinc[800],
        link: colors.blue[300]
      },
      fontFamily: {
        body: ['var(--font-inter)'],
        heading: ['var(--font-cal-sans)']
      },
      spacing: {
        '6vw': '6vw'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.body'),
            fontFamily: theme('fontFamily.body'),
            '--tw-prose-body': theme('colors.body'),
            '--tw-prose-headings': theme('colors.heading'),
            '--tw-prose-links': theme('colors.link'),
            '--tw-prose-bold': theme('colors.heading'),
            strong: {
              fontWeight: '700'
            },
            a: {
              textDecoration: 'no-underline'
            },
            'a:hover': {
              textDecoration: 'underline'
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.heading'),
              color: theme('colors.heading')
            },
            h1: {
              textAlign: 'center'
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
