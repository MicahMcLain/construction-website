/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seal-cincinnati.bbb.org",
        port: "443",
        pathname: "/customer-reviews/badge-7-bbb-90045568.png",
      },
    ],
  },
};

module.exports = nextConfig;
