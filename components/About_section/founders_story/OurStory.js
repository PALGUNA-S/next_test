import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const OurStory = () => {

  useEffect(() => {
    AOS.init({ duration: "1500", delay: "100" });
  }, []);

  return (
    <Box py={5} sx={{
      backgroundImage: `url(/assets/About_section/Our_Story_bg.svg)`,
      backgroundColor: '#cff5f7',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
    }}>
      <Container>
        <Box textAlign={"center"} pb={{ md: 5, lg: 16 }}>
          <Typography pr={3} variant="h2"  sx={{ fontSize: '2.25rem', fontWeight: "600", }}>
            Our Story
          </Typography>
        </Box>

        <Grid container spacing={{xs:0,lg:8}} pb={8}>
          <Grid item sm={6} style={{ paddingRight: "0", paddingTop: "0" }}>
            <Box sx={{ minHeight: "310px", maxHeight: "310px" }}>
              <Paper
                style={{
                  boxShadow: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "0",
                  borderRadius: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="5000"
              >
                <Typography
                  p={{xs:1.5,md:2,lg:3.5}}
                  variant="body1"
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={1.7}
                >
                  In the heart of India, where ambition meets adversity,
                  LeRemitt emerges as a transformative force for Micro, Small,
                  and Medium Enterprises (MSMEs). Our story begins with a
                  collective commitment, a shared vision to tackle the
                  challenges that have long hindered the growth of over 63
                  million enterprises in the country.
                </Typography>
                <img src={'/assets/About_section/OurStoryArrow_Icon_01.svg'} alt="arrow" />
              </Paper>
            </Box>

            <Box
              data-aos="fade-up-right"
              data-aos-delay="500"
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <img src={'/assets/About_section/OurStory_Icon_02.svg'} alt="rocket" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <Paper
                style={{
                  boxShadow: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "0",
                  borderRadius: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="5000"
              >
                <Typography
                  p={{xs:1.5,md:2,lg:3.5}}
                  variant="body1"
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={1.7}
                >
                  The genesis of LeRemitt took shape through collaboration,
                  fueled by a deep understanding that MSMEs faced formidable
                  obstacles in the existing international trade ecosystem. This
                  insight ignited the spark of innovation, leading to the birth
                  of LeRemitt – a platform poised to revolutionize global trade
                  for MSMEs through the harmonious integration of technology,
                  data accessibility, and digitization.
                </Typography>
                <img src={'/assets/About_section/OurStoryArrow_Icon_02.svg'} alt="arrow" />
              </Paper>
            </Box>

            <Box
              m={{ sm: 4, lg: 0 }}
              mb={{ lg: 3 }}
              data-aos="fade-up-right"
              data-aos-delay="500"
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <img src={'/assets/About_section/OurStory_Icon_04.svg'} alt="rocket" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <Paper
                style={{
                  boxShadow: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "0",
                  borderRadius: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="5000"
              >
                <Typography
                  p={{xs:1.5,md:2,lg:3.5}}
                  variant="body1"
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={1.7}
                >
                  LeRemitt transcends being merely a platform; it embodies a
                  beacon of hope for MSMEs venturing into the realm of
                  international trade. Our mission resonates with redefining the
                  narrative, offering accessible, secure, and technology-driven
                  solutions that empower businesses to flourish globally.
                  Through seamless integration of technology and data, we
                  dedicate ourselves to effecting meaningful change in the lives
                  of countless entrepreneurs across India.
                </Typography>
                <img src={'/assets/About_section/OurStoryArrow_Icon_03.svg'} alt="arrow" />
              </Paper>
            </Box>

            <Box
              data-aos="fade-up-right"
              data-aos-delay="500"
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <img src={'/assets/About_section/OurStory_Icon_06.svg'} alt="rocket" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                minHeight: "310px",
                maxHeight: "310px",
              }}
            >
              <Paper
                style={{
                  boxShadow: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "0",
                  borderRadius: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="5000"
              >
                <Typography
                  p={{xs:1.5,md:2,lg:3.5}}
                  variant="body1"
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={1.7}
                >
                  In the grand tapestry of India's business landscape, LeRemitt
                  is not just a company; it's a catalyst for change, a partner
                  in growth, and a testament to what can be achieved when vision
                  meets action. Join us on this journey, where every transaction
                  echoes the resilience and determination of the MSMEs we
                  champion – because at LeRemitt, success knows no borders.
                </Typography>
                <img src={'/assets/About_section/OurStoryArrow_Icon_04.svg'} alt="arrow" />
              </Paper>
            </Box>
          </Grid>

          <Grid
            item
            sm={6}
            borderLeft={3}
            borderColor="#00e5ff"
            style={{ paddingLeft: "0px", paddingTop: "0" }}
          >
            <Box
              data-aos="fade-up"
              data-aos-duration="5000"
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "310px",
                maxHeight: "310px",
              }}
            >
              <img src={'/assets/About_section/OurStory_Icon_01.svg'} alt="rocket" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <Paper
                style={{
                  boxShadow: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "0",
                  borderRadius: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="5000"
              >
                <img src={'/assets/About_section/OurStoryArrow_Icon_05.svg'} alt="arrow" />
                <Typography
                  p={{xs:1.5,md:2,lg:3.5}}
                  variant="body1"
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={1.7}
                >
                  Recognizing the stark imbalance in the business landscape,
                  where only a fraction of enterprises possessed significant
                  capital, a group of visionary individuals united with a
                  singular desire – to level the playing field and unleash the
                  untapped potential within the MSME sector.
                </Typography>
              </Paper>
            </Box>

            <Box
              data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-delay="500"
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <img src={'/assets/About_section/OurStory_Icon_03.svg'} alt="rocket" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <Paper
                style={{
                  boxShadow: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "0",
                  borderRadius: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="5000"
              >
                <img src={'/assets/About_section/OurStoryArrow_Icon_06.svg'} alt="arrow" />
                <Typography
                  p={{xs:1.5,md:2,lg:3.5}}
                  variant="body1"
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={1.7}
                >
                  The pivotal decision to pool our strengths marked the dawn of
                  LeRemitt's transformative journey. The founders, driven by a
                  shared commitment, brought together their collective insights
                  to create a platform that would empower MSMEs with a
                  user-friendly, secure, and technology-driven solution,
                  enabling them to not only survive but thrive on the global
                  stage.
                </Typography>
              </Paper>
            </Box>

            <Box
              data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-delay="500"
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <img src={'/assets/About_section/OurStory_Icon_05.svg'} alt="rocket" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "443px",
                maxHeight: "443px",
              }}
            >
              <Paper
                style={{
                  boxShadow: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "0",
                  borderRadius: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="5000"
              >
                <img src={'/assets/About_section/OurStoryArrow_Icon_07.svg'} alt="arrow" />
                <Typography
                  p={{xs:1.5,md:2,lg:3.5}}
                  variant="body1"
                  fontWeight={500}
                  fontSize={15}
                  lineHeight={1.7}
                >
                  Our commitment is unwavering – LeRemitt aims to bridge the
                  disparity gap, unlocking the vast potential within the MSME
                  sector and providing a transformative journey for businesses.
                  Rooted in fostering innovation, collaboration, and
                  inclusivity, our vision paints a future where MSMEs stand tall
                  on the global stage, shaping a more prosperous and
                  interconnected world.
                </Typography>
              </Paper>
            </Box>

            <Box
              data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-delay="500"
              sx={{
                // display: "flex",
                // justifyContent: "end",
                minHeight: "310px",
                maxHeight: "310px",
              }}
            >
              <img src={'/assets/About_section/OurStory_Icon_07.svg'} alt="rocket" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurStory;
