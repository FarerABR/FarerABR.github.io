/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // e.g. '/LiveTerm' or '' if using username.github.io
  images: { unoptimized: true },
};

module.exports = nextConfig;
