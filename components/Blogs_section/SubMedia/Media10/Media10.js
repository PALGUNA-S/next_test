import { Box, Container, Grid, Link as MuiLink, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media10 = () => {
  return (
    <>
      <Navbar />
      <MetaTags
        metatitle={"Decoding Foreign Transaction Fees and Charges To Exporters! | LeRemitt"}
        metadesc={"Navigate international spending wisely. Learn about Foreign Transaction Fees to save on currency conversion charges and manage expenses abroad. Learn More! "}
        keywords={"SWIFT, Leremitt, Cross Border Payments"}
        canonicalUrl={'https://www.leremitt.com/charges-and-fees-for-international-payments'}
        metaimage={"https://www.leremitt.com/Images/sblog10.png"}
      />
      <Helmet>
        {/* Article schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.leremitt.com/charges-and-fees-for-international-payments"
            },
            "headline": "Decoding Foreign Transaction Fees and Charges To Exporters! | LeRemitt",
            "description": "Navigate international spending wisely. Learn about Foreign Transaction Fees to save on currency conversion charges and manage expenses abroad. Learn More!",
            "image": "https://www.leremitt.com/static/media/LeRemitt_logo-re_svg.f95a2bc9ddbdd8aeba67226184311fc2.svg",  
            "author": {
              "@type": "Organization",
              "name": ""
            },  
            "publisher": {
              "@type": "Organization",
              "name": "",
              "logo": {
                "@type": "ImageObject",
                "url": ""
              }
            },
            "datePublished": "",
            "dateModified": "2024-07-24"
          }`}
        </script>
        {/* FAQ schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is a Foreign Transaction Fee?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A foreign transaction fee is an additional charge imposed by your credit card issuer for a foreign currency or bank purchase. It covers converting the transaction from a foreign currency to your domestic processing fees."
              }
            },{
              "@type": "Question",
              "name": "How Much Are the Foreign Transaction Fees?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The foreign transaction fee is 1-3% for each transaction made in a foreign currency or processed outside your home country."
              }
            }]
          }`}
        </script>
      </Helmet>
      <Box>
        <BlogHeader heading="Decoding Foreign Transaction Fees and Charges To Exporters!" />
      </Box>
      <Box style={{ background: "#eff2fc" }}>
        <Container>
          <Grid Container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
            <Grid item>
              <Box p={{ xs: 1, md: 2 }}>
                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                  Decoding Foreign Transaction Fees and Charges To Exporters!
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  What do you feel is an international payment? Or How much is the foreign transaction fee compared to domestic payments, which are virtually free? Are international payments more expensive? If so, why is it this way?
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  The answer to all these queries is in the following blog, where you can learn about the fees and the charges levied on an international transaction.
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  Let's dive into the blog.
                </Typography>
              </Box>
              <Box
                p={{ xs: 1, md: 2 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src="https://www.leremitt.com/Images/sblog10.png" alt="Know about Foreign Transaction Fees" width={"100%"} />
                </Box>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  What Is an International Payment?
                </Typography>
                <Typography variant="body1" pt={1}>
                  An international payment or a cross-border payment stands for all those transactions where payer and payee are in different countries. Such payments range from the smallest amount you may charge on your credit card on an e-commerce site based abroad to the larger payments, running into millions of USD for the import of machinery.
                </Typography>
                <Typography variant="body1" pt={1}>
                  India's merchandise export and import figures (non-petroleum Products) for Financial Year 2023 stood at USD 354 Billion and USD 458 Billion, while Services exports and Imports figures stand at USD 325Bn and USD 180 Billion, respectively. India received USD 125 Billion as Inward Remittance in 2022-23, the highest globally.
                </Typography>
                <Typography variant="body1" pt={1}>
                  You will agree that in light of the huge numbers above, the question of foreign transaction fees assumes additional significance.
                </Typography>

              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Foreign Transaction Fee or International Payment Charges
                </Typography>
                <Typography variant="body1" pt={1}>
                  On one end of the spectrum in international payments, you would have used your credit card to make payments abroad or on any international e-commerce site. The following charges are levied to you for such a transaction, either online or at a Point of Sales (POS) terminal abroad:
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400}>
                  1.  Forex Conversion Fee
                </Typography>
                <Typography variant="body1" pt={1}>
                  As the payment will be in a foreign currency on an INR card, the value of the transaction will need to be converted from INR to the relevant foreign currency. Banks charge you up to 3.5 per cent for such conversion.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400}>
                  2. Dynamic Currency Conversion Mark-up Fee
                </Typography>
                <Typography variant="body1" pt={1}>
                  This is a fee, typically 1 per cent, charged by the merchant through its service provider for converting the foreign exchange (INR on your card to the local currency). This only applies when you pay the amount in INR rather than the local currency.
                </Typography>
                <Typography variant="body1" pt={1}>
                  <b>Pro Tip:</b> You can save on this fee by asking the merchant to reject Dynamic Currency Conversion and charge instead in the local currency. During your next visit to Paris, while paying for your espresso and croissant, ask the staff at the café to charge your card in Euro instead of INR. Platforms like PayPal charge 3 per cent for consumers and over 4.4 per cent for merchants above their fixed fees.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  What Is the Rate of Trade?
                </Typography>
                <Typography variant="body1" pt={1}>
                  However, traditional bank transfers are the typical route to move funds for exporters or importers. The rates here could vary based on the size of one's company and the amount being remitted. Being an exporter of goods or services, you will know that a substantial percentage of the remitted money is deducted as charges. These charges may be broken down as below,
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400}>
                  1.  SWIFT/Wire Charges
                </Typography>
                <Typography variant="body1" pt={1}>
                  This is a fixed charge or a charge that varies as per slabs and is on account of the charges the remitting bank has to pay <MuiLink href={'https://www.leremitt.com/understanding-swift-in-global-finance'} rel="noopener noreferrer" color="primary" underline="hover">SWIFT</MuiLink> for utilizing their messaging network. While ordering the payment, the remitter can indicate who will pay the charges. It is usually shown as Beneficiary, Remitter, or Shared. Depending on the option selected - "OUR," "BEN," or "SHA" for the Field 71A of the MT 103 (the SWIFT message) by the remitter, you as the beneficiary will either receive the entire amount or the amount net of these charges. In payment of USD 5000, if the charges are USD 25, and the remitter has chosen the beneficiary option, the remitting bank will send out USD 4975.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400}>
                  2.  Correspondent Bank Charges
                </Typography>
                <Typography variant="body1" pt={1}>
                  <MuiLink href={'https://www.leremitt.com/fintech-cross-border-remittance-revolution'} rel="noopener noreferrer" color="primary" underline="hover">Cross-border remittances</MuiLink> utilize the service of correspondent banks or intermediary banks. These banks charge a fee for their services – Correspondent Bank Charges. These charges vary between USD 2 – and USD 20 on average. These charges may even reach up to USD 200. In the example above, if the correspondent bank charges of USD 20 are to be borne by the beneficiary, you will receive USD 4955.
                </Typography>
                <Typography variant="body1" pt={1}>
                  <b>Note:</b> Uncommon currency pairs will mean that more intermediaries will get involved in the process, and more charges will get deducted as Correspondent Bank Charges.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400}>
                  3.  Forex Rate Markup
                </Typography>
                <Typography variant="body1" pt={1}>
                  This is the margin that your bank keeps as a profit on foreign exchange between the prevailing market rate for that foreign currency and what they apply for converting your remittance to INR. This is one of the most opaque components in a remittance, and the margins are often as high as 2 per cent. Unless you are an exporter or receive regular remittances, you will not be able to understand the exact margin charged to you. In our example, if a 2% margin is applied to the prevailing market rate of 82.90 INR for 1 USD, the rate applicable to you will be 81.24.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400}>
                  4. Inward Wire Processing Charges
                </Typography>
                <Typography variant="body1" pt={1}>
                  Some banks charge a flat fee for processing your inward remittance. These charges attract GST @ 18 per cent.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400}>
                  5. Inward Remittance Certificate Charges
                </Typography>
                <Typography variant="body1" pt={1}>
                  Banks often levy a service fee or a FIRC fee to generate a Foreign Inward Remittance Certificate. This, too, attracts GST @ 18 per cent.
                </Typography>
                <Typography variant="body1" pt={1}>
                  Let us understand the final implication of all these charges on the original remittance in USD and what you received in INR as per our example above.
                </Typography>
                <Typography variant="body1" pt={1}>
                  We assume that the remitter has chosen the "BEN" option for charges in his bank's form for the portion corresponding to field 71A of the SWIFT message the MT103, and all charges are to be borne by you, including that of one correspondent bank. We also assume that the prevailing market rate for 1 USD is 82.90 INR.
                </Typography>
                <Typography variant="body1" pt={1}>
                  So, for an original remittance of USD 5000, the beneficiary had to pay INR 12,889.89 as a charge, whichever terminology they were referred to. This stands to be 3.1 per cent of the original amount.
                </Typography>
                <Typography variant="body1" pt={1}>
                  Fintech companies like <MuiLink href={'https://www.leremitt.com/'} rel="noopener noreferrer" color="primary" underline="hover">LeRemitt</MuiLink>  are emerging players in the International Payments market for Exporters. We have leveraged technology, aggregated demand, and created a safer and quicker platform for cross-border payments within the realm of compliance mandated by RBI. We have substantially reduced the costs for MSME exporters to under 1% and provide a seamless user experience.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Frequently Asked Questions
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={500}>
                  1. What Is a Foreign Transaction Fee?
                </Typography>
                <Typography pt={1} variant="body1">
                  A foreign transaction fee is an additional charge imposed by your credit card issuer for a foreign currency or bank purchase. It covers converting the transaction from a foreign currency to your domestic processing fees.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={500} pt={1}>
                  2. How Much Are the Foreign Transaction Fees?
                </Typography>
                <Typography pt={1} variant="body1">
                  The foreign transaction fee is 1-3% for each transaction made in a foreign currency or processed outside your home country.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Conclusion
                </Typography>
                <Typography pt={1} variant="body1">
                  As you can see, the foreign transaction fees through the banking channel are 2-4%. The Bank of England has estimated the value of cross-border payments to reach USD 250 Trillion by 2027. As just calculated in our example, fees in that region will take a big bite out of the apple of international payments.
                </Typography>
                <Typography pt={1} variant="body1">
                  Fintechs, leveraging technology, have already captured a market share of cross-border payments that the legacy models have not addressed or paid as much attention to. You need to compare the various options available to you and make an informed choice vis-a-vis the charges when you receive or send cross-border payments.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#dceef7" }}>
        <Footer />
      </Box>
      <Popup blogId='Media10' />
    </>
  );
};

export default Media10;
