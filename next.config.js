/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "digihippo-production.up.railway.app",
      "digihippo.dead8309.xyz",
    ],
  },
};

module.exports = nextConfig;
