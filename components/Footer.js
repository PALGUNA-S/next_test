import { Box, CardContent, Container, Grid, List, ListItem, Modal, Typography, useMediaQuery, } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 4,
};

const Footer = () => {

  const [openwtsp, setOpenWtsp] = useState(false);
  const handleOpenwtsp = () => setOpenWtsp(true);
  const handleCloseWtsp = () => setOpenWtsp(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box pt={{ xs: 6, sm: 10, md: 14 }} sx={{
      backgroundImage: `url(/assets/Reusable_section/Footer_bg.svg)`,
      backgroundColor: '#e1f4f7',
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
    }} >
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4} md={3}>
            {/* Card 1 */}
            <Box pb={3}>
              <img src={'/Assets/Reusable_section/LeRemitt_logo_Re.svg'} alt="logo" style={{ width: "200px", cursor: "pointer" }} onClick={scrollToTop} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={8} md={9}>
            <Grid container>
              {/* Card 2 */}
              <Grid item xs={6} sm={4}>
                <CardContent sx={{ padding: "0" }}>
                  <Typography fontSize={'1.3rem'} fontWeight={"700"}>
                    Company
                  </Typography>
                  <List>
                    {footerData.company.map((item) => (
                      <ListItem key={item.id} sx={{ padding: "3px" }}>
                        <Link
                          href={item.link}
                          color="inherit"
                          underline="none"
                          style={{ paddingBottom: "8px" }}
                        >
                          {item.title}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Grid>

              {/* Card 3 */}
              <Grid item xs={6} sm={4}>
                <CardContent sx={{ padding: "0" }}>
                  <Typography fontSize={'1.3rem'} fontWeight={"700"}>
                    Support
                  </Typography>
                  <List>
                    {footerData.support.map((item) => (
                      <ListItem key={item.id} sx={{ padding: "3px" }}>
                        <Link
                          href={item.link}
                          color="inherit"
                          underline="none"
                          style={{ paddingBottom: "8px" }}
                        >
                          {item.title}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Grid>

              {/* Card 4 */}
              <Grid item xs={6} sm={4}>
                <CardContent sx={{ padding: "0" }}>
                  <Typography fontSize={'1.3rem'} fontWeight={"700"}>
                    Follow Us
                  </Typography>
                  <List>
                    {footerData.follow.map((item) => (
                      <ListItem key={item.id} sx={{ padding: "3px" }}>
                        {!isMobile && item.title === "WhatsApp" ? (
                          <a
                            onClick={handleOpenwtsp}
                            color="inherit"
                            variant="text"
                            style={{ paddingBottom: "8px", cursor: 'pointer' }}
                          >
                            {item.title}
                          </a>
                        ) :
                          (
                            <Link
                              href={item.link}
                              color="inherit"
                              underline="none"
                              target="_blank"
                              style={{ paddingBottom: "8px" }}
                            >
                              {item.title}
                            </Link>
                          )}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Modal
                  open={openwtsp}
                  onClose={handleCloseWtsp}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Container sx={style}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box pr={1}>
                        <Typography variant="h5">
                          LeRemitt's{" "}
                          <span style={{ color: "#25d366", fontWeight: "500" }}>
                            WhatsApp
                          </span>{" "}
                          Bot
                        </Typography>
                        <Typography
                          sx={{ opacity: "0.7" }}
                          border={1}
                          borderColor={"#25d366"}
                        ></Typography>
                        <Typography
                          sx={{ mt: 1.2, fontSize: "1.2rem", textAlign: "justify" }}
                        >
                          Scan the QR code to access our WhatsApp feature. Please enter
                          <span style={{ color: "#25d366", fontWeight: "500" }}>
                            {" "}
                            "Hi"
                          </span>{" "}
                          in your mobile to start the conversation with our bot.
                        </Typography>
                      </Box>

                      <Box>
                        <img src={'https://www.leremitt.com/Images/Reusable-section/wtsp1.png'} alt="QrCode" />
                      </Box>
                    </Box>
                  </Container>
                </Modal>
              </Grid>

              {/* Card 5 */}
              <Grid item xs={6} sm={4}>
                <CardContent sx={{ padding: "0" }}>
                  <Typography fontSize={'1.3rem'} fontWeight={"700"}>
                    Learn
                  </Typography>
                  <List>
                    {footerData.about.map((item) => (
                      <ListItem key={item.id} sx={{ padding: "3px" }}>
                        <Link
                          href={item.link}
                          color="inherit"
                          underline="none"
                          style={{ paddingBottom: "8px" }}
                        >
                          {item.title}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Grid>

              {/* Card 6 */}
              <Grid item xs={6} sm={4}>
                <CardContent sx={{ padding: "0" }}>
                  <List>
                    {footerData.privacy.map((item) => (
                      <ListItem key={item.id} sx={{ padding: "3px" }}>
                        <Link
                          href={item.link}
                          color="inherit"
                          underline="none"
                          style={{ paddingBottom: "8px" }}
                          // rel="noopener noreferrer"
                          target="_blank"
                        >
                          {item.title}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  pb={1}
                  pt={{ xs: 3, md: 8 }}
                  fontWeight={400}
                >
                  © 2023 LeRemitt. All Rights Reserved
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

const footerData = {
  company: [
    { id: 1, link: "/about", title: "About Us", },
    { id: 2, link: "/accept-international-payments-for-businesses", title: "Product & Services", },
  ],
  support: [
    { id: 1, link: "/faqs", title: "FAQs", },
    { id: 2, link: "/leconnect", title: "LeConnect", },
  ],
  follow: [
    { id: 1, link: "https://www.facebook.com/profile.php?id=61553149285914", title: "Facebook", },
    { id: 2, link: "https://www.instagram.com/leremitt_com/", title: "Instagram", },
    { id: 3, link: "https://x.com/leremitt?s=11", title: "Twitter", },
    { id: 4, link: "https://www.linkedin.com/company/leremit/", title: "LinkedIn", },
    { id: 5, link: "https://wa.me/918050087593?text=Hello%20How%20can%20I%20help%20you%20?", title: "WhatsApp", },
  ],
  about: [
    { id: 1, link: "/blogs", title: "Blogs", },
    { id: 2, link: "/demo", title: "Demo", },
  ],
  privacy: [
    { id: 1, link: "/Images/leremitt-privacy-policy.pdf", title: "Privacy Policy", },
    { id: 2, link: "/Images/leremitt-terms-and-Conditions.pdf", title: "Terms & Conditions", },
    { id: 3, link: "/Images/xflow-tos.pdf", title: "Xflow Terms of Service", },
  ],
};