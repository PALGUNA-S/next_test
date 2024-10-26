import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Box, Button, Card, CardContent, Container, Grid, Typography, } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Link from "next/link"; 

const cardStyle = {
  border: "none",
  boxShadow: "none",
  position: "relative",
};

const buttonStyle = {
  position: "absolute",
  bottom: "5px",
  left: "5px",
  fontSize: "16px",
  color: "#84ffff",
  fontWeight: "400",
};

const WeMedia = () => {
  return (
    <Box py={{xs:10,md:15}} 
      sx={{
        backgroundImage: `url('/assets/Reusable_section/We_are_in_media_bg.svg')`,
        backgroundColor:'#8bddea',
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <Container>
        <Grid container>
          <Grid item sx={12} md={4}>
            <Typography pb={3} variant="h2" sx={{ fontWeight: "600", fontSize: '2.25rem' }}>
              {/* We are in media */}
              LeRemitt in media
            </Typography>
          </Grid>
        </Grid>

        <Box pt={4}>
          <Splide
            options={{
              perPage: 3,
              gap: 16,
              type: "loop",
              interval: 8000,
              autoplay: true,
              breakpoints: {
                1280: {
                  perPage: 3, // Large screens (1280px and above)
                },
                960: {
                  perPage: 2, // Medium screens (960px - 1279px)
                },
                600: {
                  perPage: 1, // Small screens (600px - 959px)
                },
                599: {
                  perPage: 1, // Extra small screens (0px - 599px)
                },
              },
            }}
          >
            {WeMediaData.map((item) => (
              <SplideSlide key={item.id}>
                <Card
                  style={{
                    ...cardStyle,
                    borderRadius: 0,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent style={{ flex: 1 }}>
                    {item.logonews && (
                      <img src={item.logonews} alt="news-logo" style={{ paddingBottom: "5px" }} />
                    )}
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontSize={"1.3rem"}
                        pb={1}
                        sx={{
                          color: "#00b8d4",
                          fontWeight: "500",
                        }}
                      >
                        {item.link ? (
                          <Link href={item.link} target="_blank">
                            {item.title}
                          </Link>
                        ) : (
                          item.title
                        )}
                      </Typography>
                      <Typography
                        variant="body1"
                        pb={0.5}
                        fontSize={"1rem"}
                        fontWeight={400}
                      >
                        {item.text}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontSize={"1rem"}
                        fontWeight={400}
                      >
                        {item.text2}
                      </Typography>
                    </Box>
                  </CardContent>

                  <img src={item.img} alt={item.alt} loading="lazy" style={{ width: "100%", height: "auto" }} />

                  {item.id !== 9 && item.id !== 10 && (
                    <Button
                      style={buttonStyle}
                      size="large"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      <TrendingFlatIcon sx={{ mr: 1, ml: 1 }} />{" "}
                      {item.redirect ? (
                        <Link href={item.link} target="_blank">
                          Read More
                        </Link>
                      ) : (
                        <Link href={item.link}>Read More</Link>
                      )}
                    </Button>
                  )}
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Container>
    </Box>
  );
};

export default WeMedia;


const WeMediaData = [
  {
    id: 9,
    img: 'https://www.leremitt.com/Images/new/Business+Awards.png',
    alt: 'LeRemitt receiving Fintech Start-up of the Year award',
    logonews: 'https://www.leremitt.com/Images/new/Techindia.png',
    title: "LeRemitt Honored with Fintech Start-up of the Year (Payments) Award by MSME India Business Awards 2024",
    text: "We are thrilled to announce that LeRemitt has been named Fintech Start-up of the Year (Payments) at the MSME India Business Awards 2024. This award honors our commitment to innovation and excellence in fintech. Thank you to our dedicated team, partners, and customers for their unwavering support.",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 8,
    img: 'https://www.leremitt.com/Images/new/Award.png',
    alt: 'ET Inspiring Women Leaders Award',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/TET_logo.png',
    title: "Sheetal Jain, CEO - LeRemitt Awarded ET Inspiring Women Leaders Award 2024 by The ET Women Conclave 2024",
    text: "Our Co-Founder & CEO, Sheetal Jain has been awarded by the ET conclave as the ET Inspiring Women Leader amongst the many woman leaders who have made significant strides in the ecosystem.  ",
    text2: "The event honoured women leaders from diverse industries and backgrounds, and addressed pressing issues faced by women in workplaces.",
    link: "https://economictimes.indiatimes.com/news/company/corporate-trends/unleashing-potential-embracing-diversity-a-symphony-of-womens-voices/articleshow/108821524.cms?from=mdr",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 7,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/Media7.png',
    alt: 'LeRemitt platform empowering MSMEs in India',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/cxo-logo.png',
    title: "LeRemitt, a Cross Border Platform, wishes to empower MSMEs in India with their platform for enhancing the global trade experience",
    text: "LeRemitt platform is an international payments platform meant for MSMEs. ",
    text2:
      "An MSME can bring payments in 4 major currencies through Virtual accounts provided through a digital, RBI complaint and AI-driven secure platform. Targets to expand services across geographies connecting MSMEs across the globe",
    link: "https://cxotoday.com/press-release/leremitt-a-cross-border-platform-wishes-to-empower-msmes-in-india-with-their-platform-for-enhancing-the-global-trade-experience/",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 6,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/Msmebg.png',
    alt: 'MSME Talk podcast episode with Sheetal Jain',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/msme.png',
    title: "MSME TALK Episode 35, Why to Use LeRemitt for Export Remittances,",
    text: "Sheetal Jain, CEO of LeRemitt, delves into fintech's role in easing export remittances for MSMEs. ",
    text2:
      "This episode sheds light on LeRemitts mission to streamline cross-border payments with transparent costs and efficient processes, empowering small business exporters to navigate the complexities of global trade. A must-listen for MSMEs eyeing international markets.",
    link: "https://msmetalk.com/podcast/why-to-use-leremitt-for-export-remittances/",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 2,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/fintech.png',
    alt: 'Fintech disruption and regulation',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/ETEdge-Insights.png',
    title: "Fintech at the crossroads: Disruption and regulation",
    text: "In the last one month, RBI has made the following two announcements back-to-back which have sent shockwaves through the entire fintech industry leaving stakeholders on both sides of the debate pondering the implications and the path forward ",
    text2:
      "!.Paytm Payments Bank won’t be allowed to accept fresh deposits or carry out credit transactions after March 15 citing compliance standards. ",
    link: "https://etinsights.et-edge.com/fintech-at-the-crossroads-disruption-and-regulation/",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 3,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/yescxoimg.png',
    alt: 'LeRemitt and YES BANK partnership for cross-border platform',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/cxo-logo.png',
    title:
      "LeRemitt launches its Cross-Border Platform for MSMEs in Partnership with YES BANK",
    text: "LeRemitt, in partnership with YES BANK, has developed a user-friendly platform that enables MSME players to easily conduct international transactions in key currencies such as USD, EURO, GBP, and CAD.",
    text2:
      "This innovative solution simplifies cross-border payments, making global business more accessible for small and medium-sized enterprises. ",
    link: "https://cxotoday.com/press-release/leremitt-launches-its-cross-border-platform-for-msmes-in-partnership-with-yes-bank/",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 4,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/yesbank.png',
    alt: 'Yes Bank and LeRemitt collaboration for MSME cross-border transactions',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/TET_logo.png',
    title:
      "Yes Bank, LeRemitt in pact to enable smooth cross-border transactions for MSMEs",
    text: "Fintech startup LeRemitt and Yes Bank have partnered to introduce a cross-border platform that enables micro, small and medium enterprises (MSMEs) to conduct international transactions in key currencies, ",
    text2:
      "In addition to multi-currency support, the platform offers transparency, efficiency, and cost benefits for small businesses involved in global trade, ",
    link: "https://economictimes.indiatimes.com/tech/technology/yes-bank-leremmitt-in-pact-to-enable-smooth-cross-border-transactions-for-msmes/articleshow/107480167.cms?from=mdr",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 1,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/lr_msh.png',
    alt: 'LeRemitt funding announcement',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/TET_logo.png',
    title:
      "Fintech startup LeRemitt raises $1.25 million in funding from Axilor Ventures, others",
    text: "Fintech startup LeRemitt on Friday announced that it has raised $1.25 million in a funding round led by early-stage investor Axilor Ventures.The round also saw participation from Capital A along with other founders and angel investors.",
    text2:
      "The company said it will use the proceeds from the fundraise to bolster its team and expand globally while enhancing its product offerings.",
    link: "https://economictimes.indiatimes.com/tech/funding/fintech-startup-leremitt-raises-1-25-million-in-funding-from-axilor-ventures-others/articleshow/102222902.cms",
    redirect: true,
    heading: "  We are in media",
  },
  {
    id: 5,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/lr_team.png',
    alt: 'LeRemitt team securing funding',
    logonews: 'https://www.leremitt.com/Images/Reusable-section/INC_42.png',
    title:
      "Fintech Startup LeRemitt Secures Funding To Simplify Cross-Border Transactions For MSMEs",
    text: "Founded in 2022 by Sheetal Jain, Mahesh Kumar Barate, and Hari Ambati, LeRemitt helps businesses, especially MSMEs, to streamline the overseas transaction",
    text2:
      "The freshly raised funds will be used for hiring, global expansion, product development, and exploring strategic partnerships",
    link: "https://inc42.com/buzz/fintech-startup-leremitt-secures-funding-to-simplify-cross-border-transactions-for-msmes/",
    redirect: true,
    heading: "We are in media",
  },
];