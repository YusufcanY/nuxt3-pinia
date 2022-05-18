import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt', './modules/auto-import-eslint'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        'vue',
        'pinia',
        '@heroicons/vue/solid',
        '@heroicons/vue/outline',
      ],
    },
  },
})
