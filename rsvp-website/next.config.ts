import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Environment variables
  env: {
    PARTY_DATE: '2026-02-13T18:00:00',
  },

  // Compression
  compress: true,
};

export default nextConfig;
