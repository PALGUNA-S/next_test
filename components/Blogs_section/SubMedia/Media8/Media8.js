import { Container, Typography, Grid, Box } from "@mui/material";
import React from "react";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media8 = () => {
  return (
    <>
      <Navbar />
      <MetaTags
        metatitle={"Exploring the Complexity of Cross-Border Payments Compared to Domestic"}
        metadesc={"Uncover the reasons why cross-border payments are more complicated than domestic ones, including regulatory, currency, and processing challenges."}
        keywords={"cross-border payments, domestic payments, payment complexity, international transactions"}
        canonicalUrl={'https://www.leremitt.com/cross-border-vs-domestic-payments-complexity'}
        metaimage={"https://www.leremitt.com/Images/sblog08.png"}
      />
      <Box>
        <BlogHeader heading="Why are cross-border payments complicated vis-a-vis domestic payments" />
      </Box>
      <Box style={{ background: "#eff2fc" }}>
        <Container>
          <Grid Container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
            <Grid item>
              <Box p={{ xs: 1, md: 2 }}>
                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                  Why are cross-border payments complicated vis-a-vis domestic
                  payments?
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  How would you make a payment for any goods or services in
                  India? You would pay by cash, by debit or credit card, by
                  using your bank’s Internet banking app or by using a Unified
                  Payment Interface (UPI) app like GPay, BHIM, PhonePe, Paytm
                  etc. Simple, right? No fuss and super-fast - the payment goes
                  through in the blink of an eye.
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  Now how would you carry out a similar payment for a
                  cross-border transaction? Most of you would not be comfortable
                  and justifiably so. A cross-border payment, as the name
                  suggests, is a payment made to an entity or individual in a
                  foreign country. Such payments are much more complicated
                  vis-a-vis the domestic transaction mentioned above.
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  This move reflects a broader trend in the financial sector,
                  where institutions strategically leverage digital projects to
                  serve clients better. Such progressive initiatives underscore
                  the vital role FinTech plays in fortifying MSME capabilities,
                  positioning them as more agile and competitive players on the
                  global stage. This evolution positions India's financial
                  services sector for a dynamic and globally competitive future,
                  where MSMEs are pivotal in cross-border economic activities.
                </Typography>
              </Box>
              <Box
                p={{ xs: 1, md: 2 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src="https://www.leremitt.com/Images/sblog08.png" alt="Cross-border payment complexity" width={"100%"} />
                </Box>
              </Box>
              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Before we find out exactly what contributes to making such
                  payments complicated, let us take a quick look at the
                  different types of cross-border payments:
                </Typography>

                <Typography variant="body1" pt={1}>
                  <span style={{ fontWeight: "500" }}>
                    {" "}
                    Commercial payments{" "}
                  </span>
                  or trade payments are those which are on account of the export
                  of goods, services, data and intellectual property (IP)
                  predominantly catering to customers in the corporate or
                  wholesale sectors or for governments. They also include the
                  movement of capital across countries – in the form of
                  intra-corporate transfers and Foreign Direct Investment (FDI).
                  These are typically very high value payments.
                </Typography>
                <Typography variant="body1" pt={1}>
                  <span style={{ fontWeight: "500" }}> Treasury payments </span>
                  are inter-bank settlements of trades, securities, foreign
                  exchange and money markets.
                </Typography>
                <Typography variant="body1" pt={1}>
                  <span style={{ fontWeight: "500" }}> Retail payments </span>
                  are all those other payments that you can think of. Here the
                  end user of the goods or services is usually directly involved
                  as a party in the transaction. These include all types of
                  payments such as B2B (Business-to-Business), C2B
                  (Consumer-to-Business), B2C (Business-to-Consumer) as well as
                  C2C (Consumer-to-Consumer) payments. This has the highest
                  number of cross-border transactions yet the payment size is
                  smaller. For example, this includes all E-Commerce payments
                  and payments you would send to a relative who is abroad.
                </Typography>
                <Typography variant="body1" pt={1}>
                  The treasury payments and most commercial payments are between
                  banks and large corporates respectively, basically large
                  payments, and do not face complications. It is the remaining
                  portion of the commercial payments and the retail payments,
                  mainly carried out by the SME sector, the small & micro
                  businesses and individuals, mostly the payments with the
                  smaller ticket size, where the remitters find the process of
                  cross-border payments to be complicated. Such cross-border
                  transactions include a significant portion of payments towards
                  e-commerce, in the region of fifteen to twenty per cent of all
                  e-commerce transactions around the world, as per some
                  estimates.
                </Typography>
                <Typography variant="body1" pt={1}>
                  You will now read about the various reasons for which
                  cross-border payments are more complicated than domestic
                  payments.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Different Jurisdictions and Laws
                </Typography>
                <Typography variant="body1" pt={1}>
                  Cross-border payments are subject to different jurisdictions
                  and laws. A domestic payment is subject to the laws of the
                  same country. Different jurisdictions mean issues relating to
                  the resolution of disputes and interpretation of contracts.
                  The very legal nature of currency is sovereign and there
                  exists no global currency. You are conversant with the laws of
                  your own country, but when making cross-border payments you
                  would more often than not be unaware of the total extent of
                  foreign laws. Disputes arising from such unknowing errors of
                  omission often lead to months of delay in resolution as there
                  is no common central authority to adjudicate on the same.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Compliance with International Regulations and Standards
                </Typography>
                <Typography variant="body1" pt={1}>
                  The geopolitical scenario internationally leads to sudden
                  restrictions on the transfer and convertibility of certain
                  currencies. Such scenarios include but are not limited to
                  simple matters like trade or product protection and may on the
                  other side of the scale include sanctions for reasons like war
                  or an acute human rights crisis.
                </Typography>
                <Typography variant="body1" pt={1}>
                  You will have noticed such a situation recently after Russia
                  invaded Ukraine in 2022. International sanctions have been
                  imposed against officials, businesses and individuals who are
                  Russian or are based in Russia. Major Russian banks have been
                  cut off from SWIFT (The international payment messaging
                  network). In February 2022, The Central Bank of the Russian
                  Federation was not allowed to access around USD 400 billion of
                  its foreign exchange reserves held in banks abroad. The
                  Russian Rouble has buckled under the pressures of sanctions
                  and declining exports and is tumbling against the USD. A
                  payment against Russian Roubles is not only uncertain, but the
                  value of the payment too is falling as the value has
                  fluctuated from when the transaction was initiated and will be
                  executed.
                </Typography>
                <Typography variant="body1" pt={1}>
                  Such a scenario is not possible in a domestic payment within
                  the same country.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Complex Web of Interlinked Banks
                </Typography>
                <Typography variant="body1" pt={1}>
                  A domestic payment, regardless of whichever payment channel
                  you choose to use, moves directly from the bank of the
                  remitter to the bank of the person receiving the payment. Such
                  payments are simple, and in the age of UPI apps are actually
                  settled in real-time.
                </Typography>
                <Typography variant="body1" pt={1}>
                  Compare this to the widespread and complex web (much like a
                  spider's web) of interlinked banks involved in cross-border
                  payment. Banks have reciprocal arrangements for the movement
                  of such payments. There are also a lot of geographies where
                  such correspondent and respondent relationships between banks
                  do not exist. In such cases, banks seek out an even more
                  complex web of intermediary banks. Funds flow accompanied by
                  the messages in the SWIFT network. These processes take time
                  and further delays often occur due to holidays in different
                  geographies anywhere in the network of remitting banks,
                  multiple intermediary banks and the beneficiary bank.
                </Typography>

                <Typography variant="body1" pt={1}>
                  If you in India were to enter into an international trade
                  transaction with someone in Algeria, the payments for the same
                  would flow from your bank in India to New York (USA) to Paris
                  (France) and onwards to your trading correspondent’s bank
                  account in Algeria, all throughout utilising correspondent –
                  respondent banks as well as multiple intermediary banks.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Compliance Checks
                </Typography>
                <Typography variant="body1" pt={1}>
                  Cross-border payments are subject to numerous compliance
                  checks – both automated and manual. This is part of a diligent
                  and multi-layered process to review the transaction and
                  transaction pattern to be able to detect any suspicious
                  activities and prevent the same from getting executed. Such
                  activities include but are not limited to money laundering,
                  proceeds from the sale of conflict diamonds, drug trafficking,
                  human trafficking, terrorist financing, etc.
                </Typography>
                <Typography variant="body1" pt={1}>
                  These checks while being indispensable do lead to a lot of
                  delays ranging from 1 – 5 working days and often unnecessary
                  transaction declines. Automated alerts are based on patterns
                  and Artificial Intelligence (AI) which often identifies
                  genuine transactions as suspicious leading to delays and
                  declines. Banks often tend to be overzealous in their approach
                  in the name and guise of due diligence for cross-border
                  payments.
                </Typography>
                <Typography variant="body1" pt={1}>
                  In contrast to this domestic payments are much faster and
                  while Anti Money Laundering (AML) and Know Your Customer (KYC)
                  checks are carried out, the delays are insignificant as the
                  transaction originates and comes to its conclusion within the
                  same country and economy.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Cost of Transactions
                </Typography>
                <Typography variant="body1" pt={1}>
                  Cross-border payments are subject to various fees such as
                  foreign exchange fees, transfer fees, bank fees, etc.
                  Payments, especially those for SME and Micro business and
                  retail customers are subject to adverse foreign exchange
                  conversion rates. Even payments made through international
                  credit cards using the VISA, Mastercard or American Express
                  settlement platforms are subject to very high fees and
                  conversion rates.
                </Typography>
                <Typography variant="body1" pt={1}>
                  For example, if you were to receive a payment through PayPal
                  in India as an individual or owner of a small or micro
                  business, PayPal charges 5.5% of the total payment. The
                  typical conversion percentage margin for the foreign exchange
                  by your bank is 3.6%.
                </Typography>
                <Typography variant="body1" pt={1}>
                  Compare this with the negligible, mostly zero fees for a
                  domestic payment.
                </Typography>
                <Typography variant="body1" pt={1}>
                  You are now aware of the various reasons why cross-border
                  payments are considered to be more complicated vis a vis
                  domestic payments. The process is being simplified and a
                  number of non-bank Fintech companies are in the process of
                  providing an ecosystem for international trade and payments
                  with the help of Application Programming Interface (API) apps
                  and advanced cryptography and tokenization.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#dceef7" }}>
        <Footer />
      </Box>
      <Popup blogId='Media8' />
    </>
  );
};

export default Media8;
