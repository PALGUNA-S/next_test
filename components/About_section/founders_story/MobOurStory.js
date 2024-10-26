import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const storyData = [
  {
    text: "In the heart of India, where ambition meets adversity, LeRemitt emerges as a transformative force for Micro, Small, and Medium Enterprises (MSMEs). Our story begins with a collective commitment, a shared vision to tackle the challenges that have long hindered the growth of over 63 million enterprises in the country.",
    img: "https://www.leremitt.com/Images/about/illus_01.svg",
  },
  {
    text: "Recognizing the stark imbalance in the business landscape, where only a fraction of enterprises possessed significant capital, a group of visionary individuals united with a singular desire – to level the playing field and unleash the untapped potential within the MSME sector.",
    img: "https://www.leremitt.com/Images/about/illus_02.svg",
  },
  {
    text: "The genesis of LeRemitt took shape through collaboration, fueled by a deep understanding that MSMEs faced formidable obstacles in the existing international trade ecosystem. This insight ignited the spark of innovation, leading to the birth of LeRemitt – a platform poised to revolutionize global trade for MSMEs through the harmonious integration of technology, data accessibility, and digitization.",
    img: "https://www.leremitt.com/Images/about/illus_03.svg",
  },
  {
    text: "The pivotal decision to pool our strengths marked the dawn of LeRemitt's transformative journey. The founders, driven by a shared commitment, brought together their collective insights to create a platform that would empower MSMEs with a user-friendly, secure, and technology-driven solution, enabling them to not only survive but thrive on the global stage.",
    img: "https://www.leremitt.com/Images/about/illus_04.svg",
  },
  {
    text: "LeRemitt transcends being merely a platform; it embodies a beacon of hope for MSMEs venturing into the realm of international trade. Our mission resonates with redefining the narrative, offering accessible, secure, and technology-driven solutions that empower businesses to flourish globally. Through seamless integration of technology and data, we dedicate ourselves to effecting meaningful change in the lives of countless entrepreneurs across India.",
    img: "https://www.leremitt.com/Images/about/illus_05.svg",
  },
  {
    text: "Our commitment is unwavering – LeRemitt aims to bridge the disparity gap, unlocking the vast potential within the MSME sector and providing a transformative journey for businesses. Rooted in fostering innovation, collaboration, and inclusivity, our vision paints a future where MSMEs stand tall on the global stage, shaping a more prosperous and interconnected world.",
    img: "https://www.leremitt.com/Images/about/illus_06.svg",
  },
  {
    text: "In the grand tapestry of India's business landscape, LeRemitt is not just a company; it's a catalyst for change, a partner in growth, and a testament to what can be achieved when vision meets action. Join us on this journey, where every transaction echoes the resilience and determination of the MSMEs we champion – because at LeRemitt, success knows no borders.",
    img: "https://www.leremitt.com/Images/about/illus_07.svg",
  },
];

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: "1500", delay: "100" });
  }, []);

  return (
    <Box
      py={5}
      sx={{
        backgroundImage: `url(/assets/About_section/Our_Story_bg.svg)`,
        backgroundColor: "#cff5f7",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <Container>
        <Box pb={{ xs: 1, sm: 2, md: 4, lg: 6 }}>
          <Typography variant="h2" pb={2} sx={{ fontSize: "2.25rem", fontWeight: "500" }} >
            Our Story
          </Typography>
        </Box>

        {storyData.map((item, index) => (
          <Grid
            container
            key={index}
            spacing={3}
            direction={index % 2 === 0 ? "row" : "row-reverse"} 
          >
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "none",
                  border: "none",
                  borderRadius:0,
                  background: {xs:'transparent',sm:'white'},
                  p: 2,
                }}
              >
                <Typography variant="body1" fontWeight={400} fontSize={14}>
                  {item.text}
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card
                py={1}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-duration="6000"
                data-aos-delay={item.reverse ? "500" : "0"}
                sx={{
                  height:'100%',
                  display: "flex",
                  justifyContent: "center",
                  alignItems:'center',
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img src={item.img} alt="illustration" style={{ width: "100%" }} />
              </Card>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default OurStory;
