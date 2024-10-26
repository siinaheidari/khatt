/** @type {import('next').NextConfig} */
const nextConfig = {
  
  async redirects() {
    return [
      {
        source: '/khatt',
        destination: '/khatt/fa',
        permanent: true
      },
    
    ];
  },
};

export default nextConfig;
