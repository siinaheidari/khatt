/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    swcMinify: true,
    
    
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: 'default-src \'self\'; script-src \'self\' \'wasm-unsafe-eval\' \'unsafe-inline\' \'inline-speculation-rules\';',
      },
    ],
  
  };

export default nextConfig;
