import { Grid, Typography, Box, Container, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import FcyData from "./FcyData";
import { app_url } from "../../../../config/config";
import getUtmParams from "../../../utils/utmParams";

const handleLogin = () => {
  let utm_params = getUtmParams()
  window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
}

const MobFcy = () => {
  const [selectedTitle, setSelectedTitle] = useState(FcyData.title[0].id);
  const [selectedImage, setSelectedImage] = useState(FcyData.images[0].id);
  const [textContainerStyle, setTextContainerStyle] = useState({
    opacity: 1,
  });

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
    setSelectedTitle(FcyData.title[0].id);
    setSelectedImage(FcyData.images[0].id);
  }, []);

  return (
    <section
    style={{
      backgroundImage: `url('/assets/ProductServices_section/Fcy_bg.svg')`,
      backgroundColor: '#FFFF',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",position:'relative'
    }}>
      <Container sx={{ height: { sm: "70vh" } }}>
        <Box pb={{ md: 4, lg: 4 }}>
          <Typography
            pb={1}
            variant="h2" fontSize={'1.2rem'}
            sx={{
              fontWeight: "600",
            }}
          >
            Product & Services
          </Typography>
          <Typography
            variant="h3" fontSize={'2.2rem'}
            pb={{ xs: 2, lg: 0 }}
            sx={{ fontWeight: "500", color: "#18c3d6" }}
          >
            Global Foreign Currency Account
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {FcyData.title.map((titleItem) => (
                <div key={titleItem.id} style={{ display: "flex" }}>
                  <img src={titleItem.logo} alt="logo" />
                  <Typography
                    variant="body1"
                    pt={1.2}
                    pl={1}
                    onClick={() => handleTitleClick(titleItem.id)}
                    sx={{
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight: "600",
                      color:
                        selectedTitle === titleItem.id
                          ? "#18c3d6"
                          : "#515151d6",
                      transition: "color 0.5s ease-in-out",
                    }}
                  >
                    {titleItem.title}
                  </Typography>
                </div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              pb={{ xs: 25, sm: 0 }}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                flexDirection: 'column',
                transition: "opacity 0.5s ease-in-out",
                ...textContainerStyle,
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "2" }}
                >
                  {selectedTitle &&
                    FcyData.text.find((textItem) => textItem.id === selectedTitle)
                      ?.text}
                </Typography>
              </Box>

              <Box width={{ xs: '70%', sm: '60%' }} mt={3}>
                <Button
                  variant="contained"
                  endIcon={<img src='/Assets/Reusable_section/Button_Icon_01.svg' alt="Button_Icon_01" />}
                  sx={{
                    width: '100%',
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
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={1}>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                opacity: textContainerStyle.opacity,
                transform: `translateX(${textContainerStyle.opacity === 1 ? 0 : -50
                  }%)`,
              }}
            >
              <Box
                sx={{
                  minHeight: "240px",
                  maxHeight: "240px",
                  display: "flex",
                  justifyContent: "start",
                  transition:
                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                  opacity: selectedImage ? 1 : 0,
                  transform: `translateX(${selectedImage ? 0 : 50}%)`,
                }}
              >
                {FcyData.images.map((imagesItem) => (
                  <React.Fragment key={imagesItem.id}>
                    {selectedImage === imagesItem.id && (
                      <img
                        src={imagesItem.imgone}
                        alt="img"
                        style={{ width: "290px" }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default MobFcy;
