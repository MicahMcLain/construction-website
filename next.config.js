/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\/uploads\/.*\.+(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: "next-image-loader",
          options: {
            loader: "cloudinary",
            path: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          },
        },
      });
    }
    return config;
  },

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
