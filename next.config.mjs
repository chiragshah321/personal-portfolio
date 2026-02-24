/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Notion-hosted uploaded files (S3, any region)
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.*.amazonaws.com",
      },
      // Notion CDN
      {
        protocol: "https",
        hostname: "**.notion.so",
      },
    ],
  },
};

export default nextConfig;
