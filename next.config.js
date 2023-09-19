/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: [
      'https://framer.com/m/',
      'https://framerusercontent.com/',
    ],
    externalDir: true,
  },
}

module.exports = nextConfig
