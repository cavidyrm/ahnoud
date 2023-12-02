import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
        screens: {
          xl: '1140px'
        }
      },
      fontFamily: {
        enSans: ['var(--font-argentum-sans)'],
        faSans: ['var(--font-kalameh)']
      }
    },
  },
  plugins: [],
}
export default config
