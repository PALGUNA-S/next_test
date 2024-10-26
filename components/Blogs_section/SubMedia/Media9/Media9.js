import { Container, Typography, Grid, Box } from "@mui/material";
import React from "react";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media9 = () => {
  return (
    <>
      <Navbar />
      <MetaTags
        metatitle={"Understanding SWIFT in Global Finance: How It Works"}
        metadesc={"Dive deep into how SWIFT facilitates global financial communications, ensuring secure and efficient international transactions. Learn about its role in the world of finance."}
        keywords={"SWIFT, global finance, international transactions, financial communication"}
        canonicalUrl={'https://www.leremitt.com/understanding-swift-in-global-finance'}
        metaimage={"https://www.leremitt.com/Images/sblog09.png"}
      />
      <Box>
        <BlogHeader heading="What is SWIFT?" />
      </Box>
      <Box style={{ background: "#eff2fc" }}>
        <Container>
          <Grid Container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
            <Grid item>
              <Box p={{ xs: 1, md: 2 }}>
                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                  What is SWIFT?
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  The term SWIFT is one which you will come across frequently in
                  the world of cross-border payments. What is SWIFT and what
                  does it stand for?
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  SWIFT stands for Society for Worldwide Interbank Financial
                  Telecommunication, a Belgian company established in 1973. The
                  company has a highly ambitious and very innovative vision
                  aiming to create a worldwide financial messaging service and
                  to introduce a financial lingua franca, a universal language
                  for the exchange of international financial messages.
                </Typography>
                <Typography pt={1} variant="body1" textAlign={"justify"}>
                  SWIFT provides a trusted and closed network and is used for
                  the communication of financial messages across banks. SWIFT is
                  used by around 11 thousand financial institutions in over 200
                  countries and is used for around 25 million communications a
                  day. 98 per cent of all international fund transfers are
                  carried out through the SWIFT network.
                </Typography>
                <Typography pt={1} variant="body1" textAlign={"justify"}>
                  At this point, it is imperative to understand that SWIFT is a
                  messaging service. It does not move funds but rather is used
                  to send the messages accompanying the fund transfer. Before
                  SWIFT was developed, banks used a system called TELEX for wire
                  transfers. This was a system involving a manual process for
                  writing and reading messages, a process which was not
                  fool-proof.
                </Typography>
                <Typography pt={1} variant="body1" textAlign={"justify"}>
                  As of date, SWIFT records an average of 44.8 million messages
                  daily with an average daily net-net volume of USD 7.5 trillion
                  in 2022 as per a report by Citi GPS.
                </Typography>
              </Box>
              <Box
                p={{ xs: 1, md: 2 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src="https://www.leremitt.com/Images/sblog09.png" alt="SWIFT definition" width={"100%"} />
                </Box>
              </Box>
              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="body1">
                  SWIFT messages are standardised with the details being
                  transmitted clearly and transparently with every financial
                  institution having its unique code and every message having a
                  distinctive reference number. SWIFT messaging has the
                  following advantages:
                </Typography>

                <Typography variant="body1" pt={1}>
                  <span style={{ fontWeight: "500" }}>Transparent </span>
                  The message mentions the amounts the route the funds will
                  take, a detailed summary of all charges and the nature of the
                  payment in unequivocal terms. There exists no opportunity for
                  any ambiguity.
                </Typography>
                <Typography variant="body1" pt={1}>
                  <span style={{ fontWeight: "500" }}>Traceable </span>
                  The transaction including the amount and the route to be taken
                  for the same is laid out in the SWIFT message.
                </Typography>
                <Typography variant="body1" pt={1}>
                  <span style={{ fontWeight: "500" }}>Consistent </span>
                  The structure of the messages makes the payment information
                  contained in the SWIFT message easy to understand regardless
                  of country or language.
                </Typography>
                <Typography variant="body1" pt={1}>
                  Financial institutions engage a host of correspondent banks
                  and depend on a spider web-like intricate network of
                  intermediary banks. Intermediary banks are required as all
                  banks do not have an established financial relationship. The
                  SWIFT network enables such cross-border transfers as the banks
                  may search the network for intermediary banks in geographies
                  where they do not have a correspondent bank. Such intermediary
                  banks are called routing banks.
                </Typography>
                <Typography variant="body1" pt={1}>
                  For example, if you need to transfer funds in Great Britain
                  Pounds (GBP) from your HDFC Bank account in India to the Isle
                  of Man Bank in the Isle of Man, a self-governing body with the
                  dependency of the British crown in the Irish Sea between
                  England and Ireland. HDFC Bank has Barclays Bank PLC as its
                  correspondent bank for GBP transactions. Barclays Bank PLC
                  does not have a direct link to Isle of Man Bank. They will
                  transmit the funds to Natwest, London, who in turn will
                  transmit the funds to their correspondent bank Isle of Man
                  Bank.
                </Typography>
                <Typography variant="body1" pt={1}>
                  In this example, HDFC Bank and Barclays Bank PLC share a
                  correspondent bank relationship. The same is shared between
                  Natwest London and Isle of Man Bank. So the intermediary bank
                  used by HDFC Bank in this transaction is Natwest London. The
                  SWIFT network enables searching for a suitable intermediary
                  bank and the SWIFT message records all details of the
                  correspondent and intermediary banks along with details of the
                  amount, the remitter and beneficiary as well as the purpose of
                  the transaction.
                </Typography>
                <Typography variant="body1" pt={1}>
                  The SWIFT network also utilises Nostro and Vostro accounts,
                  accounts of correspondent banks held by each other.
                </Typography>
                <Typography variant="body1" pt={1}>
                  For the SWIFT message to reach the proper and particular bank
                  and branch a Bank Identification Code (BIC) is used in SWIFT
                  messages. You may compare it to a postal code that identifies
                  the precise location of, in this case, the bank branch.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>
                  Types of SWIFT messages
                </Typography>
                <Typography variant="body1">
                  The following types of SWIFT messages are most commonly used:
                </Typography>
                <Typography variant="h3" fontWeight={400} fontSize={'1.2rem'} pt={1}>
                  MT101
                </Typography>
                <Typography variant="body1" pt={1}>
                  MT101 is a request for transfer either customer to bank or
                  interbank. The message format that enables a transfer of funds
                  from an ordering customer/bank account to a receiving
                  financial institution is referred to as a message in the SWIFT
                  MT101 format.
                </Typography>
                <Typography variant="h3" fontWeight={400} fontSize={'1.2rem'} pt={1}>
                  MT103
                </Typography>
                <Typography variant="body1" pt={1}>
                  MT103 is an interbank request used to transfer funds for a
                  single customer. This SWIFT message is commonly known as an
                  international wire transfer, Telegraphic Transfer (TT), etc.
                </Typography>
                <Typography variant="h3" fontWeight={400} fontSize={'1.2rem'} pt={1}>
                  MT202
                </Typography>
                <Typography variant="body1" pt={1}>
                  MT202 is an instruction for a transfer of funds between
                  financial institutions
                </Typography>
                <Typography variant="h3" fontWeight={400} fontSize={'1.2rem'} pt={1}>
                  MT202 COV
                </Typography>
                <Typography variant="body1" pt={1}>
                  MT202 COV is a format of a SWIFT message used for bank-to-bank
                  payments or in the case of a SWIFT message in the MT103 format
                  sent using the Cover method. In such a Cover method the SWIFT
                  message sent in the MT 202 includes fields for the originator
                  of the transaction.
                </Typography>
                <Typography variant="body1" pt={1}>
                  There are certain SWIFT messages used for confirmatory
                  purposes for instruments of international trade such as Bank
                  Guarantees (BG) or Letters of Credit (LC). These also include
                  SWIFT messages sent to intimate changes in the terms of the LC
                  or BG.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>
                  Structure of a SWIFT message
                </Typography>
                <Typography variant="h3" fontWeight={400} fontSize={'1.2rem'}>
                  A SWIFT message follows the following structure:
                </Typography>
                <Typography variant="body1" pt={1}>
                  1. <b style={{ fontWeight: '500' }}>Basic Header </b>– This is the only mandatory block and
                  contains information for identification purposes. This is
                  auto-generated by the FIN interface of the SWIFT system. This
                  contains 5 mandatory fields
                </Typography>
                <Typography variant="body1">
                  2. <b style={{ fontWeight: '500' }}>Application Header</b> – This contains details specific
                  to the particular transfer and has separate fields for input
                  and output
                </Typography>
                <Typography variant="body1">
                  3. <b style={{ fontWeight: '500' }}>User Header</b> – This is optional
                </Typography>
                <Typography variant="body1">
                  4. <b style={{ fontWeight: '500' }}>Text</b> – This is the actual data which is transferred
                  and is found in the Message Reference Guide
                </Typography>
                <Typography variant="body1">
                  5. <b style={{ fontWeight: '500' }}>Trailers</b> – This Block contains non-mandatory fields
                  and indicates special circumstances for handling the message
                  or security information.
                </Typography>
                <Typography variant="body1" pt={1}>
                  A sample of a SWIFT MT 103 message is given below:
                </Typography>
                <Box
                  p={{ xs: 1, md: 2 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={'https://www.leremitt.com/Images/new/message.jpeg'} alt=" Newblog5" width={"100%"} />
                  </Box>
                </Box>
                <Typography variant="body1" pt={1}>
                  Such is the dominant position enjoyed by SWIFT in the world of
                  financial messaging that often banks in countries facing
                  sanctions for various grave reasons are debarred from using
                  its services. As of today, banks in Iran, Russia and Belarus,
                  facing sanctions from the European Union (EU) do not have
                  access to the SWIFT system.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#dceef7" }}>
        <Footer />
      </Box>
      <Popup blogId='Media9' />
    </>
  );
};

export default Media9;
