/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/khatt',
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
