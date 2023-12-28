const path = require('path')
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')]
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production"
    },
    trailingSlash: true,
    output: 'standalone'
}

module.exports = withNextIntl(nextConfig)
