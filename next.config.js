/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: export for static deployment
  //output: 'export',
  //restrict mode for dynamic deployment
  reactStrictMode: true,
  images: { unoptimized: true },
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.js',
  // }, 
}

module.exports = nextConfig
