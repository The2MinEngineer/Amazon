/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withImages({
  ...nextConfig,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },
});
