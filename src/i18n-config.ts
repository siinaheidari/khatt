import { Config } from 'next-i18n-router/dist/types';

const i18nConfig: Config = {
  locales: [ 'en', 'fa' ],
  defaultLocale: 'fa',
  localeDetector: () => 'fa',
  serverSetCookie: 'always'
} as const;

export type TLocale = (typeof i18nConfig)['locales'][number]

export default i18nConfig;
