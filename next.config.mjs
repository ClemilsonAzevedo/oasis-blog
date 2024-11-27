/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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

export default nextConfig
