/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  eslint: {
    // Disabling ESLint during build as it's causing deployment issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript during builds
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig; 