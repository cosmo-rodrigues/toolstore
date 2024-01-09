/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tooled-up.com',
        port: '',
        pathname: '/artwork/**',
      },
      {
        protocol: 'https',
        hostname: 'images.tooled-up.com',
        port: '',
        pathname: '/artwork/**',
      },
    ],
  }
}

module.exports = nextConfig
