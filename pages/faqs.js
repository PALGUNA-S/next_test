import Faqs from '../components/Faqs_section/Faqs';
import Head from 'next/head';

export default function FaqsPage() {
  return (
    <>
      <Head>
        <title>FAQs - Frequently Asked Questions | LeRemitt</title>
        <meta name="description" content="Get answers to all your questions about LeRemitt. Our comprehensive FAQ page covers everything you need to know." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="FAQs - Frequently Asked Questions | LeRemitt" />
        <meta property="og:description" content="Get answers to all your questions about LeRemitt. Our comprehensive FAQ page covers everything you need to know." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/faqs" />
        <meta property="og:image" content="https://yourwebsite.com/images/faqs.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
      <Faqs />
    </>
  );
}
