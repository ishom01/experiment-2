import ar from "~/assets/lang/ar";
import en from "~/assets/lang/en";

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'ar',
      iso: 'ar-SA',
      name: 'العربية'
    },
  ],
  defaultLocale: 'en',
  routes: {
    // for custom routes
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ar }
  }
}