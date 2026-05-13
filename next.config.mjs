/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  allowedDevOrigins: [
    "192.168.100.96",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fewvsbzmvoiaynrjqbma.supabase.co",
      },
    ],
  },
};

export default nextConfig;
