/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  poweredByHeader: false,

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
