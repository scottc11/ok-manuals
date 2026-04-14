/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'ok200-media.s3.amazonaws.com' },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  turbopack: {},
};

module.exports = nextConfig;
