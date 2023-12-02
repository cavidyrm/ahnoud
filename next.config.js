const path = require('path')
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')]
    },
    trailingSlash: true
}

module.exports = withNextIntl(nextConfig)
