import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import { Link } from "react-router-dom";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media19 = () => {
    return (
        <>
            <Navbar />
            <MetaTags
                metatitle={"What is eBRC and How to Obtain It: A Comprehensive Guide for Exporters"}
                metadesc={"Learn about the importance of the Electronic Bank Realisation Certificate (eBRC) for exporters, how to obtain it, and the step-by-step process to access and use it for claiming export incentives in India."}
                keywords={"eBRC, Electronic Bank Realisation Certificate, export incentives, DGFT, EDPMS, export documentation, India exporters, export benefits, foreign exchange, eBRC process"}
                canonicalUrl={'https://www.leremitt.com/what-is-ebrc-how-to-obtain-it-guide'}
                metaimage={"https://www.leremitt.com/Images/sblog19.png"}
            />
            <Box>
                <BlogHeader heading="What is eBRC, and how can I obtain it? " />
            </Box>
            <Box style={{ background: "#eff2fc" }}>
                <Container>
                    <Grid container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
                        <Grid item>
                            <Box p={{ xs: 1, md: 2 }}>
                                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                                    What is eBRC, and how can I obtain it?
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>An eBRC or an Electronic Bank Realisation Certificate is a critically important document required by exporters to complete the cycle of export of goods or services in the records of the government. An exporter may obtain this digital certificate from his bank, hence obtaining certification to the effect that he has received the funds against his exported goods or services as per the declared value. This enables the bank to square off the entry pertaining to the goods or services exported made in the Export Data Processing and Monitoring System (EDPMS). The comprehensive and accurate summation of such squaring off as per records received from all exporters and importers in India, be it in the digital or physical form, is vital in maintaining the accurate figure for the Balance of Trade of the country.  </Typography>

                                <Box
                                    p={{ xs: 1, md: 2 }}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img src="https://www.leremitt.com/Images/sblog19.png" alt="eBRC obtain" width={"100%"} />
                                    </Box>
                                </Box>


                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>An eBRC, being evidence of export and payment having been received against it, is one of the most important documents required to claim benefits offered by the Government of India through its Foreign Trade Policy. The Directorate General of Foreign Trade (DGFT) formulates India’s Foreign Trade Policy, which offers exporters several incentives such as: </Typography>

                                <Typography variant="body1" pt={1}>a. Duty drawback   </Typography>
                                <Typography variant="body1" pt={1}>b. Export subsidies  </Typography>
                                <Typography variant="body1" pt={1}>c. Service Exports from India Scheme (SEIS)  </Typography>
                                <Typography variant="body1" pt={1}>d. Low-cost loans   </Typography>
                                <Typography variant="body1" pt={1}>e. Merchandise Exports from India Scheme (MEIS)   </Typography>
                                <Typography variant="body1" pt={1}>f. Tax exemption on profits from exports   </Typography>
                                <Typography variant="body1" pt={1}>g. Direct payments. </Typography>

                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pt={1}>An eBRC contains the following details: </Typography>
                                <Typography variant="body1" pt={1}>a. Exporter details – name and address   </Typography>
                                <Typography variant="body1" pt={1}>b. IEC Code of Exporter  </Typography>
                                <Typography variant="body1" pt={1}>c. Shipping bill details – date of bill and bill number  </Typography>
                                <Typography variant="body1" pt={1}>d. Name of the importer, the overseas party who has purchased the exported goods and services   </Typography>
                                <Typography variant="body1" pt={1}>e. The amount as per the invoice   </Typography>
                                <Typography variant="body1" pt={1}>f. The date of export   </Typography>
                                <Typography variant="body1" pt={1}>g. The date when the payment against the exported goods and services was realised.  </Typography>

                                <Typography variant="body1" pt={1}>An exporter may access his eBRC online by visiting the DGFT site and entering compulsory details such as their IEC and IFSC of the realising bank and additional details such as the date range of issue of the BRC and shipping bill details. </Typography>
                                <Typography variant="body1" pt={1}>The eBRC facility was introduced by the Reserve Bank of India (RBI) in 2011 to verify foreign exchange transactions carried out by exporters. The DGFT introduced their eBRC platform in 2012, thereby eliminating the requirement for an exporter to visit his bank to acquire a physical BRC, which he would then physically submit at a regional office of DGFT. The information in the physical BRC would then be manually entered making applying for export incentives both inconvenient as well as time-consuming. </Typography>
                                <Typography variant="body1" pt={1}>The introduction of the eBRC facility has speeded up the process of verification of transactions in foreign exchange and has at the same time increased the efficiency of the process. The Foreign Exchange Department (FED) of the RBI generates an eBRC basis the information they receive from banks which are Authorised Dealers (ADs) in foreign currency. </Typography>
                                <Typography variant="body1" pt={1}>The DGFT receives details of shipping bills in an electronic form from Electronic Data Interchange (EDI) ports now operational through the Indian Customs EDI System (ICES) at 19 major customs stations. It receives details of the realisation of export proceeds as they are now integrated with banks and thus is in a position to identify the remittances against individual shipping bills. This helps DGFT to determine and validate the amount as incentives to be received by an exporter as they have the FOB (Freight on Board) value of the shipment as well as the payment received as realisation proceeds against the same shipment. This has made the process of applying for incentives for exporters efficient and less time-consuming. </Typography>

                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pt={1}>Following is the process to generate an eBRC: </Typography>
                                <Typography variant="body1" pt={1}>1. The bank receiving the funds as realisation proceeds of an export transaction creates the eBRC.  </Typography>
                                <Typography variant="body1" pt={1}>2. The bank then generates an XML file digitally with the information from the eBRC. </Typography>
                                <Typography variant="body1" pt={1}>3. The bank signs the XML file digitally using a digital signer which they have already received from DGFT or have built themselves. </Typography>
                                <Typography variant="body1" pt={1}>4. This digitally signed XML file is sent to the DGFT server by the bank by logging in to the eBRC application on the DGFT website and then selecting the option to upload the eBRC. </Typography>
                                <Typography variant="body1" pt={1}>5. Once the file is submitted, the DGFT server checks and validates the user details and the information submitted. Once successfully uploaded, it notifies the bank of the same.  </Typography>
                                <Typography variant="body1" pt={1}>6. The exporter has the option to check the status of the eBRC in real time on the DGFT portal. </Typography>

                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pt={1}>An exporter needs to follow the following steps to access their eBRC: </Typography>
                                <Typography variant="body1" pt={1}>1. An exporter needs to visit the official DGFT site: <Link to={'https://www.dgft.gov.in/CP/'} target="_blank" style={{ color: 'blue' }}> https://www.dgft.gov.in/CP/</Link> and select the eBRC option from the drop-down menu on the Services tab. The next step is to click on the section – View and Print eBRC. </Typography>
                                <Typography variant="body1" pt={1}>2. The exporter will be directed to a page for eBRC Details for Trade where the IEC and IFSC of the bank have to be entered as mandatory fields. A captcha needs to be entered and the exporter needs to click on the Show Details button. </Typography>
                                <Typography variant="body1" pt={1}>3. The screen exhibits details of all the eBRCs uploaded by the bank. </Typography>
                                <Typography variant="body1" pt={1}>4. The exporter may print the eBRC from this page. </Typography>

                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pt={1}>An exporter may claim export incentives by following these steps: </Typography>
                                <Typography variant="body1" pt={1}>1. Link the relevant electronic shipping bills created using the Indian Customs Electronic Data Interchange Platform (ICEGATE) with the eBRC. </Typography>
                                <Typography variant="body1" pt={1}>2. While calculating the value of incentives, the DGFT will take the lesser value of the FOB as per the shipping bill or the realisation proceeds as per the eBRC. An exporter needs to submit the data for the expenses on commission, insurance and freight separately, as the eBRC contains FOB data only.  </Typography>

                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pt={1}>In case an eBRC has an error after successfully uploading to the DGFT site, it cannot be changed or edited. The following steps need to be employed next: </Typography>
                                <Typography variant="body1" pt={1}>1. The exporter needs to contact the bank. </Typography>
                                <Typography variant="body1" pt={1}>2. The bank will check the status of the eBRC, and if it is found not to be used or utilised, it will cancel the eBRC by uploading the status as “C” or cancel it on the DGFT system. </Typography>
                                <Typography variant="body1" pt={1}>3. Once DGFT authorises and updates the status as cancelled, the bank will issue a new eBRC with a new certificate number.  </Typography>
                                <Typography variant="body1" pt={1}>4. The bank will upload this new eBRC with an “F” or Fresh status. </Typography>
                                <Typography variant="body1" pt={1}>5. DGFT will authorise this fresh eBRC, and the exporter may view and utilise it.  </Typography>
                                <Typography variant="body1" pt={1}>The advantage of using eBRC is not only restricted to the convenience it affords an exporter in claiming their incentives from export. They also serve as an accurate record for various regulatory authorities. As of date, the RBI has made it mandatory for all exporters in India to acquire and submit eBRC. </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ background: "#dceef7" }}>
                <Footer />
            </Box>
            <Popup blogId='Media19' />
        </>
    )
}

export default Media19