
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import InwardData from "./InwardRemittanceData";
import { app_url } from "../../../../config/config";
import getUtmParams from "../../../utils/utmParams";

const InwardRemittance = () => {
  const [selectedTitle, setSelectedTitle] = useState(InwardData.title[0].id);
  const [selectedImage, setSelectedImage] = useState(InwardData.images[0].id);
  const [textContainerStyle, setTextContainerStyle] = useState({
    opacity: 1,
  });

  const handleLogin = () => {
    let utm_params = getUtmParams()
    window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
  }

  const handleTitleClick = (id) => {
    if (id === selectedTitle) {
      return;
    }

    setTextContainerStyle({
      opacity: 0,
    });

    setTimeout(() => {
      setSelectedTitle(id);
      setSelectedImage(id);
      setTextContainerStyle({
        opacity: 1,
      });
    }, 450);
  };

  useEffect(() => {
    setSelectedTitle(InwardData.title[0].id);
    setSelectedImage(InwardData.images[0].id);
  }, []);

  return (
    <section
    style={{
      backgroundImage: `url('/Assets/ProductServices_section/InwardBanner_bg.svg')`,
      backgroundColor: '#e6ecff',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",position:'relative'
    }}>
      <Container>
        <Box pb={2}>
          <Typography variant="h2" fontSize={'1.2rem'} pb={1} fontWeight={600}>
            Product & Services
          </Typography>
          <Typography
            variant="h3" fontSize={'2.2rem'}
            pb={{ xs: 2, lg: 0 }}
            sx={{ fontWeight: "500", color: "#2645af" }}
          >
            Inward Remittance
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 0 }}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {InwardData.title.map((titleItem) => (
                <div key={titleItem.id} style={{ display: "flex" }}>
                  <img src={titleItem.logo} alt="logo" />
                  <Typography
                    pt={1.2}
                    pl={1}
                    variant="body1"
                    onClick={() => handleTitleClick(titleItem.id)}
                    sx={{
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight:
                        selectedTitle === titleItem.id ? "600" : "400",
                      color:
                        selectedTitle === titleItem.id ? "#2645af" : "black",
                      transition:
                        "opacity 0.7s ease-in-out, transform 0.5s ease-in-out",
                    }}
                  >
                    {titleItem.title}
                  </Typography>
                </div>
              ))}
            </Box>

            <Box>
              <Button
                variant="contained"
                endIcon={<img src='/Assets/Reusable_section/Button_Icon_02.svg' alt="Button_Icon_02" />}
                sx={{
                  width: '92%',
                  "&:hover": {
                    backgroundColor: "#2645af",
                    boxShadow: "none",
                  },
                  boxShadow: "none",
                  borderRadius: 0,
                  background: "#142d82",
                  color: "#fff",
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
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "opacity 0.5s ease-in-out",
                ...textContainerStyle,
              }}
            >
              <Typography
                pr={2}
                variant="body1"
                sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "2" }}
              >
                {selectedTitle &&
                  InwardData.text.find(
                    (textItem) => textItem.id === selectedTitle
                  )?.text}
              </Typography>
            </Box>
          </Grid>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transition: "opacity 0.5s ease-in-out, transform 1s ease-in-out",
              opacity: textContainerStyle.opacity,
              transform: `translateX(${textContainerStyle.opacity === 1 ? 0 : 50
                }%)`,
            }}
          >
            <Box
              sx={{
                minHeight: "340px",
                maxHeight: "340px",
                display: "flex",
                justifyContent: "end",
                transition:
                  "opacity 0.5s ease-in-out, transform 1s ease-in-out",
                opacity: selectedImage ? 1 : 0,
                transform: `translateX(${selectedImage ? 0 : 50}%)`,
              }}
            >
              {InwardData.images.map((imagesItem) => (
                <React.Fragment key={imagesItem.id}>
                  {selectedImage === imagesItem.id && (
                    <img
                      src={imagesItem.imgone}
                      alt="img"
                      style={{ width: "56%" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};
export default InwardRemittance;
