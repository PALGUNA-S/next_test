import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const InwardBanner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box pt={12} pb={10} sx={{
      backgroundImage: `url('/Assets/ProductServices_section/InwardRemittance_section/InwardBanner_bg.svg')`,
      backgroundColor: '#0f55a2',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
    }}>
      <Container>
        <Grid container>
          <Grid item sm={6} lg={5}>
            <Box pt={4}>
              {loading ? (
                <>
                  <Skeleton variant="text" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", width: { xs: 320, md: 600 }, height: { xs: 50, sm: 34 } }} animation="wave" />
                  <Skeleton variant="text" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", width: { xs: 200, md: 300 }, height: { xs: 50, sm: 34 } }} animation="wave" />
                  <Skeleton variant="text" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", width: { xs: 320, md: 600 }, height: { xs: 177, md: 150, lg: 130 } }} animation="wave" />
                </>
              ) : (
                <>
                  <Typography variant="h1" fontSize={'2.25rem'} fontWeight={500} color={"white"}>
                    Seamless{" "}
                    <span style={{ color: "#07bfde", fontWeight: 400 }}>
                      Inward Remittance
                    </span>{" "}
                    services for your Business
                  </Typography>
                  <Typography variant="body1" color={'white'} fontSize={'1.2rem'} pt={2}>
                    At LeRemitt, we specialize in offering efficient and
                    cost-effective inward remittance services tailored exclusively to
                    business customers. We understand the unique financial needs and
                    priorities of businesses operating on a global scale, and our
                    platform is designed to meet those demands seamlessly.
                  </Typography>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InwardBanner;
