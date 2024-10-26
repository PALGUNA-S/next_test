import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/splide.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';
import Layout from '../components/Layout';

const GA_TRACKING_ID = "G-VD04WS1MZE";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(GA_TRACKING_ID);
    const handleRouteChange = (url) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
