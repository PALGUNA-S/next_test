import React from "react";
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography, useMediaQuery, useTheme, } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Link from "next/link";

const cardStyle = {
  border: "none",
  boxShadow: "none",
  position: "relative",
};

const buttonStyle = {
  position: "absolute",
  bottom: "10px",
  left: "10px",
  fontSize: "16px",
  color: "#84ffff",
  fontWeight: "400",
};

const Media = ({ image, data }) => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section
      id="media"
      style={{
        background: `url('/assets/Reusable_section/We_are_in_media_bg.svg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <Container>
        <Typography pb={3} variant="h2" fontSize={'2.25rem'} sx={{ fontWeight: "600" }}>
          {data[0].heading}
        </Typography>

        <Grid container spacing={isMdScreen ? 2 : 10}>
          {data.map((data, index) => (
            <Grid item sm={6} ms={6} lg={6} key={index}>
              <Card
                style={{
                  ...cardStyle,
                  borderRadius: 0,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* <img src={data.logonews} alt="img" style={{ paddingBottom: "10px" }} /> */}
                  <Typography
                    gutterBottom
                    variant="body1"
                    fontSize={"1.4rem"}
                    sx={{
                      color: "#00b8d4",
                      fontWeight: "500",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={"1.1rem"}
                    fontWeight={400}
                  >
                    {data.text}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={"1.1rem"}
                    fontWeight={400}
                    paddingTop={"10px"}
                  >
                    {data.text2}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={data.img}
                />

                <Button
                  style={buttonStyle}
                  size="large"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                  }}
                >
                  <TrendingFlatIcon sx={{ mr: 1, ml: 1 }} />{" "}
                  {data.redirect ? (
                    <Link href={data.link} target="_blank">
                      Read More
                    </Link>
                  ) : (
                    <Link href={data.link}>Read More</Link>
                  )}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Media;
