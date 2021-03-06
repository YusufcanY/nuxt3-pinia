import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt', './modules/auto-import-eslint'],
  css: ['@/assets/css/main.css', '@/assets/css/tailwind.css'],
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
  typescript: {
    shim: false,
    strict: true,
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
