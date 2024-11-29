import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blogWhite: 'var(--white)',
        blogBlack: 'var(--black)',
        blogGray: 'var(--gray)',
        blogYellow: 'var(--yellow)',
        blogLightGray100: 'var(--light-gray-100)',
        blogLightGray200: 'var(--light-gray-200)',
        blogSecondary50: 'var(--secondary-50)',
        blogSecondary100: 'var(--secondary-100)',
        blogDarkGray: 'var(--dark-gray)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
