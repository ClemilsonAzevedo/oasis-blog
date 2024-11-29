import createMDX from '@next/mdx'
import rehypeShiki from '@shikijs/rehype'
import { transformerNotationHighlight } from '@shikijs/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkToc from 'remark-toc'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
  experimental: {
    turbotrace: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/clemilsonazevedo.png/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com/',
        port: '',
        pathname:
          'photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
}

export default createMDX({
  options: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'vesper',
          trimEndingNewline: true,
          transformers: [transformerNotationHighlight()],
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
        },
      ],
    ],
    remarkPlugins: [
      remarkFrontmatter,
      remarkGfm,
      [remarkToc, { heading: 'conteúdo', ordered: true }],
      [remarkMdxFrontmatter, { name: 'metadata' }],
    ],
  },
})(nextConfig)
