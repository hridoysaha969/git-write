/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Enable experimental server actions if needed
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Keep-Alive",
            value: "timeout=30, max=10000", // Increase API timeout
          },
        ],
      },
    ];
  },
  output: "standalone", // Optimize for serverless deployments like Vercel
  reactStrictMode: true,
  swcMinify: true, // Enable SWC for faster builds
};

export default nextConfig;
