import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  basePath: isProd ? '/zen-docs' : '',
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default withMDX(config);
