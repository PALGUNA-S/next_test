import { Box, Container, Grid, Link as MuiLink, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media20 = () => {
    return (
        <>
            <Navbar />
            <MetaTags
                metatitle={"A Complete Guide to Unique Transaction Reference (UTR) Number | LeRemitt"}
                metadesc={"UTR number (Unique Transaction Reference) is an important part of business transactions and learn how it helps and the various means you can access them."}
                canonicalUrl={'https://www.leremitt.com/complete-guide-about-utr-number'}
                metaimage={"https://www.leremitt.com/Images/new/Unique+Transaction+Reference+Number.png"}
            />

            <Helmet>
                {/* Article schema */}
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.leremitt.com/complete-guide-about-utr-number"
                        },
                        "headline": "A Complete Guide to Unique Transaction Reference (UTR) Number | LeRemitt",
                        "description": "UTR number (Unique Transaction Reference) is an important part of business transactions and learn how it helps and the various means you can access them.",
                        "image": "https://leremitt.com/static/media/LeRemitt_logo-re_svg.f95a2bc9ddbdd8aeba67226184311fc2.svg",  
                        "author": {
                            "@type": "Organization",
                            "name": "LeRemitt"
                        },  
                        "publisher": {
                            "@type": "Organization",
                            "name": "LeRemitt",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.leremitt.com/static/media/LeRemitt_logo-re_svg.f95a2bc9ddbdd8aeba67226184311fc2.svg",
                                "width": 600,
                                "height": 60
                            }
                        },
                        "datePublished": "2024-08-01"
                    }`}
                </script>
            </Helmet>

            <Box>
                <BlogHeader heading="A Complete Guide to Unique Transaction Reference (UTR) Number" />
            </Box>
            <Box style={{ background: "#eff2fc" }}>
                <Container>
                    <Grid container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
                        <Grid item>
                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                                    A Complete Guide on UTR Number
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>If you are part of the business world, especially part of the exporters’ realm, then UTR is a common term that will keep popping up time and again. <b>The full form of UTR is Unique Transaction Reference</b>. It is a unique identification number assigned to financial transactions sent to India. </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>UTR is essential to identify and track payments or <MuiLink href={'/accept-international-payments-for-businesses'} rel="noopener noreferrer" color="primary" underline="hover">inward remittance</MuiLink>  through electronic means or through wire transfers.</Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>What is UTR number in banking? </Typography>

                                <Typography variant="body1" pb={2}>As we explained above, UTR is vital for banking transactions. </Typography>
                                <Typography variant="body1" fontWeight={400}>It is used for the following purposes:</Typography>

                                <Typography variant="body1" pt={1}><b>1. Reference:</b> In the world of finance where businesses as well as banks have numerous transactions, it is important to have a particular reference number to track or trace transactions. The UTR number is used as a reference point and adds context to <MuiLink href={'/learn-about-foreign-inward-remittance-certificate'} rel="noopener noreferrer" color="primary" underline="hover">foreign inward remittance certificate</MuiLink> (FIRC)</Typography>

                                <Typography variant="body1" pt={1}> <b>2.	Confirmation:</b> Often when one business makes a payment to another business, UTR is used to check if the payment has been received. This becomes especially useful when the business has numerous payments coming in and going out</Typography>

                                <Typography variant="body1" pt={1}><b>3.	Prevent fraud:</b> With clear and tangible evidence of a transaction in the form of a UTR, it is easier to prevent frauds happening in terms of financial transactions</Typography>

                                <Typography variant="body1" pt={1}><b>4. Audit:</b> As a valid business in today’s world, it is crucial that any financial transaction you have with your stakeholders has a paper trail. A UTR makes it easy to track and trace payments that a business makes and receives</Typography>

                                <Typography variant="body1" pt={1}><b>5. Customer service:</b>When a customer makes a payment to a business in expectation of a service or product in return, it is critical to validate the payment, attribute it to the right order, and deliver the goods or services. Customer service representatives often struggle with customer queries around this regard and UTR numbers make it easy to provide customers with the right information</Typography>

                                <Typography variant="body1" pt={1}><b>6. Operational efficiency:</b>When you are a bank, financial institution, or a running business with numerous financial transactions, tracking the payments that have gone out and the payments received can be an operational nightmare. However, with unique transaction reference numbers and the addition of smart technology, it becomes easier to streamline operations</Typography>

                            </Box>

                            <Box p={{ xs: 1, md: 2 }}>
                                <Box
                                    p={{ xs: 1, md: 2 }}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Box component={'img'} src={'https://www.leremitt.com/Images/new/Unique+Transaction+Reference+Number.png'} alt="Importance of UTR Number" sx={{ width: { md: '50%', xs: '100%' } }} />
                                    </Box>
                                </Box>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>How to find the UTR number?</Typography>

                                <Typography variant="body1" pt={1}>The UTR number for a transaction depends on the type and the banking method used. Here are some of the ways you can use to find the UTR number:</Typography>

                                <Typography variant="body1" fontWeight={500} fontSize={'1.2rem'} pt={2}> 1.	Bank statement </Typography>
                                <Typography variant="body1" pt={1}> ●	Online banking offers bank statements you can view, print, or download. These statements have all the transaction details along with the UTR number</Typography>
                                <Typography variant="body1" pt={1}> ●	Many banks provide printed statements, which again can be scanned to find the UTR numbers you require </Typography>

                                <Typography variant="body1" fontWeight={500} fontSize={'1.2rem'} pt={2}> 2.	Transaction confirmation  </Typography>
                                <Typography variant="body1" pt={1}> ●	Email notifications are part of your banking transactions and will have the details of the transaction, including the UTR number </Typography>
                                <Typography variant="body1" pt={1}> ●	You will also get transaction confirmations through short messages on the mobile linked to your bank account, which will have the UTR number </Typography>

                                <Typography variant="body1" fontWeight={500} fontSize={'1.2rem'} pt={2}> 3.	Physical bank receipt </Typography>
                                <Typography variant="body1" pt={1}> Even though it is less prevalent, people often visit the bank to complete the transaction, and the bank will provide you with a receipt with the UTR number, which you can file for later reference </Typography>

                                <Typography variant="body1" fontWeight={500} fontSize={'1.2rem'} pt={2}> 4.	Mobile app </Typography>
                                <Typography variant="body1" pt={1}> The banking app on your mobile phone is another source to easily get the UTR number </Typography>

                                <Typography variant="body1" fontWeight={500} fontSize={'1.2rem'} pt={2}> 5.	Bank customer service </Typography>
                                <Typography variant="body1" pt={1}> If none of these options work for you, you can access the bank’s customer service team either through the call center or directly to get the details </Typography>

                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>What does the UTR number format look like? </Typography>
                                <Typography variant="body1" pt={1}>The format of the Unique Transaction Reference number varies according to the banking system and the country it is based in. In India, the UTR number usually consists of 22 characters for RTGS and 16 characters for NEFT, composed of numbers and letters.</Typography>
                                <Typography variant="body1" pt={1}>This will usually include the IFSC (bank code of the sender), the payment system, the channel, the year, month, day of the transaction, and the sequence number. </Typography>
                                <Typography variant="body1" pt={1}>However, please note that the UTR number will vary for different countries. UK has the CHAPS or faster payments, which is usually alphanumeric or USA has the wire transfer, mostly composed of numbers. However, you will notice different formats based on the bank, institution, or the specific transaction system used.  </Typography>
                                <Typography variant="body1" pt={1}>At <MuiLink href={'/'} rel="noopener noreferrer" color="primary" underline="hover">LeRemitt,</MuiLink> we believe the world of financial transactions should be transparent, easy, and accountable. Part of our endeavor is to provide all the requisite information and input at your fingertips to ease your way in the world of export.</Typography>
                            </Box>


                        </Grid>
                    </Grid>
                </Container>
            </Box >
            <Box sx={{ background: "#dceef7" }}>
                <Footer />
            </Box>
            <Popup blogId='Media20' />
        </>
    )
}

export default Media20