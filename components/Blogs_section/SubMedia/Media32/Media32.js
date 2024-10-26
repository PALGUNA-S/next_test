import { Box, Container, Grid, Link as MuiLink, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import blogimg from '../../../Assets/Types of CrossBorder Payments.png'
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media32 = () => {
    return (
        <>
            <Navbar />
            <MetaTags
                metatitle={"Types of Cross-Border Payments and Players in India | LeRemitt"}
                metadesc={"Let’s dive into the world of cross-border payments and players in India to make the right choice for your business in terms of speed, cost, and least risks"}
                canonicalUrl={'https://www.leremitt.com/types-of-cross-border-payments'}
                metaimage={blogimg}
            />

            <Helmet>
                {/* BlogPosting schema */}
                <script type="application/ld+json">
                    {`{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.leremitt.com/types-of-cross-border-payments"
            },
            "headline": "Types of Cross-Border Payments and Players in India | LeRemitt",
            "description": "Let’s dive into the world of cross-border payments and players in India to make the right choice for your business in terms of speed, cost, and least risks",
            "image": "https://www.leremitt.com/static/media/LeRemitt_logo-re_svg.f95a2bc9ddbdd8aeba67226184311fc2.svg",  
            "author": {
                "@type": "Organization",
                "name": "LeRemitt"
            },  
            "publisher": {
                "@type": "Organization",
                "name": "LeRemitt",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.leremitt.com/static/media/LeRemitt_logo-re_svg.f95a2bc9ddbdd8aeba67226184311fc2.svg"
                }
            },
            "datePublished": "2024-09-30"
        }`}
                </script>
            </Helmet>


            <Box>
                <BlogHeader heading="Types of Cross-Border Payments and Players in India" />
            </Box>

            <Box style={{ background: "#eff2fc" }}>
                <Container>
                    <Grid container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
                        <Grid item>
                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                                    Types of Cross-Border Payments and Players in India
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    As an exporter, you will know that cross-border payments are the lifeblood of your
                                    business. You must understand the nuances of the different types of cross-border
                                    payments and players in India. When you <MuiLink href={'/accept-international-payments-for-businesses'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">accept international payments to India,</MuiLink> the role
                                    that an international trade platform plays also becomes relevant.
                                </Typography>

                                <Typography variant="body1" pt={1}>
                                    Let’s explore what cross-border payments mean, who the players in India are, and how to
                                    approach them for maximum benefit.
                                </Typography>

                                <Typography variant="body1" pt={1}>
                                    When the entities making and receiving the payments are based out of different
                                    countries, these payments are referred to as cross-border payments. In the Indian export
                                    context, the exporter is based in India, and the purchaser will be abroad. Since these
                                    transactions have specific <MuiLink href={'/rbi-guidelines-for-inward-remittance'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">inward remittance guidelines</MuiLink> and unique aspects, it is crucial
                                    to understand all the nuances. For instance, exporters must abide by the <MuiLink href={'/fema-guidelines'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">FEMA guidelines</MuiLink>
                                    to accept payments for their international transactions.
                                </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }}>
                                <Box
                                    p={{ xs: 1, md: 2 }}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Box component={'img'} src={blogimg} alt="Types of Cross-Border Payments" sx={{ width: { md: '50%', xs: '100%' } }} />
                                    </Box>
                                </Box>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>What are the types of cross-border payments?</Typography>

                                <Typography variant="body1" pt={1}><b>1. Bank or wire transfers: </b>One of the most used networks for international bank transfers,
                                    SWIFT (Society for Worldwide Interbank Financial Telecommunications) facilitates crossborder payments. Transfers from one bank to another are considered safe and are used
                                    for large sums. However, these transfers can be expensive due to the foreign exchange
                                    margins and the fees levied by the banks</Typography>
                                <Typography variant="body1" pt={1}><b>2. RTGS or Real-Time Gross Settlement: </b>This system helps with instant fund transfers
                                    between banks and is often used for international transfers. In India, you can access this
                                    facility from banks that offer services related to cross-border payments.</Typography>
                                <Typography variant="body1" pt={1}><b>3. Digital payment platforms: </b>The rise of fintech has provided options like Wise and Paypal,
                                    which are digital platforms. These enable users to transfer money across borders with
                                    lower fees, making them attractive.</Typography>
                                <Typography variant="body1" pt={1}><b>4. Debit and credit cards: </b>Today, many business folks have access to international debit
                                    and credit cards via Visa, American Express, and Mastercard, which allow you to make
                                    international payments. These come in handy when speed is of utmost importance.
                                    However, you must pay the exchange rate markups and conversion fees to avail of this
                                    option.</Typography>
                                <Typography variant="body1" pt={1}><b>5. Prepaid cards: </b>Forex prepaid cards are preloaded with foreign currency that can be used
                                    to pay for global or cross-border transactions. BookMyForex and Niyo Global are two
                                    companies that provide these forex cards to facilitate international payments. </Typography>
                                <Typography variant="body1" pt={1}><b>6. Demand draft or cheques: </b>A cheque payment or payment through demand drafts is a
                                    declining trend for payment, but it is still used in some cases. However, these methods
                                    are slow and less efficient than their digital alternatives.</Typography>
                                <Typography variant="body1" pt={1}><b>7. International money orders: </b>This is another old-school payment method used to transfer
                                    smaller amounts, especially where the banking network is not well-developed.
                                </Typography>

                                <Typography variant="body1" pt={1}>Here are some key players in cross-border payment in India: banks, fintech companies,
                                    card networks, government platforms, and cryptocurrency platforms.</Typography>

                                <Box>
                                    <Typography fontSize="1.5rem" fontWeight={400} py={2}> Players and What They Offer</Typography>
                                    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell><Typography fontWeight={600}>Players</Typography></TableCell>
                                                    <TableCell><Typography fontWeight={600}>Names</Typography></TableCell>
                                                    <TableCell><Typography fontWeight={600}>What They Offer</Typography></TableCell>
                                                </TableRow>
                                            </TableHead>

                                            <TableBody>
                                                {/* Banks */}
                                                <TableRow>
                                                    <TableCell>Banks</TableCell>
                                                    <TableCell>State Bank of India, HDFC Bank, ICICI Bank, Axis Bank</TableCell>
                                                    <TableCell>
                                                        <ul>
                                                            <li>1. Remittance services</li>
                                                            <li>2. International wire transfers</li>
                                                            <li>3. Forex management</li>
                                                        </ul>
                                                    </TableCell>
                                                </TableRow>

                                                {/* Fintech Companies */}
                                                <TableRow>
                                                    <TableCell>Fintech Companies</TableCell>
                                                    <TableCell>Paypal, Wise, Instarem, Payoneer, RazorpayX, LeRemitt</TableCell>
                                                    <TableCell>
                                                        <ul>
                                                            <li>1. Easy, digital cross-border payments</li>
                                                            <li>2. Transparent, low-cost global transfers</li>
                                                            <li>3. Competitive <MuiLink href={'/charges-and-fees-for-international-payments'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">foreign exchange rates</MuiLink></li>
                                                            <li>4. Services for various players</li>
                                                            <li>5. Facilitates inward remittance with minimal effort</li>
                                                        </ul>
                                                    </TableCell>
                                                </TableRow>

                                                {/* Card Networks */}
                                                <TableRow>
                                                    <TableCell>Card Networks</TableCell>
                                                    <TableCell>Visa, Mastercard, Rupay</TableCell>
                                                    <TableCell>
                                                        <ul>
                                                            <li>1. Global payment support via credit and debit cards</li>
                                                            <li>2. Rupay collaborates with international networks</li>
                                                        </ul>
                                                    </TableCell>
                                                </TableRow>

                                                {/* Government Platforms */}
                                                <TableRow>
                                                    <TableCell>Government Platforms</TableCell>
                                                    <TableCell>ECGC, RBI, Exim Bank of India</TableCell>
                                                    <TableCell>
                                                        <ul>
                                                            <li>1. Supports exporters with payment insurance and risk mitigation</li>
                                                            <li>2. Regulates foreign exchange and international remittances</li>
                                                            <li>3. Helps cross-border payments via lines of credit</li>
                                                        </ul>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>

                                <Typography variant="body1" pt={1}>Attractive terms, easy operation, and continuous support are some of the foundational
                                    pillars at LeRemitt. Our entire team works tirelessly to ensure we offer maximum support
                                    to exporters. To learn more, <MuiLink href={'/leconnect'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">click here.</MuiLink></Typography>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box >
            <Box sx={{ background: "#dceef7" }}>
                <Footer />
            </Box>
            <Popup blogId='Media32' />
        </>
    )
}

export default Media32