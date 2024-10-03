/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MrGasha Registry',
    description: 'My custom workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://mrgasha.github.io/mrgasha-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
