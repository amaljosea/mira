/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from ANY domain
      },
    ],
  },
  trailingSlash: true,
  // output: "export",
  async redirects() {
    return [
      {
        source: "/swap",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
