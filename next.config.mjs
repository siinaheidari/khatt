/** @type {import('next').NextConfig} */
const nextConfig = {
  
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fa',
        permanent: true
      },
    
    ];
  },
};

export default nextConfig;
