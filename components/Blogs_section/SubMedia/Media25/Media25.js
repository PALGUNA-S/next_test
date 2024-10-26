import { Box, Container, Grid, Link as MuiLink, Typography } from "@mui/material";
import React from "react";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import Popup from "../../../Reusable_Components/PopUp/PopUp";
import { Helmet } from "react-helmet";

const Media25 = () => {
    return (
        <>
            <Navbar />
            <MetaTags
                metatitle={"A Complete Guide on Export Declaration Form | LeRemitt"}
                metadesc={"Learn all the details of the export declaration form and ensure that your export business follows all the relevant guidelines while conducting your export business."}
                canonicalUrl={'https://www.leremitt.com/guide-on-export-declaration-form'}
                metaimage={"https://www.leremitt.com/static/media/LeRemitt_logo-re_svg.f95a2bc9ddbdd8aeba67226184311fc2.svg"}
            />

            <Helmet>
                {/* Article schema */}
                <script type="application/ld+json">
                    {` {
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.leremitt.com/guide-on-export-declaration-form"
                        },
                        "headline": "A Complete Guide on Export Declaration Form | LeRemitt",
                        "description": "Learn all the details of the export declaration form and ensure that your export business follows all the relevant guidelines while conducting your export business.",
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
                        "datePublished": "2024-09-03"
                    } `}
                </script>
            </Helmet>

            <Box>
                <BlogHeader heading="A Complete Guide on Export Declaration Form" />
            </Box>

            <Box style={{ background: "#eff2fc" }}>
                <Container>
                    <Grid container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
                        <Grid item>
                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                                    A Complete Guide on Export Declaration Form
                                </Typography>
                                <Typography variant="body1" pt={1}>As an Indian exporter, you will feel great pride in the way you help shape our economy by bringing in foreign currency. On the other hand, as exporters, you must follow all the guidelines that apply to your business to meet all the compliance requirements that your business faces.</Typography>
                                <Typography variant="body1" pt={1}>In this article, we will examine the Export Declaration Form (EDF), which is crucial to the export process. Let’s dive right in and examine some aspects of the EDF.</Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>What is the purpose of EDF? </Typography>

                                <Typography variant="body1" pt={1}>Exporters use the EDF to declare the goods or services they are exporting. </Typography>

                                <Typography variant="body1" pt={1}><b>1. Details of export: </b>It lists all the details of the goods or services to ensure compliance with the Directorate General of Foreign Trade (DGFT) and other related authorities.</Typography>

                                <Typography variant="body1" pt={1}><b>2. Customs clearance: </b>As an exporter, you need to get clearance from customs authorities, who examine the goods exported, the value of the shipment, and other required details.</Typography>

                                <Typography variant="body1" pt={1}><b>3. Bank or authorized dealer: </b>Once the goods have cleared customs, the exporter needs to secure <MuiLink href={'/learn-about-foreign-inward-remittance-certificate'} rel="noopener noreferrer" color="primary" underline="hover">FIRC</MuiLink> from the authorized dealer or bank. The AD bank must review the details of the export transaction and facilitate the movement of funds back to India within the prescribed time.</Typography>

                                <Typography variant="body1" pt={1}><b>4. EDPMS: </b>The Export Data Processing and Monitoring System, an online portal that the Reserve Bank of India (RBI) requires exporters to submit the EDF. As an exporter, you must first register with the EDPMS to submit EDF online.</Typography>

                                <Typography variant="body1" pt={1}><b>5. FEMA compliance: </b>All exporters must ensure that all export transactions comply with the <MuiLink href={'/fema-guidelines'} rel="noopener noreferrer" color="primary" underline="hover">Foreign Exchange Management Act</MuiLink> (FEMA). One such requirement is that exporters submit the EDF on time and that the funds related to the export transactions are moved to India within the assigned period.</Typography>

                                <Typography variant="body1" pt={1}><b>6. EDF details: </b>The export declaration form must include relevant information, such as the exporter's name and address, and other pertinent details, such as the description of goods, the Harmonized System (HS) code, invoice value, transaction currency, and shipment mode. </Typography>

                                <Typography variant="body1" pt={1}><b>7. Avoid penalties: </b>Exporters face penalties if they do not submit the EDF on time or if the information in the EDF is incomplete. These penalties include legal action or fines and affect the future transactions of the exporter. </Typography>

                                <Typography variant="body1" pt={1}><b>8. Dealing with changes: </b>In business, it is natural to make changes or amendments if required, and this is the case with exporters when the deal details change. You need to update the authorized dealer bank and the customs authorities about these changes in the EDF to ensure compliance.</Typography>

                                <Typography variant="body1" pt={1}>● Also read:  <MuiLink href={'/essential-documents-for-cross-border-trade-guide'} rel="noopener noreferrer" color="primary" underline="hover">Documents required for Cross-border trade</MuiLink></Typography>

                                <Typography variant="body1" pt={1}>Now that we have looked at EDF's role and its importance to an exporter, let's also understand the details that go into it. The EDF is detailed and has several sections, and it may not be possible to detail all of them here. However, we can offer a snapshot of the details on the EDF.</Typography>

                            </Box>


                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>Details of the exporter  </Typography>
                                <Typography variant="body1" pt={1}>1. Name and complete address, including the contact details of the exporter</Typography>
                                <Typography variant="body1" pt={1}>2. The unique 10-digit code or the IEC (<MuiLink href={'/guide-about-iec-registration-process'} rel="noopener noreferrer" color="primary" underline="hover">Importer Exporter Code</MuiLink>) assigned by the Directorate General of Foreign Trade</Typography>
                                <Typography variant="body1" pt={1}>3. The Goods and Services Tax Identification Number is also to be included</Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}> Buyer name and address </Typography>
                                <Typography variant="body1" pt={1}>1. Name and address of the consignee or the foreign buyer</Typography>
                                <Typography variant="body1" pt={1}>2. Destination country to which the goods or services are being delivered </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>Invoice details  </Typography>
                                <Typography variant="body1" pt={1}>1. The date of the commercial invoice and reference number </Typography>
                                <Typography variant="body1" pt={1}>2. The FOB (free on board) value of the goods in the currency specified  </Typography>
                                <Typography variant="body1" pt={1}>3. Details of the currency</Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>Shipment description  </Typography>
                                <Typography variant="body1" pt={1}>1. Provide the details of the Indian port from where the goods are being shipped </Typography>
                                <Typography variant="body1" pt={1}>2. The destination port where the goods will be landed and unloaded  </Typography>
                                <Typography variant="body1" pt={1}>3. Specifics of the transportation mode through which the goods are being shipped </Typography>
                                <Typography variant="body1" pt={1}>4. The <MuiLink href={'/complete-guide-about-utr-number'} rel="noopener noreferrer" color="primary" underline="hover">unique number</MuiLink> (bill of lading or airway bill number) needs to be added</Typography>
                                <Typography variant="body1" pt={1}>5. Harmonized System (HS) code for the exported goods</Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>Details of the exported goods</Typography>
                                <Typography variant="body1" pt={1}>1. Provide a detailed description of the goods being exported</Typography>
                                <Typography variant="body1" pt={1}>2. The quantity and dimensions of the goods being exported </Typography>
                                <Typography variant="body1" pt={1}>3. Unit of measurement of the goods (in meters, kilograms, etc.) in the shipment </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>Financial and banking aspects </Typography>
                                <Typography variant="body1" pt={1}>1. The authorized dealer (AD) code of the bank which will deal with export proceeds</Typography>
                                <Typography variant="body1" pt={1}>2. The bank account number where the export proceeds will be realized</Typography>
                                <Typography variant="body1" pt={1}>3. The mode of payment, like a Letter of Credit, card, or other modes, needs to be specified </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>Declaration </Typography>
                                <Typography variant="body1" pt={1}>1. The exporter has to provide a statement certifying that all the details provided are accurate and in compliance with the applicable regulations</Typography>
                                <Typography variant="body1" pt={1}>2. The exporter must sign the form along with the date of the submission of the EDF </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>Custom-related details </Typography>
                                <Typography variant="body1" pt={1}>1. Provide information about the Customs House Agent (CHA) where applicable</Typography>
                                <Typography variant="body1" pt={1}>2. There will be section for custom authorities to verify and approve the declaration </Typography>
                                <Typography variant="body1" pt={1}>As an exporter, you must fill out all the details in EDF to ensure seamless transactions. Did you find the above information helpful? At <MuiLink href={'https://www.leremitt.com/'} rel="noopener noreferrer" color="primary" underline="hover">LeRemitt</MuiLink>, we strive to help all our clients with a user-friendly platform and other support. Want to learn how we can help? Click here to connect with our friendly and intelligent team! </Typography>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box >
            <Box sx={{ background: "#dceef7" }}>
                <Footer />
            </Box>
            <Popup blogId='Media25' />
        </>
    )
}

export default Media25