import LOGO from "./src/logo.tsx";

export default {
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
        </>
    )
}