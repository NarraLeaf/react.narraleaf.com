import { resolve } from 'path';
import nextra from 'nextra';
const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
});
const dirname = import.meta.dirname;

/**
 * @type {import('next').NextConfig}
 */
const NextJSConfig = {
    i18n: {
        locales: ['en-US', 'zh-CN'],
        defaultLocale: 'en-US'
    },
    webpack: (config) => {
        config.resolve.alias['@headlessui/react'] = resolve(
          dirname,
          'node_modules/@headlessui/react'
        );
        return config;
    },
    experimental: {
        esmExternals: true
    }
};
export default withNextra(NextJSConfig);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })