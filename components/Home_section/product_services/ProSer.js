import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { app_url } from "../../../config/config";
import getUtmParams from "../../utils/utmParams";

const handleLogin = () => {
  let utm_params = getUtmParams()
  window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
}

const proserData = [
  {
    id: 1,
    icon: '/assets/Home_section/International_Payments_Logo.svg',
    alt: 'International',
    title: "International Payments",
    text: "  Send and receive international payments seamlessly and at a fair price.",
    btnaction: "/accept-international-payments-for-businesses",
  },
  {
    id: 2,
    icon: '/assets/Home_section/Virtual_Global_Currency_Account_Logo.svg',
    alt: 'Global',
    title: "Virtual Global Currency Account",
    text: "Virtual business account in major currencies to collect fund locally and manage your funds at convenience",
    btnaction: "/accept-international-payments-for-businesses",
  },
];

const ProSer = () => {
  return (
    <Box py={{xs:6,md:10,}}
      sx={{
        backgroundImage: `url(/assets/Home_section/Home_Product_Services_bg.svg)`,
        backgroundColor: '#0f55a2',
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}>
      <Container>
        <Box>
          <Typography pb={1} variant="h2" sx={{ color: "white", fontWeight: "500", fontSize: '2.25rem' }} >
            Product & Services
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 5, lg: 12 }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ height: "100%" }}>
              <Typography fontSize={"1.1rem"} variant="body1" color={"white"} fontWeight={300}>
                At LeRemitt, we specialize in offering efficient and
                cost-effective inward remittance services tailored exclusively
                to business customers. We understand the unique financial needs
                and priorities of businesses operating on a global scale, and
                our platform is designed to meet those demands seamlessly.
              </Typography>

              <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} pt={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <img src='https://www.leremitt.com/Images/Home_section-Svg/Home_Product+arrow.svg' alt="HomeProArrow" width={"55%"} />
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box borderTop={1} borderBottom={1} borderColor="#07bfde">
              {proserData.map((item) => (
                <Box p={2} key={item.id} sx={{ color: "white", display: "flex", }}>
                  <Box>
                    <img src={item.icon} alt={item.alt} width={"60%"} />
                  </Box>
                  <Box width={"100%"}>
                    <Typography variant="h3" sx={{ fontWeight: "500", paddingBottom: "5px", fontSize: '1.5rem' }} > {item.title} </Typography>
                    <Typography fontSize={"1.1rem"} variant="body1" color={"white"} fontWeight={300} > {item.text} </Typography>
                    <Box pt={1}>
                      <Link href={"/accept-international-payments-for-businesses"}>
                        <Button variant="text" size="large"
                          sx={{
                            color: "#00e5ff", fontWeight: "600", fontSize: "15px", padding: "0", boxShadow: "none", textTransform: "capitalize", borderRadius: 0,
                            "&:hover": { color: "white", boxShadow: "none", },
                          }}
                        >
                          Read More
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Stack pt={3}>
              <Button
                variant="contained"
                endIcon={<img src='/Assets/Reusable_section/Button_Icon_01.svg' alt="Button_Icon_01" />}
                sx={{
                  width: { xs: '70%', sm: '35%', md: '40%' },
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
      </Container>
    </Box>
  );
};

export default ProSer;
