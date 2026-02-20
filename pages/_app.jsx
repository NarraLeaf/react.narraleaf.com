import "../src/base.css";
import { Analytics } from "@vercel/analytics/react";
import HighlightSpan from "../src/components/highlight-span";
import Script from "next/script";

export default function App({ Component, pageProps }) {
    return (
        <><HighlightSpan />
            <Analytics />
            <Component {...pageProps} />
            <Script
                src="https://context7.com/widget.js"
                data-library="/narraleaf/react.narraleaf.com"
                data-color="#40a8c4"
                strategy="afterInteractive"
                data-placeholder="Ask me anything about NarraLeaf React..."
            />
        </>
    );
}