import "../src/base.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
    return <><Analytics /><Component {...pageProps} /></>
}