import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/PritamPattnaiksWebsite",
  assetPrefix: "/PritamPattnaiksWebsite",
};

export default nextConfig;
