/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "firebasestorage.googleapis.com",
      "d29wtx2fjqcm1t.cloudfront.net",
    ],
  },
};

export default nextConfig;
