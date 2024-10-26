import Demo from '../components/Demo_section/Demo';
import Head from 'next/head';

export default function DemoPage() {
  return (
    <>
      <Head>
        <title>Watch Demo Videos | LeRemitt</title>
        <meta name="description" content="Watch our demo videos and explore how LeRemitt's platform simplifies business payments." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Watch Demo Videos | LeRemitt" />
        <meta property="og:description" content="Watch our demo videos and explore how LeRemitt's platform simplifies business payments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/demo" />
        <meta property="og:image" content="https://www.leremitt.com/Images/Reusable-inside/LeRemitt_logo-re_svg.svg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
      <Demo />
    </>
  );
}
