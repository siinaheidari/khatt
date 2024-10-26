/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/khatt',
  i18n: {
    locales: ['en', 'ar'], // Add your supported languages here
    defaultLocale: 'en',
  },
};

export default nextConfig;
