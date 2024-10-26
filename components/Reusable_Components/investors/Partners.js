import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const partnersData = [
  {
    id: 1,
    Image: '/Assets/Reusable_section/Xflow_Logo.png',
  },
  {
    id: 2,
    Image: '/Assets/Reusable_section/Currency_Cloud_Logo.png',
  },
  {
    id: 3,
    Image: '/Assets/Reusable_section/Yes_Bank_Logo.png',
  },
  {
    id: 4,
    Image: '/Assets/Reusable_section/Modifi_Logo.png',
  },
];

const Partners = () => {
  return (
    <Box py={{xs:4,md:6,lg:8,}} sx={{
      backgroundImage: `url(/Assets/Reusable_section/Investors_bg.svg)`,
      backgroundColor: '#eef2ff',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
    }} >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box mt={{ xs: 0, md: 6 }}>
              <Typography
                variant="h2"
                sx={{ fontWeight: "600", fontSize: "2.25rem" }}
              >
                <span style={{ fontWeight: "500", color: "#07bfde" }}>Our</span>{" "}
                Partners
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={0.5}>
              {partnersData.map((item) => (
                <Grid key={item.id} item xs={3} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                      justifyContent: 'center',
                      height: "100%",
                    }}
                  >
                   <Box component="img" src={item.Image} alt="partners" width={{xs:'100%',md:'60%',lg:'70%'}} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners;
