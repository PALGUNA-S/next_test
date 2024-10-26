import LeConnect from '../components/LeConnect_section/LeConnect';
import Head from 'next/head';

export default function LeConnectPage() {
  return (
    <>
      <Head>
        <title>Connect With Us | LeRemitt</title>
        <meta name="description" content="Having queries about international payments? Connect with us. We will contact you as soon as possible." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Connect With Us | LeRemitt" />
        <meta property="og:description" content="Having queries about international payments? Connect with us. We will contact you as soon as possible." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/leconnect" />
        <meta property="og:image" content="https://yourwebsite.com/images/leconnect.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
      <LeConnect />
    </>
  );
}
