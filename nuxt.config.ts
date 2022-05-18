import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    buildModules: [
        "@pinia/nuxt",
    ],
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
        logLevel: "info",
        optimizeDeps: {
            include: [
                '@headlessui/vue', 'vue', 'pinia', '@heroicons/vue/solid', '@heroicons/vue/outline',
            ]
        }
    }
});
