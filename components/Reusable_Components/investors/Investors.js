import React from "react";
import { Container, Grid, Typography, Box, Stack } from "@mui/material";

const investorsData = [
  {
    id: 1,
    Image: '/Assets/Reusable_section/Axilor_Logo.png',
  },
  {
    id: 2,
    Image: '/Assets/Reusable_section/Capital_A_Logo.png',
  },
];

const Investors = () => {
  return (
    <Box py={{xs:4,md:6,lg:8,}} sx={{
      backgroundImage: `url(/Assets/Reusable_section/Investors_bg.svg)`,
      backgroundColor: '#eef2ff',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
    }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction={'row'} alignItems={'center'} minHeight={'100%'}>
              <Typography variant="h2" sx={{ fontWeight: "600", fontSize: '2.25rem' }}>
                We are backed by  <span style={{ fontWeight: "500", color: "#07bfde" }}>marquee Investors</span>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container >
              {investorsData.map((item, index) => (
                <Grid key={item.id} item xs={6}>
                  <Box sx={{ display: "flex", justifyContent: index % 2 === 0 ? "center" : "space-around", height: "100%", }} >
                     <Box component="img" src={item.Image} alt="Investors_Logo" width={{xs:'50%',sm:'50%',md:'60%',lg:'70%'}} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
};

export default Investors;
