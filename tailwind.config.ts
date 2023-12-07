import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'dark-orange':'#db7d4a',
        'light-orange':'#fbaf85',
        'dark-gray':'#f1f1f1',
        'light-gray':'#f1f1f1',
        'custom-dark':'#191919',
        'darker-gray':'#adadad'
      },
      padding:{
        'custom-padding':'40px 140px'
      },
      spacing: {
        'custom-y': '20px', 
        'custom-x': '140px',
        'custom-y-xl': '20px', 
        'custom-x-xl': '340px',
      },
    },
  },
  plugins: [],
}
export default config
