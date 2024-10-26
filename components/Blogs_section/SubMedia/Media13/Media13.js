import { Box, Container, Grid, Link, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { BlogHeader } from "../../../Reusable_Components/BlogHeader/BlogHeader";
import Footer from "../../../Reusable_Components/footer/Footer";
import Navbar from "../../../Reusable_Components/navbar/Navbar";
import MetaTags from "../../../Reusable_Components/MetaTags/MetaTags";
import Popup from "../../../Reusable_Components/PopUp/PopUp";


const data = {
  goods: [
    { id: 1, title: 'Jewellery and Diamonds' },
    { id: 2, title: 'Automobiles' },
    { id: 3, title: 'Machinery – Construction equipment, Agricultural Machinery, Industrial Machinery, Textile Machinery' },
    { id: 4, title: 'Bio-Chemicals' },
    { id: 5, title: 'Drugs and Pharmaceuticals' },
    { id: 6, title: 'Cereals – Rice, Wheat, Maize and Millet' },
    { id: 7, title: 'Iron and Steel' },
    { id: 8, title: 'Textiles' },
    { id: 9, title: 'Electronic Goods – Computers and Smartphones.' },
    { id: 10, title: 'Refined Petroleum Products, Naphtha and Liquified Petroleum Gas (LPG)' }
  ],
  services: [
    { id: 1, title: "Information Technology and Business Process Management (IT-BPM)" },
    { id: 2, title: "Travel" },
    { id: 3, title: "Transportation" },
    { id: 4, title: "Insurance" },
    { id: 5, title: "Business Services" },
    { id: 6, title: "Financial Services" },
    { id: 7, title: "Communication" }
  ],
  majorports: [
    { id: 1, title: "Chennai Port" },
    { id: 2, title: "Cochin Port" },
    { id: 3, title: "Deendayal Port, Kandla" },
    { id: 4, title: "Jawaharlal Nehru Port, Navi Mumbai" },
    { id: 5, title: "Paradip Port" },
    { id: 6, title: "Syama Prasad Mookerjee Port, Kolkata" },
    { id: 7, title: "Mormugao Port" },
    { id: 8, title: "Mumbai Port" },
    { id: 9, title: "New Mangalore Port" },
    { id: 10, title: "Visakhapatnam Port" },
    { id: 11, title: "V.O. Chidambaranar Port, Thoothukudi" }
  ],
  privateports: [
    { id: 1, title: "Dakshin Bharat Gateway Terminal, Tuticorin" },
    { id: 2, title: "Chennai Container Terminal" },
    { id: 3, title: "Gateway Terminals India, Mumbai" },
    { id: 4, title: "Ennore Tank Terminals" },
    { id: 5, title: "Gujarat Pipavav Port" },
    { id: 6, title: "India Gateway Terminal, Cochin" },
    { id: 7, title: "Mundra International Container Terminal" },
    { id: 8, title: "Nhava Sheva International Container Terminal" },
    { id: 9, title: "Visakha Container Terminal" },
    { id: 10, title: "Paradip International Container Terminal" },
    { id: 11, title: "Kandla International Container Terminal" },
    { id: 12, title: "Mangalore Coal Terminal" },
    { id: 13, title: "JSW Dharamtar Port" },
    { id: 14, title: "JSW Jaigarh Port" },
    { id: 15, title: "JSW Mangalore Container Terminal" },
    { id: 16, title: "JSW Paradip Terminal" },
    { id: 17, title: "Paradip East Quay Container Terminal" },
    { id: 18, title: "Ennore Coal Terminal" }
  ],
  FreightCorridor: [
    { id: 1, title: "Covers a distance of 3381 Kms passing through 9 states" },
    { id: 2, title: "Level Crossings are completely eliminated on this corridor" },
    { id: 3, title: "596 major bridges and 4643 minor bridges to be built" },
    { id: 4, title: "52 rail flyovers, 304 Road Over Bridges and 557 Road Under Bridges to be constructed" }
  ],
  benefitingexporters: [
    { id: 2, title: "Adaptation of Digital Signature" },
    { id: 3, title: "The Courier Imports and Exports (Clearance) Amendment Regulations, 2016" },
    { id: 4, title: "National Committee on Trade Facilitation (NCTF)" },
    { id: 5, title: "Single Window Interface for Facilitation of Trade for Export too" },
    { id: 6, title: "Express Cargo Clearance System (ECCS) at Courier Terminal, Sahar, Mumbai" }
  ],
  promotionofexport: [
    { id: 1, title: "Launching of New Foreign Trade Policy on 31st March 2023" },
    { id: 2, title: "Extension of Interest Equalisation Scheme with regard to rupee export credit both pre and post-shipment" },
    { id: 3, title: "Trade Infrastructure for Export Scheme (TIES) and Market Access Initiatives (MAI) Schemes" },
    { id: 4, title: "Rebate provided on Central and State taxes and levies for the export sector which is labour-oriented" },
    { id: 5, title: "Scheme for the remission of taxes and duties on exported products" },
    { id: 6, title: "Common Digital Platform launched for Certificate of Origin to facilitate trade and help exporters take advantage of Free Trade Agreement (FTA)" },
    { id: 7, title: "Districts have been identified as export hubs based on the potential of products for export, removing obstacles to the export of the same supporting local exporters and helping generate employment" },
    { id: 8, title: "Indian Missions abroad to play an active role in the promotion of trade" },
    { id: 9, title: "Regular and proper monitoring of export performance and track deviations" }
  ],
  challengesforexport: [
    { id: 1, title: "The Russian invasion of Ukraine has added global uncertainty and governments have shifted their expenditure patterns" },
    { id: 2, title: "The Red Sea crisis is potentially dangerous for Indian exports to the USA and the EU as 80% of goods in the merchandise trade between India and the EU move through the Red Sea" },
    { id: 3, title: "Protectionist measures by the USA and EU countries may impact Indian exports" },
    { id: 4, title: "A tighter monetary policy with an overall weaker outlook may hamper exports" }
  ]
};

const Media13 = () => {

  return (
    <>
      <Navbar />
      <MetaTags
        metatitle={"India's Export Ecosystem: A Brief"}
        metadesc={"Discover the pivotal role of India's exports in its GDP growth, reaching a record $776.3 billion in 2022-23. Learn about the infrastructure, government support, and key export sectors driving this success."}
        keywords={" India exports, trade infrastructure, government export support, India trade policy, Indian ports, digital trade facilitation, India export goods, India export services"}
        canonicalUrl={'https://www.leremitt.com/india-exports-2022-2023-insights'}
        metaimage={"https://www.leremitt.com/Images/sblog13.png"}
      />
      <Box>
        <BlogHeader heading="Navigating India's Export Ecosystem: Insights from 2022-23" />
      </Box>
      <Box style={{ background: "#eff2fc" }}>
        <Container>
          <Grid container pt={{ xs: 1, md: 2 }} pb={{ xs: 1, md: 2 }}>
            <Grid item>
              <Box p={{ xs: 1, md: 2 }}>
                <Typography variant="h1" fontSize={'2rem'} fontWeight={400} pb={1}>
                  Navigating India's Export Ecosystem: Insights from 2022-23
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>The total figure for exports by India for the period FY 2022 – 23 stood at USD 776.3 billion, which is the highest to date. This figure includes both goods or merchandise and services. The figure for merchandise stood at <Link sx={{ textDecoration: 'none' }} href="https://pib.gov.in/PressReleasePage.aspx?PRID=1945149#:~:text=India%27s%20overall%20export%20(merchandise%20plus,of%20overall%20exports%20until%20now" target="_blank" rel="noopener noreferrer"> USD 451 billion</Link> while services contributed USD 325.3 billion. The total figure represented a growth of 6 per cent over the last year.</Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  Let us now read about the prevalent business environment in the context of exports. You will come to know about the country’s infrastructure with respect to exports, the kind of governmental support provided to exporters and the level of innovation based on research and development.
                </Typography>
                <Box
                  p={{ xs: 1, md: 2 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src="https://www.leremitt.com/Images/sblog13.png" alt="India export ecosystem" width={"100%"} />
                  </Box>
                </Box>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  In FY 2022-23 India’s exports ranked fifteenth in the world, up from eighteenth in FY 2021-22 and twenty-first in the previous year.
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  In India, exports have had a significant contribution to the Gross Domestic Product (GDP), which is the standard measure for calculation of the value added that has been created through the goods and services produced in a country for a defined period, usually a financial year.
                </Typography>
                <Typography variant="body1" pt={1} textAlign={"justify"}>
                  You will now see RBI figures for the <Link sx={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://rbi.org.in/Scripts/AnnualPublications.aspx?head=Handbook%20of%20Statistics%20on%20Indian%20Economy">contribution of exports to the GDP of India</Link> starting from FY 2016-17 to FY 2022 – 23.
                </Typography>
              </Box>


              <Box p={{ xs: 1, md: 2 }}>

                <Box pb={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TableContainer
                        component={Paper}
                        sx={{
                          maxWidth: '500px',
                          margin: '0 auto',
                          boxShadow: 'none',
                          borderRadius: '0',
                        }}
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ py: 1.2, fontSize: '1rem' }}>Year</TableCell>
                              <TableCell sx={{ py: 1.2, fontSize: '1rem' }}>Exports as a percentage of GDP</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{ py: 1.2 }}>2016 – 2017</TableCell>
                              <TableCell sx={{ py: 1.2 }}>19.2</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 1.2 }}>2017 – 2018</TableCell>
                              <TableCell sx={{ py: 1.2 }}>18.8</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 1.2 }}>2018 – 2019</TableCell>
                              <TableCell sx={{ py: 1.2 }}>19.9</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 1.2 }}>2019 – 2020</TableCell>
                              <TableCell sx={{ py: 1.2 }}>18.7</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 1.2 }}>2020 – 2021</TableCell>
                              <TableCell sx={{ py: 1.2 }}>18.7</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 1.2 }}>2021 – 2022</TableCell>
                              <TableCell sx={{ py: 1.2 }}>21.5</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 1.2 }}>2022 - 2023</TableCell>
                              <TableCell sx={{ py: 1.2 }}>22.8</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                      }}>
                        <img src={'https://www.leremitt.com/Images/new/blog13img2.png'} alt="Blog" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Typography variant="body1" textAlign={'justify'}>
                  From the figures above you can see how vital exports are from the point of view of the economy of the country and why the governments try to improve the infrastructure and facilities for export and form policies and regulations aimed at a steady growth in exports.
                </Typography>
              </Box>



              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h2" fontSize={'1.5rem'} fontWeight={400} pb={1}>
                  India exports several types of merchandise and services.
                </Typography>
                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} >
                  India’s key exports in the form of goods are from the following sectors:
                </Typography>
                <div>
                  <List>
                    {data.goods.map((item, index) => (
                      <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                        <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </List>
                </div>
                <Typography variant="body1" pt={1}>
                  India’s good exports amounted to $436bn for the year FY 2022-23. India’s services exports amounted to $325bn for the year FY 2022-23.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }} textAlign={"justify"}>
                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} >
                  India’s key exports in the form of services are as below:
                </Typography>

                <div>
                  {data.services.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                      <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </div>

                <Typography variant="body1" pt={1}>
                  The services exports continue to be led by the IT-ITES sectors with the USA, UK and the countries in the European Union (EU) leading the field with contributions of sixty-two per cent, seventeen percent and eleven per cent respectively.
                </Typography>
                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>
                  The <Link sx={{ textDecoration: 'none' }} href='https://commerce.gov.in/wp-content/uploads/2023/03/Annual-Report-FY-2022-23-DoC.pdf' target="_blank" rel="noopener noreferrer">top ten countries by share of exports</Link> by value for India for FY 2022 – 23 are as below.
                </Typography>
              </Box>

              <Box p={{ xs: 1, md: 2 }}>
                <Box pb={2} sx={{ display: { xs: 'block', md: 'flex' } }}>
                  <Grid container display={'flex'} justifyContent={'center'}>
                    <Grid item xs={12} md={6} >
                      <TableContainer
                        component={Paper}
                        sx={{
                          width: '100%',
                          height: '100%',
                          boxShadow: 'none',
                          borderRadius: '0',
                        }}
                      >
                        <Table>
                          <TableHead >
                            <TableRow>
                              <TableCell sx={{ py: 0.75, fontSize: '1rem' }}>Country Name</TableCell>
                              <TableCell sx={{ py: 0.75, fontSize: '1rem' }}>Share of exports by value in percentage</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>United States of America (USA)</TableCell>
                              <TableCell sx={{ py: 0.75 }}>18.05</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>United Arab Emirates (UAE)</TableCell>
                              <TableCell sx={{ py: 0.75 }}>6.65</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>China</TableCell>
                              <TableCell sx={{ py: 0.75 }}>5.04</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>Bangladesh</TableCell>
                              <TableCell sx={{ py: 0.75 }}>3.83</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>Netherlands</TableCell>
                              <TableCell sx={{ py: 0.75 }}>2.97</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>Singapore</TableCell>
                              <TableCell sx={{ py: 0.75 }}>2.64</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>Hong Kong</TableCell>
                              <TableCell sx={{ py: 0.75 }}>2.6</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>United Kingdom (UK)</TableCell>
                              <TableCell sx={{ py: 0.75 }}>2.49</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>Belgium</TableCell>
                              <TableCell sx={{ py: 0.75 }}>2.39</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ py: 0.75 }}>Germany</TableCell>
                              <TableCell sx={{ py: 0.75 }}>2.34</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Box>

                <Typography variant="body1" textAlign={'justify'}>
                  India has exported a total of USD 118.8 billion in the form of goods and services to the United States of America in FY 2022 – 23.
                </Typography>
                <Typography variant="body1" pt={1}>
                  India has developed a robust infrastructure to support exports. The country has been increasing international airports, developing ports and developing railway and road networks to facilitate the movement of goods from the exporter to the point of departure of the goods.
                </Typography>
                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>
                  <Link sx={{ textDecoration: 'none' }} href='https://shipmin.gov.in/division/ports-wing' target="_blank" rel="noopener noreferrer">Major ports</Link> whose administration is controlled by the Ministry of Shipping, Government of India are listed below.
                </Typography>

                <div>
                  {data.majorports.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                      <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </div>

                <Typography variant="body1" pt={1}>
                  Apart from these ports, there are two hundred minor ports too.
                </Typography>
                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1}>
                  In addition to the government-owned and operated ports, there are the following private ports in India:
                </Typography>

                <div>
                  {data.privateports.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                      <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </div>

                <Typography variant="body1" pt={1} textAlign={'justify'}>
                  In order to help exporters, India has reinstated its open sky policy with respect to air cargo. This means that apart from Indian carriers and scheduled foreign carriers, foreign airlines are allowed to operate non-scheduled flights for cargo for the next three years from all 137 airports in India.
                </Typography>
                <Typography variant="body1" pt={1} textAlign={'justify'}>
                  Dedicated Freight ​​Corridors have been announced for the Western and Eastern Corridors by the Minister of Railways while presenting the Railway Budget for the year FY 2005 – 06. This railway corridor is the Indian Railway’s equivalent of the Golden Quadrilateral, linking the four metropolises – New Delhi, Kolkata, Chennai and Mumbai and also the diagonals – Mumbai with Kolkata and New Delhi with Chennai.
                </Typography>
                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1} textAlign={'justify'}>
                  Read on to learn of the salient features of the Dedicated Freight Corridor:
                </Typography>
                <div>
                  {data.FreightCorridor.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                      <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </div>

                <Typography variant="body1" pt={1} textAlign={'justify'}>
                  You can quite imagine the seriousness of the government in rapidly moving freight across the country in an uninterrupted manner and how useful this will be for exporters.
                </Typography>
                <Typography variant="body1" pt={1} textAlign={'justify'} >
                  The government has also built and is in the process of building high-speed expressways to further expedite the transportation of goods by roads. All this helps the exporters.
                </Typography>
                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1} textAlign={'justify'}>
                  Indian Customs authorities have taken several steps to improve the ease of doing business. The ones benefiting exporters are as follows:
                </Typography>

                <div>
                  {data.benefitingexporters.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                      <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </div>

                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1} textAlign={'justify'}>
                  The Government of India has taken the following initiatives for promotion of export:
                </Typography>

                <div>
                  {data.promotionofexport.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                      <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </div>

                <Typography variant="h3" fontWeight={500} fontSize={'1.2rem'} pt={1} textAlign={'justify'}>
                  As you can see, the Government of India is doing a fair job in the promotion of exports. However certain factors do act as challenges for export today:
                </Typography>

                <div>
                  {data.challengesforexport.map((item, index) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px' }}>
                      <div style={{ minWidth: '24px', textAlign: 'right', marginRight: '8px', }}>{item.id}.</div>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </div>

                <Typography variant="body1" pt={1} textAlign={'justify'}>
                  You have seen the close relationship between the export performance of India and the GDP. India has been doing well in exports and has been successful in riding out the COVID–19 crisis. The Indian government has a very positive outlook on exports. According to the Minister of Commerce and Industry, Consumer Affairs, Food and Public Distribution and Textiles, Government of India, Shri Piyush Goyal, India is expected to reach the ambitious figure of USD 2 trillion in exports by 2030.</Typography>
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#dceef7" }}>
        <Footer />
      </Box>
      <Popup blogId='Media13' />
    </>
  );
};

export default Media13;

