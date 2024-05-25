/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  env: {
    APP_URI: process.env.APP_URI,
  },
});
