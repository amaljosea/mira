/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  output: "export",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/swap",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
