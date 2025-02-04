/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MrGasha Registry',
    description: 'My favorites custom workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://mrgasha.github.io/mrgasha-registry/',
    contactUrl: 'https://mrgasha.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/mrgasha-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
