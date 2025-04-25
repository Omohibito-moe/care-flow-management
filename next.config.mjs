/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['example.com'],
  },
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
