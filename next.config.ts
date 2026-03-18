import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Make static export work under both `/` and `/<repo>/` without needing basePath
  // by emitting relative asset URLs for `/_next/...`
  assetPrefix: '.',
}

export default nextConfig
