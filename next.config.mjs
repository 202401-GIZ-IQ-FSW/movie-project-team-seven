/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable this if UseEffect is running twice
    // reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          port: '',
          pathname: '/t/p/**',
        },
      ],
    },
}

export default nextConfig;
