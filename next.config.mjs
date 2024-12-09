import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  output: "export",
  webpack(config, {isServer}) {
    // Add GraphQL file loader
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      use: [{loader: "graphql-tag/loader"}],
      include: path.resolve(process.cwd(), "src"),
    });

    return config;
  },
};

export default nextConfig;
