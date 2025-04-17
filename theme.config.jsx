import LOGO from "./src/logo.tsx";

/**@type {import('nextra-theme-docs').DocsThemeConfig}*/
const config = {
    logo: LOGO,
    project: {
        link: 'https://github.com/NarraLeaf/narraleaf-react'
    },
    docsRepositoryBase: 'https://github.com/NarraLeaf/react.narraleaf.com/tree/master',
    head() {
        return (
            <>
                <link rel="icon" href="/static/leaf.svg" />
            </>
        );
    },
    primaryHue: 192.73,
    useNextSeoProps() {
        return {
            titleTemplate: '%s – NarraLeaf React',
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="NarraLeaf-React" />
            <meta property="og:description" content="A new definition of the visual novel" />
            <link rel="shortcut icon" type="image/svg" href="/static/leaf.svg" />
        </>
    ),
    i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: 'zh-CN', text: '中文' }
    ],
    footer: {
        text: (
            <span>
                Copyright © {new Date().getFullYear()} NarraLeaf. Licensed under the MPL-2.0 License.{' '}
                <a href="https://github.com/NarraLeaf" target="_blank">
                    GitHub
                </a>
                .
            </span>
        ),
    },
    components: {
        h4: (props) => <h4 className="nx-font-semibold nx-tracking-tight text-slate-300 dark:nx-text-slate-100 nx-mt-8 nx-text-xl" {...props} />,
    },
};

export default config;
