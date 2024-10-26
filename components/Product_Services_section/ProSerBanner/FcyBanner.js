import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const FcyBanner = () => {
  return (
    <Box py={{ xs: 10, md: 14 }} sx={{
      backgroundImage: `url('/assets/ProductServices_section/Fcy_section/FcyBanner_bg.svg')`,
      backgroundColor: '#0094af',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
    }}>
      <Container>
        <Grid
          container
          style={{ display: "flex", justifyContent: "end", color: "white" }}
        >
          <Grid item sm={6} lg={5}>
            <Box>
              <Typography variant="h2" fontSize={'2.25rem'} fontWeight={500}>
                Global Foreign Currency
                <br /> Account{" "}
                <span style={{ color: "black", fontWeight: "600" }}>(FCY)</span>
              </Typography>
              <Typography pt={2} variant="body1" fontSize={'1.2rem'}>
                We are dedicated to provide our Global MSMEs with a game-changing
                solutions designed to streamline the way you receive funds from
                international buyers or remitters. Our Global Foreign Currency
                Account (FCY) offers a seamless and efficient transaction
                experience, making cross-border trade more accessible and
                cost-effective than ever before.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FcyBanner;
