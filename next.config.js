const mongodbconfig = require(process.env.MONGODB_CONFIG || './keys/mongodb-config.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: { mongodbconfig },
}

module.exports = nextConfig
