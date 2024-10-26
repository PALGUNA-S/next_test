
import { Container, Typography, Grid, Box } from "@mui/material";
import React from "react";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media15 = () => {
    return (
        <>
            <Navbar />
            <MetaTags
                metatitle={"Exploring CBDC: Impact on Retail and Wholesale Markets and Cross-Border Challenges"}
                metadesc={"Dive into the evolving landscape of Central Bank Digital Currencies (CBDCs), their roles in retail and wholesale sectors, and the potential hurdles they face in cross-border financial markets."}
                keywords={"CBDC, Central Bank Digital Currency, retail CBDC, wholesale CBDC, cross-border payments, blockchain technology, financial inclusion, digital currency challenges, RBI digital initiatives"}
                canonicalUrl={'https://www.leremitt.com/cbdc-impact-on-retail-and-wholesale-cross-border-challenges'}
                metaimage={"https://www.leremitt.com/Images/sblog15.png"}
            />
            <Box>
                <BlogHeader heading="CBDC – What does it mean for retail and wholesale?" />
            </Box>
            <Box style={{ background: "#eff2fc" }}>
                <Container>
                    <Grid Container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
                        <Grid item>
                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={0.5}>
                                    CBDC – What does it mean for retail and wholesale?
                                </Typography>
                                <Typography variant="h6">Status in domestic markets & challenges it may face for cross-border markets.</Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    In recent years, you would have heard of a lot about cryptocurrencies and blockchains. In the course of such discussions, you may also have heard the term CBDC crop up as a significant development in the financial and economic world. So, what is this CBDC?
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Central Bank Digital Currency, or CBDC, is the digital form of fiat money issued by the central bank or monetary authority of a country and is a form of legal tender. Central Bank Digital Currency operates on a secure and transparent blockchain network. Unlike popular cryptocurrencies like Bitcoin or Ethereum, whose operations are independent of any traditional financial systems, Central Bank Digital Currency, as the name correctly suggests, is issued and backed by the respective central bank that issues the equivalent physical currency.                                  </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Another major difference between any ‘traditional’ cryptocurrency and CBDC is that while In the case of the former, the value is pegged against some other currency and the value is volatile and keeps fluctuating as per market conditions and investor sentiments, the value of a CBDC is always equivalent to the physical currency issued by the respective central bank or monetary authority.                                 </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    The Bahamas was the first country to launch a CBDT, the Sand Dollar, in October 2020.                                 </Typography>
                            </Box>
                            <Box
                                p={{ xs: 1, md: 2 }}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <img src="https://www.leremitt.com/Images/sblog15.png" alt="CBDC retail wholesale" width={"100%"} />
                                </Box>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>Types of CBDC </Typography>
                                <Typography variant="body1" pt={1}>There are two types of Central Bank Digital Currencies:</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>1. Wholesale CBDC: </Typography>
                                <Typography variant="body1" pt={1}>Wholesale CBDCs are primarily for the use of financial institutions such as banks and other licenced financial institutions. These are essentially the reserves held by these banks and institutions with the central banks of their countries, albeit in a digital form. This form of CBDC is used to make interbank payments and for securities transactions.</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>2. Retail CBDC: </Typography>
                                <Typography variant="body1" pt={1}>Retail CBDCs are a form of CBDCs for the use of the general public. Individuals may use retail CBDCs as digital cash, ultimately doing away with the need to carry physical cash. </Typography>
                                <Typography variant="body1" pt={1}>There is also a third type of proposed CBDC, a Hybrid CBDC, which is based more on the retail CBDC structure but may utilise the reporting and accounting structure of the wholesale CBDC. </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>Key Features of a CBDC </Typography>
                                <Typography variant="body1" pt={1}>The key features of a CBDC are as follows: </Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>1. Issued and Backed by Central Banks:  </Typography>
                                <Typography variant="body1" pt={1}>A CBDC is issued by a central bank. It is thus regulated by the issuer, unlike other forms of cryptocurrencies. This means that, being pegged against and being considered the equivalent of the physical currency of the respective issuer, the value of the CBDC vis–a–vis foreign currencies depends on how stable and credible the respective central bank is.</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>2. Legal Tender:  </Typography>
                                <Typography variant="body1" pt={1}>
                                    A CBDT is the digital equivalent of a physical currency of the respective central bank and is legal tender. This means it may be used to make purchases, settle debts, or for any other purpose the equivalent physical currency issued by the respective central bank or monetary authority may be used for.
                                </Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>3. Digital Form:   </Typography>
                                <Typography variant="body1" pt={1}>
                                    As the name suggests, CBDC exists in the digital or electronic form only. This eliminates the need to use physical cash for payments and transactions. As of now, a digital CBDC Wallet is required to load, redeem, pay as well as receive payments using CBDC.                                </Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>4. Controlled Supply:   </Typography>
                                <Typography variant="body1" pt={1}>
                                    Just as in the case of physical money, a central bank or monetary authority regulates CBDC and controls its supply as per the sovereign monetary policies of the government of the respective country to provide stability and predictability to its economy.                                </Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>5. Programmable money:   </Typography>
                                <Typography variant="body1" pt={1}>
                                    As CBDC operates on a blockchain kernel technology network, all transactions are recorded on a decentralised ledger, ensuring that the data may not be modified or tampered with. Being programmable, various features may be added based on the trackable transaction history.                                </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>Benefits of CBDC:  </Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>1. Financial Inclusion:   </Typography>
                                <Typography variant="body1" pt={1}>CBDC has the potential to improve the goal of financial inclusion by providing wallet-based access to digital payment services for populations that remain underbanked and even unbanked. </Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>2. Reduced Transaction Costs:   </Typography>
                                <Typography variant="body1" pt={1}>
                                    Payment processes may be streamlined with CBDC and this has the potential to reduce transaction costs and increase the efficiency in case of cross-border payments.</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>3. Enhanced Security:    </Typography>
                                <Typography variant="body1" pt={1}>CBDC uses blockchain kernel technology and advanced technologies like asymmetric encryption and blind or disguised content signatures. These are high-level security features, even in comparison to physical money, and will act to reduce counterfeiting and the risk of theft. They will also deter the occurrences of fraud, as it will be evident when a fraudster tries to dupe you.</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>4. Monetary Policy Tools:   </Typography>
                                <Typography variant="body1" pt={1}>The central bank or monetary authority of the country will be aided in their monetary policies to control the money supply or to regulate interest rates as CBDC provides an additional tool for regulation. </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'}>CBDC In India: </Typography>
                                <Typography variant="body1" pt={1}>The Reserve Bank of India (RBI) has rolled out a pilot project for a CBDC in India. The E-Rupee, or E-INR, was launched in the retail CBDC space on 1st December 2022 as part of this pilot project. The leading Indian banks have launched E-Rupee as part of this project. </Typography>
                                <Typography variant="body1" pt={1}>E-rupee may be purchased by making payments for the same through online channels of the banks or through UPI apps. It is issued in the same denominations as physical currency – 2 INR, 5 INR, 10 INR, 20 INR, 50 INR, 100 INR, 200 INR, 500 INR and 2000 INR and includes tokens representing coins in the denominations of 1 INR and 50 paise also. </Typography>
                                <Typography variant="body1" pt={1}>E-Rupee is the digital form of the Indian currency, the Indian Rupee (INR) and is equivalent in value to the physical currency. UPI is a payment system which you may use to carry out immediate transfers to bank accounts. </Typography>
                                <Typography variant="body1" pt={1}>You may transact in e-rupee using the digital wallet provided by the banks participating in the project. You may load and redeem E-INR using to and from your wallet, and may also send payments and ask for payments in E-INR using your wallet. </Typography>
                                <Typography variant="body1" pt={1}>The E-Rupee was popularised by Mr Anand Mahindra, a business tycoon and a board member of RBI, who used E-Rupees to purchase pomegranates from Bachche Lal Sahani, a fruit vendor who has a stall outside the RBI Head Office in Mumbai, and by capturing the process on video and sharing it through Twitter (now known as X), the trend of using E-Rupee is yet to catch up in a big way in India. The burgeoning presence of UPI may be a reason for the slow growth of Retail CBDC in India. </Typography>
                                <Typography variant="body1" pt={1}>The Government of India, through RBI, has pushed some banks, both PSU and private sector, to disburse certain benefits due to their employees directly to their CBDC wallets instead of any bank accounts. However, a lot needs to be done to increase the proliferation and popularity of the CBDC in the retail space. </Typography>
                                <Typography variant="body1" pt={1}>The Reserve Bank of India has already launched a pilot project in Wholesale CBDC also and has chosen 9 banks – PSU, private sector as well as MNC to be a part of this project. The government aims to popularise the CBDC to introduce it for cross-border payments. </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>Challenges Faced by CBDC:  </Typography>
                                <Typography variant="body1" pt={1}>Globally, CBDC faces some challenges:</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>1. Privacy Concerns:   </Typography>
                                <Typography variant="body1" pt={1}>CBDC is tracked end to end by the relevant authorities. Unlike physical cash, it has no anonymity. The transaction records are stored securely. This gives rise to privacy concerns in the face of possible monitoring by government authorities.</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>2. Technological Infrastructure: </Typography>
                                <Typography variant="body1" pt={1}>In order to be foolproof, CBDC requires robust technological infrastructure and cyber security measures to ensure secure operations.</Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>3. Regulatory Framework:  </Typography>
                                <Typography variant="body1" pt={1}>CBDC brings with it a new and different set of measures required to regulate its use to provide user friendliness and stability and to prevent the possibility of the use of CBDC in money laundering. </Typography>
                                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>4. Interoperability:  </Typography>
                                <Typography variant="body1" pt={1}>In order to make CBDC an overall success globally and to promote the use of Wholesale CBDT in cross-border payments, it is first important to build interoperability within the different CBDC systems and existing payment networks.</Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>Use of CBDC in Cross-Border Markets: </Typography>
                                <Typography variant="body1" pt={1}>The use of CBDC in the cross-border space is at present beneficial in the Retail CBDC space as it may be used for swift settlement of payments in the P2P scenario. Retail CBDC may prove to be an alternate channel for P2P inward remittances.  </Typography>
                                <Typography variant="body1" pt={1}>Wholesale CBDC will be prevalent in payment settlement in the cross-border markets in the future. . Blockchain technologies will offer several advantages over the current payment methods and channels. At present the complexities exist in the different regulatory requirements in different jurisdictions  especially in the KYC and AML requirements across different sovereign countries. </Typography>
                                <Typography variant="body1" pt={1}>The use of CBDC in cross-border markets will offer the following advantages: </Typography>
                                <Typography variant="body1" pt={1.5}>1. Swift settlement </Typography>
                                <Typography variant="body1" pt={0.4}>2. Increased reliability </Typography>
                                <Typography variant="body1" pt={0.4}>3. Transparency </Typography>
                                <Typography variant="body1" pt={0.4}>4. Traceability </Typography>
                                <Typography variant="body1" pt={0.4}>5. Reduction in costs </Typography>
                                <Typography variant="body1" pt={1.5}>In January 2024, Srimati Nirmala Sitharaman, Finance Minister, Government of India, stated that the use of CBDC will benefit cross-border payments, bringing in increased transparency and traceability and reducing costs for both inward and outward remittances. As per her statement, both the Government of India and its regulator, the Reserve Bank of India are actively working on the development of Wholesale CBDC. </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={'justify'}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>Conclusion </Typography>
                                <Typography variant="body1" pt={1}>Central Bank Digital Currency stands as a significant evolution in the concept of money. While it brings on board obvious advantages, especially in the fields of financial inclusion, it faces significant criticism mainly on the issues of privacy, regulations and technology.  </Typography>
                                <Typography variant="body1" pt={1}>The time taken by India to adopt CBDC is understandable, given the proliferation of UPI after the COVID-19 pandemic. However, looking at the efforts being made by China, a country with a higher population distribution, in developing and popularising the digital Yuan, the e-CNY, it is inconceivable for India not to follow suit. The determination of the government to migrate cross-border payments of Wholesale CBDC will help make the concept a resounding success once the cross jurisdictional issues between sovereign nations are sorted out. </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ background: "#dceef7" }}>
                <Footer />
            </Box>
            <Popup blogId='Media15' />
        </>
    )
}

export default Media15