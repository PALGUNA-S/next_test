import ProductServices from "../components/Product_Services_section/ProductServices";
import Head from "next/head";

export default function ProductServicesPage() {
  return (
    <>
      <Head>
        <title>Platform to Accept International Payments for Businesses | Inward Remittance Services</title>
        <meta name="description" content="Looking for a reliable inward remittance solution? We're the answer. Accept international payments in India from the world. Trusted by Top Indian businesses" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Platform to Accept International Payments for Businesses | Inward Remittance Services" />
        <meta property="og:description" content="Looking for a reliable inward remittance solution? We're the answer. Accept international payments in India from the world. Trusted by Top Indian businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/accept-international-payments-for-businesses" />
        <meta property="og:image" content="https://yourwebsite.com/images/product-services.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
      <ProductServices />
    </>
  );
}
