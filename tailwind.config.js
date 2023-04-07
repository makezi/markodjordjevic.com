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
      padding: '2rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        background: colors.zinc[900]
      },
      fontFamily: {
        body: ['var(--font-inter)'],
        heading: ['var(--font-cal-sans)']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.400'),
            fontFamily: theme('fontFamily.body'),
            '--tw-prose-body': theme('colors.neutral.400'),
            '--tw-prose-headings': theme('colors.neutral.300'),
            '--tw-prose-links': theme('colors.neutral.300'),
            '--tw-prose-bold': theme('colors.neutral.400'),
            strong: {
              fontWeight: '700'
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.heading')
            }
            // h1: {
            //   fontSize: theme('fontSize.5xl')
            // },
            // h2: {
            //   fontSize: theme('fontSize.4xl')
            // },
            // h3: {
            //   fontSize: theme('fontSize.2xl')
            // }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
