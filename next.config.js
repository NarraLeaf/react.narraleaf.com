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
        defaultLocale: 'en-US'
    },
    webpack: (config) => {
        config.resolve.alias['@headlessui/react'] = path.resolve(
          __dirname,
          'node_modules/@headlessui/react'
        );
        return config;
    }
};
module.exports = withNextra(NextJSConfig);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })