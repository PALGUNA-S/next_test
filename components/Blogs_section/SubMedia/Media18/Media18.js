import { Box, Container, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React from "react";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import Popup from "../../../Reusable_Components/PopUp/PopUp";

const Media18 = () => {
    const data = [
        { label: 'Decades', values: ['1991', '2001', '2010'] },
        { label: 'NRI Population (in millions)', values: [1.48, 3.32, 5.48] }
    ];

    const exchangeHouses = [
        "Al Ansari Exchange", "Lulu Exchange", "BFC Group Holdings", "Al Fardan Exchange",
        "Al Mulla International Exchange Co.", "Joy Alukkas Exchange", "Al Rostamani Exchange",
        "Almuzaini Exchange Company", "Orient Exchange", "Al Ghurair Exchange", "Alawneh Exchange",
        "Wall Street Exchange", "Sharaf Exchange", "Alfardan Exchange", "Global Money Exchange Co.",
        "Abu Sheikha Exchange", "Hamdan Exchange", "GCC Exchange", "Purshottam Kanji Exchange Co.",
        "National Finance & Exchange Co.", "Al Ahalia Money Exchange", "Al Dhafra Exchange", "Alfa Exchange",
        "Habib Qatar International Exchange"
    ];

    const firstHalf = exchangeHouses.slice(0, 12);
    const secondHalf = exchangeHouses.slice(12);

    return (
        <>
            <Navbar />
            <MetaTags
                metatitle={"The Role of Exchange Houses in Facilitating Remittances from the Middle East to India"}
                metadesc={"Explore the significant role of Exchange Houses in the Middle East from the 1970s to the 2010s, their impact on remittances to India, and how they have adapted to changing market dynamics. Learn about their services, operational examples, and the challenges they face in today's digital era."}
                keywords={"Exchange Houses, Middle East remittances, Indian expatriates, GCC countries, currency exchange, financial inclusion, cross-border payments, remittance services, migrant workers, fintech competition"}
                canonicalUrl={'https://www.leremitt.com/role-of-exchange-houses-middle-east-remittances-to-india'}
                metaimage={"https://www.leremitt.com/Images/sblog18.png"}
            />
            <Box>
                <BlogHeader heading="Role of Exchange Houses in the Middle East " />
            </Box>
            <Box style={{ background: "#eff2fc" }}>
                <Container>
                    <Grid container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
                        <Grid item>
                            <Box p={{ xs: 1, md: 2 }}>
                                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                                    Role of Exchange Houses in the Middle East
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    If you were to ever think of the Middle - East in the decades of the 1970s to the 2010s, especially of the huge Indian, predominantly migrant Indian workers community present there, and their remittances to India, the image that would instantly pop up in your mind would be that of an ‘Exchange House’.
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    The total expatriate Indian population in the Gulf Cooperation Council (GCC) nations comprising Kuwait, Bahrain, Oman, Saudi Arabia, Qatar  and the United Arab Emirates (UAE) over the decades is as:
                                </Typography>
                                <Box
                                    p={{ xs: 1, md: 2 }}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img src="https://www.leremitt.com/Images/sblog18.png" alt="Middle East exchange houses" width={"100%"} />
                                    </Box>
                                </Box>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }}>
                                <Typography variant="body1" pb={1} textAlign={"justify"}>
                                    This burgeoning expatriate Indian population has largely influenced the commencement of and the phenomenal growth of the ubiquitous Exchange Houses in these geographies.
                                </Typography>
                                <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Table sx={{ width: '50%', minWidth: 200, background: '#fff' }} aria-label="NRI Population Table">
                                        <TableBody>
                                            {data.map((row) => (
                                                <TableRow key={row.label}>
                                                    <TableCell component="th" scope="row" sx={{ fontSize: '1rem', fontWeight: '500', }}>
                                                        {row.label}
                                                    </TableCell>
                                                    {row.values.map((value, index) => (
                                                        <TableCell sx={{ fontSize: '1rem', }} key={index}>{value}</TableCell>
                                                    ))}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    What is an Exchange House? An Exchange House, in the simplest terms, refers to a business involved in the exchange of different currencies for other currencies – one or more. So, the basic business of the Exchange Houses in the Middle – East was to accept deposits in the local currency and remit the same in a different currency, the Indian Rupee (INR), in case of remittances from the expatriate Indian community to India. This may be in the form of telegraphic transfer, cash pick up, or instant credit.
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Apart from their core business, Exchange Houses are also in the business of processing credit card payments, utility bill payments, and other such payments sale of foreign exchange, remittance and cash collection on behalf of corporates, travel cards, collecting payment for airline tickets, international mobile top-ups and other such value-added services.
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    An Exchange House charges a small fee in lieu of the service provided and also earns from the margin available on the foreign exchange.
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Let us try to understand the workings of an Exchange House through the following example:
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Your family member is working in a GCC country and wishes to remit a sum of 1000 UAE Dirhams to you in India. He approaches the nearest branch of ABC Exchange House and completes the formalities. He needs to carry his Emirates ID with him. He is charged a fee of, say, around 50 AED (including 5 per cent VAT).
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Your family member has the option to send the remittance as cash-to-cash or cash-to-bank. In the former option,  you will need to visit a bank or other financial institution tied up with ABC Exchange House to receive cash payment and in the latter option, you will be free to get the amount credited into your bank account directly.
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Assuming your family member who is remitting the funds has chosen the cash-to-cash option, also known as cash pickup, he will be provided with a receipt and a code, which he will need to transmit to you. You will need to visit the financial institution tied up with ABC Exchange House in India- it may be a bank branch, PSU or private, an NBFC, a fintech company or even a designated post office of India Post.
                                </Typography>
                                <Typography variant="body1" pt={1} textAlign={"justify"}>
                                    Once at the branch or office of the financial institution of your convenience, you will, in this case, need to share the code and show some valid ID proof. The official will enter and authenticate the code you provide in their software, enter your details and pay you the amount due to you. Some banks allow you to directly credit the money into your account held with them instead of taking physical cash.
                                </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>In this example, ABC Exchange House earns in two ways: </Typography>
                                <Typography variant="body1" pt={1}>
                                    1. They charge your remitting family member a nominal fee
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    2. They earn through exchange margin. The mid – market rate for AED to INR is Rs 22.68 per AED. ABC Exchange House will offer a rate of around Rs 22.58 – Rs 22.63 per AED, thus also earning around 0.5 per cent on the remittance amount. In this example, the earning in the form of an exchange commission is 50 AED for the remittance of 1000 AED.
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    Exchange Houses began to be set up in the GCC region in the 1970s. The rapidly increasing migrant labour population, especially from the Indian subcontinent, to work in the oilfields and build the emerging cities played a significant role. The majority of these migrant workers were illiterate and were not at all conversant with the traditional banking channels. In the decades of the '70s and '80s, there were not as many bank branches in the GCC region as in India, core banking was yet to enter these regions, and processes for remitting money through banks were not as simple as in today’s world. Exchange houses were set up to bridge the gap between the existing facilities and the need for a sizeable number of these migrant workers to remit money to their families back in India and our neighbouring countries. The success of these Exchange Houses led to phenomenal growth in the entities involved in this business as well as the financial institutions acting as their correspondents in the destination countries for the remittances, such as India.
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    Exchange houses hold a special place in the economies of countries in the Middle East. These are important as they promote economic growth through financial inclusion. As you have read above, a huge majority of the workforce of migrant workers in the GCC region are engaged in unskilled labour with a corresponding low wage pay - out. A sizeable number of these workers often earn less than the minimum amount required to maintain a proper bank account. In the absence of access to the formal banking system due to lack of education and exposure and low levels of income, a vast majority of these underbanked and unbanked workers used to resort to unorganised and informal ways of sending money back to their loved ones in their countries. Hawala channels were used, and they were notorious for being unregulated. Charges in such channels were not uniform, leading to disparity as per the whims and fancies of the hawala operators. Such remittances were also not traceable or trackable and were not accounted in the GDP figures of the respective countries. You will recall the movies made by the Hindi film industry in the decades of the 80s and 90s often depicted the issues faced when remitting funds using these channels. Exchange houses were set up to provide the often uneducated and unbanked migrant worker with a formal and safe channel to send his hard-earned money back to his family in his home country. The wide network of agents and sub-agents of these Exchange Houses ensured easy access to them. The rates charged were cheaper, benefiting from economies of scale, often half of what was charged by the traditional banks, making it cheaper for the migrant workers.
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    As per World Bank figures, India is the top recipient of remittances, having received a total of USD 125 billion in 2023. This figure is an indicator of the importance of Exchange Houses in the Middle East as these remain, to date, an extremely popular channel used for remittances by the expatriate Indian diaspora to their families back in India. Even if we go back in time, we find that in 2012, USD 30 billion out of a total of USD 69 billion remitted out of the GCC region was to India. This figure was 42.5 per cent of the total remittances received in India for that year.
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    The widespread popularity and the comparatively lax regulations of Exchange Houses have raised concerns in the past concerning their use in money laundering, drug and terrorist financing and fraud. In order to combat these serious issues relating to misuse of the channel, the governments in the GCC region have laid down stricter measures. Governments have trained the staff of Exchange Houses to adhere to practices to ensure a clean financial system. The training has been conducted in the form of workshops on compliance and how to identify and prevent remittances which may be the proceeds of crime. Details on internationally sanctioned individuals and organisations are being updated in the operating system used by Exchange Houses. The emphasis is on preserving the reputation of the organisation as well as the country.
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    In the current day, Exchange Houses are still a predominant channel for migrant workers to send remittances back home to India. However, they have to compete with new fintech companies that are leveraging their AI-based cutting-edge technology and personalised machine learning-based techniques at a lower cost. These fintech companies are launching heavy marketing campaigns to drive home their advantage over banks and exchange houses. The proliferation of mobile networks, too, has made the task of remitting money home easier, even for illiterate workers.
                                </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>Exchange Houses will need to adapt continuously to stay relevant in these dynamic markets. Some steps being adopted are as follows: </Typography>
                                <Typography variant="body1" pt={1}>
                                    1. Promotion of easy and seamless transactions to achieve financial inclusion
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    2. Coming up with further value-added services for the convenience of the customers as well as to shore up their revenues
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    3. Creation of smartphone-based apps to keep up with the digital transformation of the present times
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    4. Unshackle themselves by adding additional destinations for the remittance of money
                                </Typography>
                                <Typography variant="body1" pt={1}>
                                    5. Enhancement of the process of cross-border payments in an official, secure and safe manner.
                                </Typography>
                            </Box>

                            <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400}>A list of Exchange Houses in the GCC geography (in random order and not exhaustive) is as follows:</Typography>
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        {firstHalf.map((house, index) => (
                                            <Typography key={index} variant="body1" pt={1}>
                                                {index + 1}. {house}
                                            </Typography>
                                        ))}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        {secondHalf.map((house, index) => (
                                            <Typography key={index} variant="body1" pt={1}>
                                                {index + 1 + firstHalf.length}. {house}
                                            </Typography>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ background: "#dceef7" }}>
                <Footer />
            </Box>
            <Popup blogId='Media18' />
        </>
    );
}

export default Media18;
