import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT_EXPORT === "true" ? "export" : undefined,
};

export default nextConfig;
