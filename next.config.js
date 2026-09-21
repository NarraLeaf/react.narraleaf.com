const path = require('path');
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

/**
 * @type {import('next').NextConfig}
 */
const NextJSConfig = {
    i18n: {
        locales: ['en-US', 'zh-CN'],
        defaultLocale: 'en-US',
        // middleware.ts redirects every request to www.narraleaf.com; detecting
        // the language first would only add a hop in front of that redirect.
        localeDetection: false
    },
    webpack: (config) => {
        config.resolve.alias['@headlessui/react'] = path.resolve(
          __dirname,
          'node_modules/@headlessui/react'
        );
        return config;
    },
    experimental: {
        esmExternals: true
    }
};
module.exports = withNextra(NextJSConfig);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })