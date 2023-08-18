/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const serverRuntimeConfig = {
  PROJECT_ROOT: __dirname,
}

module.exports = {
  nextConfig,
  serverRuntimeConfig,
}

