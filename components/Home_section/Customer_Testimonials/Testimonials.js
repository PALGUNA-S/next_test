import { Box, Card, CardContent, Container, Grid, Typography, } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const teamData = [
  {
    id: 1,
    text: "“As an MSME, every penny counts. We don’t always have the time to keep negotiating for better rates with our RM. LeRemitt has been a huge revelation for us and we’ve been able to save so much more.”",
    title: "–An MSME Service Exporter",
  },
  {
    id: 2,
    text: "“Their very helpful Customer Success team has given us assistance with documentation which ensures that Im always compliant with regulations. Their online tracker of transaction is very useful. No longer do I need to worry about when will the payment hit my bank account. I can plan my finances better!”",
    title: "–An MSME Goods Exporter",
  },
  {
    id: 3,
    text: "“Being a very small business in technology services, we understand how powerful tech can be in saving money and LeRemitt has proven to be a right blend of a finance and a tech platform – we save more and receiving money hasn’t been this efficient before.” ",
    title: "–A software service Exporter",
  },
];

const Testimonials = () => {
  return (
    <Box py={{xs:6,md:10,lg:12,}} sx={{
      backgroundImage: `url('/assets/About_section/CoreTeam_bg.svg')`,
      backgroundColor: '#0f55a2',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
    }}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Box>
              <Typography pb={1} variant="h2" sx={{ fontWeight: "600", fontSize: '2.25rem' }} >
                Customer Testimonials
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box pt={6} pb={4} fontStyle={"italic"}>
          <div style={{ marginTop: "25px" }}>
            <Splide
              options={{
                perPage: 2,
                gap: 16,
                type: "loop",
                interval: 8000,
                autoplay: true,
                breakpoints: {
                  1280: {
                    perPage: 2, // Large screens (1280px and above)
                  },
                  960: {
                    perPage: 1, // Medium screens (960px - 1279px)
                  },
                  600: {
                    perPage: 1, // Small screens (600px - 959px)
                  },
                  599: {
                    perPage: 1, // Extra small screens (0px - 599px)
                  },
                },
              }}
            >
              {teamData.map((item) => (
                <SplideSlide key={item.id}>
                  <Card
                    sx={{
                      background: "#ebfaff",
                      display: "flex",
                      height: "100%",
                      flexDirection: "column",
                      border: "none",
                      boxShadow: "none",
                      borderRadius: "0",
                      transition: "background-color 0.8s, color 0.9s",
                      "&:hover": {
                        backgroundColor: "#142d82",
                        color: "white",
                      },
                    }}
                  >
                    <CardContent style={{ flexGrow: 1 }} sx={{ paddingBottom: "0" }}>
                      <Typography variant="body1" fontSize={'1.3rem'}>{item.text}</Typography>
                    </CardContent>
                    <CardContent sx={{ paddingTop: "0" }}>
                      <Typography textAlign="right" variant="body1" fontSize="1.8rem">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
