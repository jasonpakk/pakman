/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/pacman" : "",
  assetPrefix: isProd ? "/pacman" : "",
  output: "export",
};

export default nextConfig;
