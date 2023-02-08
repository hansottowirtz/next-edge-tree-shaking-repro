/** @type {import('next').NextConfig} */
const nextJsConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'experimental-edge',
    esmExternals: 'loose',
    appDir: true,
  },
  swcMinify: true
}

module.exports = nextJsConfig;
