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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-Requested-With, Authorization, Accept, Content-Type, Set-Cookie",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
