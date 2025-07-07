import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/',
      //   permanent: false, // Set to true if you want a permanent redirect (301), false for temporary (302)
      // },
    ];
  },
  images: {
    domains: ["github.com"],
  },
};

export default nextConfig;
