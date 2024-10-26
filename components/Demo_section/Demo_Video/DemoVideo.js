import { Box, Container, Grid, Skeleton, Stack, Typography } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";


const DemoVideo = () => {
  const videoUrl = `https://www.youtube.com/embed/56jlqLNrDqM?si=0zqjaRomJeqTXKt7&rel=0`;
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoSchema = {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "name": "LeRemitt Demo",
    "description": "Experience an exclusive demonstration showcasing the seamless process of user registration and the initiation of successful transactions on our platform.",
    "thumbnailUrl": "https://i.ytimg.com/vi/56jlqLNrDqM/default.jpg",
    "uploadDate": "2024-01-15T06:43:00Z",
    "duration": "PT1M59S",
    "embedUrl": "https://www.youtube.com/embed/56jlqLNrDqM",
    "interactionCount": "652"
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      </Head>

      <Box py={10} sx={{ background: "#e8f8fa" }}>
        <Container>
          <Box textAlign={"center"} pt={4} pb={{ xs: 2, sm: 4, md: 6 }}>
            <Typography variant="h1" fontSize={'2.25rem'} sx={{ fontWeight: "600", color: "#2645af" }}>
              Watch <span style={{ color: "#00b8d4" }}>Demo</span>
            </Typography>
          </Box>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12}>
              <Box>
                {!videoLoaded && (
                  <Stack direction={'row'} justifyContent={'center'}>
                    <Skeleton variant="rectangular" animation="wave" width={800} height={400} />
                  </Stack>
                )}
                <Stack direction={'row'} justifyContent={'center'}>
                  <iframe width={800} height={400}
                    src={videoUrl}
                    title="YouTube video player"
                    onLoad={handleVideoLoad}
                    style={{ display: videoLoaded ? "block" : "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DemoVideo;
