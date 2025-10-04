import { ar, en } from "@nuxt/ui/runtime/locale/index.js";

export const I18N = {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English' },
    { code: 'ar', iso: 'ar-SA', name: 'العربية' },
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ar }
  }
}