

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  swcMinify: true,
  transpilePackages: [
    "@tanstack/query-core",
  ],
  webpack(config) {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
    }
    return config
  },
}

export default nextConfig
