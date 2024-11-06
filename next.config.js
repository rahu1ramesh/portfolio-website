/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: "./",
    async rewrites() {
        return [
            {
                source: "/medium.com/:path*",
                destination: "https://medium.com/feed/@rahul1ramesh",
            },
        ];
    },
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
