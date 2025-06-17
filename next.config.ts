import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    domains: [
      "xxomkwhpokcfpirspqfb.supabase.co"
    ],
  },
  devIndicators: false
};

export default nextConfig;
