/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'assets.ctfassets.net'], // Add both Contentful image domains
  },
};

module.exports = nextConfig;
