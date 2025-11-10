/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 明确指定输出文件追踪的根目录
  outputFileTracingRoot: process.cwd(), // 使用当前目录作为根目录
}

export default nextConfig
