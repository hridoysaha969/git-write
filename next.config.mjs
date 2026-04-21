/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration
  eslint: {
    // Only run ESLint on these directories (default is ['pages', 'components', 'lib', 'src'])
    dirs: ["app", "components", "lib", "pages", "src"],
    // Stop the build if ESLint errors are found (set to false to allow build with warnings)
    ignoreDuringBuilds: false, // Change to true only temporarily to unblock deployment
  },

  // TypeScript configuration
  typescript: {
    // !! WARN: Dangerously allow production builds with type errors.
    // Remove this if you want strict type checking.
    ignoreBuildErrors: false, // Set to true only as last resort
  },

  // Enable React strict mode (recommended)
  reactStrictMode: true,

  // Compress output
  compress: true,

  // Disable X-Powered-By header for security
  poweredByHeader: false,

  // If you need environment variables exposed to the browser
  env: {
    // CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;