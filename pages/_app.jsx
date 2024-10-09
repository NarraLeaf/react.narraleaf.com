import "../src/base.css";
import { Analytics } from "@vercel/analytics/react";
import HighlightSpan from "../src/components/highlight-span";

export default function App({ Component, pageProps }) {
    return <><HighlightSpan /><Analytics /><Component {...pageProps} /></>
}