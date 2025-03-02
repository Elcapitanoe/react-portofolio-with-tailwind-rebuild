/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com']
  },
  // Ensure output is configured for Netlify
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig