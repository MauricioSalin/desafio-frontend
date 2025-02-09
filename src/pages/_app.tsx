import '@/styles/globals.css';

import type { AppProps } from 'next/app';

/**
 * Components
 */
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
