/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export
    images: { unoptimized: true },  // Disable Image Optimization API
      basePath: process.env.NODE_ENV === 'production' ? '/ciyaar-intelligence' : '',
      }
      
      module.exports = nextConfig */