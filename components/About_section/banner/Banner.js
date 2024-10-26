import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AboutBanner from '../../../public/assets/About_section/About_Banner_bg.svg'

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="banner"
      style={{
        backgroundImage: `url(${AboutBanner.src})`,
        backgroundColor: '#0f55a2',
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}>
      <Container>
        <Grid container>
          <Grid item sm={9} md={6}>
            <Box pt={9}>
              {loading ? (
                <Box>
                  <Skeleton variant="text" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", width: { xs: 320, md: 600 }, height: { xs: 50, lg: 34 } }} animation="wave" />
                  <Skeleton variant="text" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", width: { xs: 200, md: 300 }, height: { xs: 50, lg: 34 } }} animation="wave" />
                </Box>
              ) : (
                <Typography variant="h1" fontSize={{ xs: '2rem', md: '2.25rem' }} fontWeight={500} color={"white"}>
                  LeRemitt is a
                  <span style={{ color: "#00e5ff", fontWeight: "400" }}>
                    {" "}
                    Cross Border Platform{" "}
                  </span>
                  to serve the needs of{" "}
                  <span style={{ color: "#00e5ff", fontWeight: "400" }}>
                    MSMEs
                  </span>{" "}
                  in International Trade
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
