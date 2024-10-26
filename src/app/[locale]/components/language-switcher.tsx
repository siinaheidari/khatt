'use client';

import { useTranslation } from 'react-i18next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import i18nConfig from '@/i18n-config';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();
  
  const handleChangeLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'fa' : 'en';
    
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${ newLocale };expires=${ expires };path=/`;
    
    // Get current search params
    const search = searchParams.toString();
    
    // Handle URL replacement
    let newUrl;
    
    // If the current language is the default language and must not have a language prefix
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      // For the new language, we create the path without the prefix
      newUrl = `/${ newLocale }${ currentPathname }`;
    }
    else if (currentLocale === i18nConfig.defaultLocale) {
      // If the language is the default and the new language prefix must be added
      newUrl = `/${ newLocale }${ currentPathname }`;
    }
    else {
      // If the current language is not the default, we need to do a substitution
      newUrl = currentPathname.replace(`/${ currentLocale }`, `/${ newLocale }`);
    }
    
    // Add search params if they exist
    if (search) {
      newUrl += `?${ search }`;
    }
    
    router.push(newUrl);
    
    router.refresh();
  };
  
  return (
    <div
      className="--headerItems --rounded text-primary-0 text-white text-buttonTextSmall cursor-pointer font-[400] text-[18px]  capitalize "
      onClick={ handleChangeLanguage }
    >
      { currentLocale === 'fa' ? 'en' : 'fa' }
    </div>
  );
};
