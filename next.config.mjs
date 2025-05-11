import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is on by default in Next 14, but you can be explicit:
  appDir: true,

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  webpack(config) {
    config.module.rules.push({
      test: /\.mdx?$/,
      // babel-loader is optional; remove if you don’t need extra Babel transforms
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;