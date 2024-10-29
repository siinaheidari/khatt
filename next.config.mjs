/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  swcMinify: true,
  async headers() {
    return [
      {
        // Apply the header to all routes
        source: '/(.*)', // This regex matches all paths
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'wasm-unsafe-eval' 'unsafe-inline' 'inline-speculation-rules';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
