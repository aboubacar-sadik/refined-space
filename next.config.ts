import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.fffuel.co",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
