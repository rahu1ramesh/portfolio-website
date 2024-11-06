/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: "./",
    webpack: (config) => {
        config.experiments = config.experiments || {};
        config.experiments.topLevelAwait = true;
        return config;
    },
    images: {
        unoptimized: true,
    },
};
module.exports = nextConfig;
