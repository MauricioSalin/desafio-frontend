import "@/styles/globals.css";

import type { AppProps } from "next/app";

/**
 * Components
 */
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Nav {...pageProps}>
      <Component {...pageProps} />
    </Nav>
  );
}
