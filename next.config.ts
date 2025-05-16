/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.tina.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
