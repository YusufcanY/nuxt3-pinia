import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {},
    },
    plugins: ['@tailwindcss/typography', '@tailwindcss/aspect-ratio'],
  },
}
