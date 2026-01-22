/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to a subpath like username.github.io/balorath-website
  // basePath: '/balorath-website',
};

export default nextConfig;

