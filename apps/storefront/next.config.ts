import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    cacheComponents: true,

    images: {
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            {
                hostname: 'readonlydemo.vendure.io',
            },
            {
                hostname: 'demo.vendure.io',
            },
            {
                hostname: 'localhost',
            },
            {
                hostname: 'stitched-dhu3.onrender.com',
            },
        ],
    },

    experimental: {
        rootParams: true,
    },
};

export default nextConfig;