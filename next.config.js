
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

/**
 * @type {import('next').NextConfig}
 */
const NextJSConfig = {
    i18n: {
        locales: ['en-US', 'zh-CN', 'de-DE'],
        defaultLocale: 'en-US'
    }
};
module.exports = withNextra(NextJSConfig);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })