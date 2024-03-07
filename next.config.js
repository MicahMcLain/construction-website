/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://seal-cincinnati.bbb.org/customer-reviews/badge-7-bbb-90045568.png",
        port: "",
        pathname: "/**",
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
