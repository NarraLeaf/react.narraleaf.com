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
}