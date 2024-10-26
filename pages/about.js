import About from "../components/About_section/About";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Know About LeRemitt</title>
        <meta name="description" content="Learn about LeRemitt's mission and team, committed to making international trade for MSMEs fast, secure, and affordable." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Know About LeRemitt" />
        <meta property="og:description" content="Learn about LeRemitt's mission and team, committed to making international trade for MSMEs fast, secure, and affordable." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/about" />
        <meta property="og:image" content="https://yourwebsite.com/images/about.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
      <About />
    </>
  );
}
