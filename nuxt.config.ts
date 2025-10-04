import tailwindcss from "@tailwindcss/vite";
import { I18N } from './i18n.config';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/ui',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'ar', iso: 'ar-SA', name: 'العربية' },
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})