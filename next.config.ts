import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Framed-website',
  assetPrefix: '/Framed-website',
};

export default nextConfig;
