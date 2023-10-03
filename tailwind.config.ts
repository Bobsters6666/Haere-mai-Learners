import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'red-800': '#A50404',
        'red-700': '#B40000',
        'red-600': '#D40000',
        'red-400': '#FF3636',
        'red-300': '#FF8C8C',
        'red-200': '#FBADAD',
        'red-100': '#FFE1E1',
        'ellipse': "rgba(255, 201, 201, 0.23)"
      },
      color: {
        'red-800': '#A50404',
        'red-700': '#B40000',
        'red-600': '#D40000',
        'red-400': '#FF3636',
        'red-300': '#FF8C8C',
        'red-200': '#FBADAD',
        'red-100': '#FFE1E1',
      },
      background: {
        'ellipse': "rgba(255, 201, 201, 0.23)",
        'navbar':'linear-gradient(178deg, #A50404 1.16%, rgba(180, 0, 0, 0.82) 105.97%)',
      },
      boxShadow: {
        'components': '2px 1px 23px 10px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
export default config
