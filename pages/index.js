import React from "react";
import Home from "../components/Home_section/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cross-Border Payments Platform For Exporters | LeRemitt</title>
        <meta name="description" content="Efficient and cost-effective inward remittance services tailored exclusively to business customers." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Cross-Border Payments Platform For Exporters | LeRemitt" />
        <meta property="og:description" content="Efficient and cost-effective inward remittance services tailored exclusively to business customers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/" />
        <meta property="og:image" content="https://yourwebsite.com/images/home.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
      <Home />
    </>
  );
}
