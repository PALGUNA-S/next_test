import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { app_url } from "../../../config/config";
import getUtmParams from "../../utils/utmParams";

const handleLogin = () => {
  let utm_params = getUtmParams()
  window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
}

const valuesData = [
  {
    id: 1,
    icon: '/assets/About_section/Security_Icon.svg',
    title: "Security",
    text: " At LeRemitt, security is our utmost priority. We diligently protect our customers' data and assets through robust measures, ensuring a safe environment and instilling confidence in the integrity of information.",
  },
  {
    id: 2,
    icon: '/assets/About_section/Trust_Icon.svg',
    title: "Trust",
    text: "Trust is the bedrock of our relationships, both internally and externally. We build trust through transparent communication, ethical practices, and consistent reliability. Trust is not given; it's earned, and we earn it every day.",
  },
  {
    id: 3,
    icon: '/assets/About_section/Customer_Centric_Icon.svg',
    title: "Customer Centric",
    text: "Customers drive our decisions. We anticipate challenges, exceed expectations, and innovate with a customer-centric approach, ensuring service excellence at LeRemitt.",
  },
  {
    id: 4,
    icon: '/assets/About_section/Excellence_Icon.svg',
    title: "Excellence",
    text: "Excellence is our standard, reflected in top-tier products/services and efficient processes. We strive for continuous improvement, setting high standards and celebrating achievements at LeRemitt.",
  },
  {
    id: 5,
    icon: '/assets/About_section/Transparency_Icon.svg',
    title: "Transparency",
    text: "Transparency is key to strong relationships. We prioritize open communication, honesty, and clarity, fostering trust at LeRemitt. Our values shape our culture, ensuring lasting success.",
  },
];

const Values = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/assets/About_section/Our_Core_Values_bg.svg)`,
        backgroundColor: '#0f55a2',
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h2" pb={1} sx={{ color: "#FFF", fontWeight: "500", fontSize: '2.25rem' }} >
                Our Core Values
              </Typography>
              {/* <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  color: "white",
                  fontSize: '2.25rem'
                }}
              >
                Values
              </Typography> */}
            </Box>

            <Box pt={{ xs: 0, md: 6 }} sx={{display:{xs:'none',md:'block'}}} >
              <img src={'/assets/About_section/Our_core_values_Logo.svg'} alt="our_core_values" width={"70%"} />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container>
              <Grid item xs={12}>
                {valuesData.map((item) => (
                  <Box display="flex" >
                    <Box key={item.id} mt={1} pb={3} pl={{ xs: 0, md: 2.5 }}>
                      <img src={item.icon} alt="icon" width={35} />
                    </Box>
                    <Box pl={2.5} pb={{ xs: 1, sm: 1.5, lg: 3 }}>
                      <Typography variant="h3" sx={{ fontWeight: "500", color: "#00e5ff", fontSize: '1.5rem' }}>
                        {item.title}
                      </Typography>

                      <Typography fontSize={"1rem"} textAlign={'justify'} variant="body1" color={"white"} fontWeight={300} paddingTop={0.3} >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Stack direction={'row'} borderTop={1} borderColor="#07bfde">
                  <Button
                    variant="contained"
                    endIcon={<img src={'/Assets/Reusable_section/Button_Icon_01.svg'} alt="Button_Arrow_Icon" />}
                    sx={{
                      width: '50%',
                      "&:hover": {
                        backgroundColor: "#00d4ff",
                        boxShadow: "none",
                      },
                      boxShadow: "none",
                      borderRadius: 0,
                      background: "#04cee5",
                      color: "#142d82",
                      fontWeight: "700",
                      padding: "10px 20px",
                      marginTop: '2rem',
                      fontSize: "15px",
                      justifyContent: "space-between",
                      textTransform: "none",
                    }}
                    onClick={handleLogin}
                  >
                    Register Now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Values;
