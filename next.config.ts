/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**", // ✅ Allow all paths
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**", // ✅ Required for Amazon book covers
      },
    ],
  },
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
