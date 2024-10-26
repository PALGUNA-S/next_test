import { Box, Container, Grid, Link as MuiLink, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import blogimg from '../../../Assets/Export payment terms.png';
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media37 = () => {
    return (
        <>
            <Navbar />
            <MetaTags
                metatitle={"Export Payment Terms: Key Terms in International Shipping | LeRemitt"}
                metadesc={"Learn about the different types of export payment terms to negotiate better with buyers across the border and reduce non-payment risk."}
                canonicalUrl={'https://www.leremitt.com/export-payment-terms'}
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
                "@id": "https://www.leremitt.com/export-payment-terms"
            },
            "headline": "Export Payment Terms: Key Terms in International Shipping | LeRemitt",
            "description": "Learn about the different types of export payment terms to negotiate better with buyers across the border and reduce non-payment risk.",
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
            "datePublished": "2024-10-18"
        }`}
                </script>
            </Helmet>

            <Box>
                <BlogHeader heading="Export Payment Terms: Key Terms in International Shipping | LeRemitt" />
            </Box>

            <Box style={{ background: "#eff2fc" }}>
                <Container>
                    <Grid container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
                        <Grid item>
                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>What Are the Different Types of Export Payment Terms?  </Typography>
                                <Typography variant="body1" pt={1}>For those new to the export business, it can be seen as adventurous and risky, and it can be. However, our government has implemented measures and processes to simplify the process. There are rules to <MuiLink href={'/accept-international-payments-for-businesses'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">accept international payments,</MuiLink> FEMA for handling foreign exchange, and regulations around inward remittance like FIRC or <MuiLink href={'/complete-guide-about-utr-number'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">UTR numbers.</MuiLink> Many of these factors are tracked from when export payment terms are decided.</Typography>
                                <Typography variant="body1" pt={1}>Many payment terms must be considered based on the type of transaction, whether a letter of credit is issued or the <MuiLink href={'/types-of-export-invoices'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">type of export invoice.</MuiLink> </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }}>
                                <Box p={{ xs: 1, md: 2 }} sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Box component={'img'} src={blogimg} alt="Common export payment terms for exporters" sx={{ width: { md: '50%', xs: '100%' } }} />
                                    </Box>
                                </Box>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>What are the different export payment terms available to exporters? </Typography>
                                <Typography variant="body1" pt={1}>Exporters value the export payment terms highly, especially if transacting with a relatively new buyer. Attractive payment terms will reduce risk, help with financing options, and ensure better cash flow.</Typography>
                                <Typography variant="body1" pt={1}>Here are some of the standard export payment terms to consider</Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>Advance payment </Typography>
                                <Typography variant="body1" pt={1}>As the export payment term indicates, the importer pays for the goods before they are shipped. This payment can be either full or partial. By doing this, the risk involved in the transaction moves to the importer rather than the exporter. </Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>How does advance payment work? </Typography>
                                <Typography variant="body1" pt={1}>Once the deal has been finalized, the importer will pay the exporter either partially or in full, even before the goods are shipped. The exporter benefits from this because they are assured of the payment, do not need to look for financing options, and can complete the order without interruption. </Typography>
                                <Typography variant="body1" pt={1}>The importer will bear the risk that the exporter may not send the goods on time, meet the quality standards, or completely fail to deliver them. The most commonly used methods to make advance payments are bank wire transfers, credit cards, or escrow accounts.  </Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>Letter of credit </Typography>
                                <Typography variant="body1" pt={1}>Under this export payment method, the importer’s bank will guarantee payment to the exporter once the conditions in the <MuiLink href={'/what-is-letter-of-credit'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">letter of credit</MuiLink> (LC) are fulfilled. These conditions could involve timely delivery of goods per quality specifications, submission of shipping documents, etc.</Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>How does LC work? </Typography>
                                <Typography variant="body1" pt={1}>Once the importer and exporter agree on the transaction terms, the importer or buyer’s bank will issue a letter of credit to the seller. Once the exporter ships the goods, they will present the documents to the bank, which will release the payment. </Typography>
                                <Typography variant="body1" pt={1}>The risk factor is lowered for both the exporter and the importer as the bank guarantees the payment. The risk is reduced for the importer because the LC requires the goods to be delivered on time with the proper specifications. Both parties can choose from <MuiLink href={'/types-of-letter-of-credit'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">different types of letter of credit</MuiLink> according to their requirements.</Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>Documentary collection </Typography>
                                <Typography variant="body1" pt={1}>Under this method, the exporter ships the goods and sends the title documents to their bank, which transmits them to the importer’s bank. The importer must make the payment or accept the obligation to pay before the documents are released to them.</Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>How does documentary collection work? </Typography>
                                <Typography variant="body1" pt={1}>Once the exporter has completed the shipping process, the exporter’s bank will share the shipping documents with the importer’s bank. They will be instructed to release the documents once the payment obligations are met. </Typography>
                                <Typography variant="body1" pt={1}>In this case, the risk is moderate on both sides. If the importer refuses to pay for the goods or accept them, it could pose a risk to the exporter. The importer will face the risk of not getting the goods if they cannot meet the payment obligation. The documents against payment happen when the importer pays in full. The documents against acceptance are a situation where the importer accepts the obligation to pay at a future date and is allowed to take possession of the goods.</Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>Open account</Typography>
                                <Typography variant="body1" pt={1}>As per this arrangement, the exporter will ship the goods and invoice the importer for the amount due. The importer will then agree to make the payment later, which could range from a month to three months.</Typography>
                                <Typography variant="body1" fontSize={'1.3rem'} fontWeight={400} pt={1}>How does an open account work?</Typography>

                                <Typography variant="body1" pt={1}>The exporter and importer agree on the goods' shipment, the invoice amount, and the payment terms (after 30, 60, or 90 days). In this case, the risk to the exporter is greater as they face the risk of non-payment, while the risk to the importer is minimal as they have received the goods before making the payment. </Typography>
                                <Typography variant="body1" pt={1}>This arrangement works best when both parties have been doing business with each other for a long time or when an exporter wants to enter a competitive market by offering attractive terms.</Typography>

                                <Typography variant="h3" fontSize={'1.3rem'} fontWeight={400} pt={1.5}>Consignment</Typography>
                                <Typography variant="body1" pt={1}>Under this export payment term, the exporter will sell and ship the goods to the importer but will remain the owner until the importer sells them to the end consumer. The importer will pay only for the goods sold, not the rest.</Typography>

                                <Typography variant="body1" fontSize={'1.3rem'} fontWeight={400} pt={1}>How does the consignment export payment term work?</Typography>
                                <Typography variant="body1" pt={1}>The exporter agrees to ship the goods to the importer on a consignment basis. The importer will collect the goods, start selling them to the end customer, and pay the exporter to the extent of the sales. </Typography>
                                <Typography variant="body1" pt={1}>In this case, the risk to the exporter is high as the payment being made depends on the extent of sales at the importer’s end. And if the goods do not sell, the exporter is not paid. The importer is at low risk as they are not obligated to pay if the goods are not sold. This type of export payment terms is agreed upon when there is complete trust between the importer and exporter and the goods are in great demand in the country you are exporting to.</Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                    <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>How do you select the correct export payment terms for your export business? </Typography>
                                    <Typography variant="body1" pt={1}>You must consider several factors when making this decision, such as your business tolerance for risk, your trust or rapport with the importer, the cost of producing goods, and the market conditions.</Typography>

                                    <Typography variant="body1" fontSize={'1.3rem'} fontWeight={400} pt={1}>Take a calculated risk with your export payment terms in such conditions:</Typography>
                                    <Typography variant="body1" pt={1}>1. You are comfortable with the amount required for the consignment</Typography>
                                    <Typography variant="body1" pt={1}>2. You want to penetrate a competitive market by offering good payment terms to the buyer</Typography>
                                    <Typography variant="body1" pt={1}>3. Your financial position and capital outlay are covered with other transactions, and you want to take a slight chance</Typography>
                                    <Typography variant="body1" pt={1}>4. You and the importer have been trading for a while, and you are confident of their ability and willingness to pay</Typography>
                                    <Typography variant="body1" pt={1}>5. You can avail of government benefits for this export transaction to cover a large part of the risk</Typography>

                                    <Typography variant="body1" pt={1}>In conclusion, no matter what export payment terms you choose, ensure that you streamline the <MuiLink href={'/rbi-guidelines-for-inward-remittance'} rel="noopener noreferrer" color="primary" underline="hover" target="_blank">process of inward remittance</MuiLink> with the right platform. Wondering how to select the right platform for your business? Wonder no more, contact us to learn how LeRemitt can help!</Typography>
                                    
                                </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box >
            <Box sx={{ background: "#dceef7" }}>
                <Footer />
            </Box>
            <Popup blogId='Media37' />
        </>
    )
}

export default Media37
