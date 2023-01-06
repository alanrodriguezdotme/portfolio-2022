/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = withVideos({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
