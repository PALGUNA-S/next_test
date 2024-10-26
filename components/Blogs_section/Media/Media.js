import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography, Box, Button, Stack, Skeleton, } from "@mui/material";
import data from "./data";
import { Link } from "react-router-dom";
import "./Media.css";


const Media = () => {
  const [visibleCards, setVisibleCards] = useState(6); // Number of cards to initially display
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3); // Increase the number of visible cards by 3
  };

  const filterDataByCategory = (category) => {
    if (category === "all") {
      return data;
    } else {
      return data.filter((item) => item.category === category);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCards(6);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="Bmedia">
      <Typography pb={1} variant="h1" sx={{ fontWeight: "600", fontSize: '2.25rem' }} >
        Blogs
      </Typography>
      <Stack direction={"row"} spacing={1} pb={2}>
        <Button
          onClick={() => handleCategoryChange("all")}
          sx={{
            borderRadius: '0',
            textTransform: 'none',
            fontSize: "1rem",
            color: '#142d82',
            borderBottom: selectedCategory === "all" ? "2px solid #142d82" : "none",
            "&:hover": {
              backgroundColor: 'transparent',
            },
          }}
        >
          All Blogs <img src={'https://www.leremitt.com/Images/Reusable-section/menu+button+arrow.svg'} alt="menu" style={{ paddingLeft: '1rem', visibility: selectedCategory === "all" ? "visible" : "hidden" }} />
        </Button>
        {/* <Button
          onClick={() => handleCategoryChange("article")}
          sx={{
            borderRadius:'0',
            textTransform:'none',
            fontSize: "1rem",
            color:'#142d82',
            borderBottom: selectedCategory === "article" ? "2px solid #142d82": "none",
            "&:hover": {
              backgroundColor: 'transparent',
            },
          }}
        >
          Article <img src={MenuArrow} alt="menu" style={{paddingLeft:'1rem', visibility: selectedCategory === "article" ? "visible" : "hidden" }}/>
        </Button> */}
        <Button
          onClick={() => handleCategoryChange("founder")}
          sx={{
            borderRadius: '0',
            textTransform: 'none',
            fontSize: "1rem",
            color: '#142d82',
            borderBottom: selectedCategory === "founder" ? "2px solid #142d82" : "none",
            "&:hover": {
              backgroundColor: 'transparent',
            },
          }}
        >
          Founders Desk <img src={'https://www.leremitt.com/Images/Reusable-section/menu+button+arrow.svg'} alt="menu" style={{ paddingLeft: '1rem', visibility: selectedCategory === "founder" ? "visible" : "hidden" }} />
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {filterDataByCategory(selectedCategory)
          .slice(0, visibleCards)
          .map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={data.link}>
                {loading ? (
                  <Card sx={{ border: "none", boxShadow: "none", borderRadius: 0, height: "100%", display: 'flex', flexDirection: 'column' }}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "210px",
                        borderRadius: "0",
                        backgroundColor: "#647ac3",
                        opacity: "0.4",
                      }}
                      animation="wave"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Skeleton
                        variant="text"
                        sx={{ backgroundColor: "#647ac3", opacity: "0.4", height: "2rem" }}
                        animation="wave"
                      />
                      <Skeleton
                        variant="text"
                        sx={{ backgroundColor: "#647ac3", opacity: "0.4", height: "2rem" }}
                        animation="wave"
                      />
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <Card
                      sx={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: 0,
                        height: "100%",
                        transition: "background-color 0.8s, color 0.9s",
                        "&:hover": {
                          backgroundColor: "#142d82",
                          color: "white",
                        },
                      }}
                    >
                      <CardMedia component="img" alt={data.alt} image={data.img} sx={{ overflow: "hidden", transition: "transform 1.2s", "&:hover": { transform: "scale(1.1)", }, }} />

                      <CardContent sx={{ paddingBottom: "1px" }}>
                        <Typography variant="h6" fontWeight={500}>
                          {data.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                )}
              </Link>
            </Grid>
          )
          )}
      </Grid>
      {/* {visibleCards < data.length && (  */}
      <Grid container>
        <Grid item xs={12} >
          <Box pt={5} sx={{ display: "flex", justifyContent: 'center' }}>
            {visibleCards < filterDataByCategory(selectedCategory).length && (
              <Button
                size="large"
                variant="contained"
                sx={{
                  width: { xs: '50%', sm: '30%', lg: '20%' },
                  background: "#142d82",
                  color: "white",
                  fontSize: "1.3rem",
                  margin: "10px",
                  fontWeight: "400",
                  boxShadow: "none",
                  textTransform: "capitalize",
                  padding: "6px 22px",
                  marginLeft: "10px",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#2645af",
                    boxShadow: "none",
                  },
                }}
                onClick={handleLoadMore}
              >
                Load&nbsp; <span style={{ color: "#07bfde" }}> More</span>
              </Button>
            )}
          </Box>

          {/* <Box sx={{ display: "flex", justifyContent: 'center' }} mt={1}>
            <Button
              variant="contained"
              endIcon={<img src={HereArrowBtn2} alt="HereArrowBtn" />}
              sx={{
                width: { xs: '50%', sm: '30%', lg: '20%' },
                "&:hover": {
                  backgroundColor: "#2645af",
                  boxShadow: "none",
                },
                boxShadow: "none",
                borderRadius: 0,
                background: "#142d82",
                color: "#fff",
                fontWeight: "400",
                padding: "6px 22px",
                fontSize: "1.3rem",
                justifyContent: "space-between",
                textTransform: "none",
              }}
              onClick={handleLogin}
            >
              Register Now
            </Button>
          </Box> */}
        </Grid>
      </Grid>
    </section >
  );
};

export default Media;
