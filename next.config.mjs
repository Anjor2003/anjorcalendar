/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { hostname: "utfs.io" },
      { hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
