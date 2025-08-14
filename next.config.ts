import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Required for static export to GitHub Pages
  basePath: isProd ? '/crystalynn' : '',
  assetPrefix: isProd ? '/crystalynn/' : '',
  images: {
    unoptimized: true, // Recommended for GitHub Pages as it doesn't support Next.js image optimization
  },
};

export default nextConfig;
