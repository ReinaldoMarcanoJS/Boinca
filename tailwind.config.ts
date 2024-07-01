import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "xxs":"200px",
        "mb": "360px" 
      },
      backgroundImage: {
        "background-init" : "url('/img/bg-edit.png')",
        "background" : "url('/public/bg-motores.png')"
      },
    },
  },
  plugins: [],
}
export default config
