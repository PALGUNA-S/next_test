import React, { useState, useEffect } from "react";
import styles from './MobLrWork.module.css'
import { Box, Container, Grid, Typography, Modal, Button } from "@mui/material";

const MobLrWork = () => {
  const videoUrl = `https://www.youtube.com/embed/56jlqLNrDqM?si=0zqjaRomJeqTXKt7&rel=0`;
  const [currentItem, setCurrentItem] = useState("mobitem");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [activeItem, setActiveItem] = useState("mobitem");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseEnter = (mobitem) => {
    setIsMouseOver(true);
    setCurrentItem(mobitem);
    setActiveItem(mobitem);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        if (currentItem === "mobitem") {
          setCurrentItem("mobitem_2");
          setActiveItem("mobitem_2"); // Set active item
        } else if (currentItem === "mobitem_2") {
          setCurrentItem("mobitem_3");
          setActiveItem("mobitem_3"); // Set active item
        } else if (currentItem === "mobitem_3") {
          setCurrentItem("mobitem");
          setActiveItem("mobitem"); // Set active item
        }
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentItem, isMouseOver]);

  return (
    <section id="lrworks" className={styles.lrworks}>
      <Container>
        <Grid>
          <Typography
            variant="h4"
            sx={{
              paddingBottom: "10px",
              fontWeight: "500",
              textAlign: "center",
              // color: "#2645af",
            }}
          >
            Platform in <span style={{ color: "#00b8d4" }}>3 easy steps</span>
          </Typography>
          {/* Add the underline element with a dynamic style */}
          <div className={styles.centeredDiv}>
            <div className={styles.underlineMain}>
              <div
                className={styles.underline}
                style={{ left: activeItem === "item" ? "0" : activeItem === "item_2" ? "33.3%" : "66.6%", }}
              ></div>
            </div>
          </div>

          <Box pt={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "0",
                border: "none",
                background: "#00d4ff1a",
                textTransform: "capitalize",
                padding: "0.5rem 2rem",
                "&:hover": {
                  boxShadow: "none",
                  border: "none",
                },
              }}
            >
              <img
                className={styles.Menuarrow}
                src={'/Assets/Reusable_section/Button_Icon_03.svg'}
                alt="Button_Icon_03"
                style={{ paddingRight: "5px" }}
              />
              <Typography
                variant="h5"
                onClick={handleOpen}
                sx={{ fontWeight: "500", color: "#2645af", cursor: "pointer" }}
              >
                Watch Demo
              </Typography>
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                p={{ xs: 1, sm: 2, md: 3 }}
              >
                <iframe
                  className={styles.demovideo}
                  src={videoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
            </Modal>
          </Box>

          <Grid item xs={12} className={styles.mobhoney}>
            <Box className={styles.mobcomb_1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Box
                  className={styles.mobitemMain}
                  onMouseEnter={() => handleMouseEnter("mobitem")}
                  onMouseLeave={handleMouseLeave}
                  style={{ flexDirection: "column", padding: "5px" }}
                >
                  <img
                    src={'/assets/Home_section/Registration_Logo.svg'}
                    alt="Registration_Logo"
                    width={"30%"}
                    style={{ paddingBottom: "4px" }}
                  />
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "300",
                    }}
                  >
                    Registration
                  </Typography>
                  <Typography
                    className={styles.maincombnum}
                    variant="h5"
                    sx={{ color: "#39d7ea", fontWeight: "500" }}
                  >
                    1
                  </Typography>
                </Box>
                <Box
                  ml={0.4}
                  style={{ flexDirection: "column", padding: "10px" }}
                  className={`${styles.mobitem} ${currentItem === "mobitem" ? "" : styles.hidden}`}
                >
                  <Typography
                    className={styles.combnum}
                    variant="h5"
                    pt={1}
                    sx={{ fontWeight: "500" }}
                  >
                    1
                  </Typography>
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "500",
                      paddingBottom: "20px",
                      lineHeight: "17px",
                    }}
                  >
                    Input your mobile/email id.
                  </Typography>
                </Box>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "8.9rem",
                }}
              >
                <Box
                  style={{ flexDirection: "column", padding: "10px" }}
                  className={`${styles.mobitem} ${currentItem === "mobitem" ? "" : styles.hidden}`}
                >
                  <Typography
                    className={styles.combnum}
                    variant="h5"
                    pt={1}
                    sx={{ fontWeight: "500" }}
                  >
                    3
                  </Typography>
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "500",
                      paddingBottom: "20px",
                      lineHeight: "17px",
                    }}
                  >
                    Login to Dashboard.
                  </Typography>
                </Box>
                <div>
                  <Box
                    ml={0.4}
                    style={{ flexDirection: "column", padding: "10px" }}
                    className={`${styles.mobitem} ${currentItem === "mobitem" ? "" : styles.hidden}`}
                  >
                    <Typography
                      className={styles.combnum}
                      variant="h5"
                      pt={1}
                      sx={{ fontWeight: "500" }}
                    >
                      2
                    </Typography>
                    <Typography
                      className={styles.mobcombtext}
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        fontWeight: "500",
                        paddingBottom: "20px",
                        lineHeight: "17px",
                      }}
                    >
                      Verify displayed information.
                    </Typography>
                  </Box>

                  {currentItem === "mobitem" ? null : (
                    <Box className={styles.mobitemNullOne}></Box>
                  )}
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Grid item className={styles.mobcomb_2}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Box
                  mr={0.4}
                  style={{ flexDirection: "column", padding: "10px" }}
                  className={`${styles.mobitem_2} ${currentItem === "mobitem_2" ? "" : styles.hidden}`}
                >
                  <Typography
                    className={styles.combnum}
                    variant="h5"
                    pt={1}
                    sx={{ fontWeight: "500" }}
                  >
                    1
                  </Typography>
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "500",
                      paddingBottom: "20px",
                      lineHeight: "17px",
                    }}
                  >
                    Complete your profile.
                  </Typography>
                </Box>
                <Box
                  className={styles.mobitemMainTwo}
                  onMouseEnter={() => handleMouseEnter("mobitem_2")}
                  onMouseLeave={handleMouseLeave}
                  style={{ flexDirection: "column" }}
                >
                  <img
                    src={'/assets/Home_section/Kyc_Logo.svg'}
                    alt="Kyc_Logo"
                    width={"20%"}
                    style={{ paddingBottom: "4px" }}
                  />
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "300",
                    }}
                  >
                    KYC
                  </Typography>
                  <Typography
                    className={styles.maincombnum}
                    variant="h5"
                    sx={{ color: "#39d7ea", fontWeight: "500" }}
                  >
                    2
                  </Typography>
                </Box>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "8.9rem",
                }}
              >
                <div>
                  <Box
                    mr={0.4}
                    style={{ flexDirection: "column", padding: "10px" }}
                    className={`${styles.mobitem_2} ${currentItem === "mobitem_2" ? "" : styles.hidden}`}
                  >
                    <Typography
                      className={styles.combnum}
                      variant="h5"
                      pt={1}
                      sx={{ fontWeight: "500" }}
                    >
                      2
                    </Typography>
                    <Typography
                      className={styles.mobcombtext}
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        fontWeight: "500",
                        paddingBottom: "20px",
                        lineHeight: "17px",
                      }}
                    >
                      Add required details.
                    </Typography>
                  </Box>

                  {currentItem === "mobitem_2" ? null : (
                    <Box className={styles.mobitemNullTwo}></Box>
                  )}
                </div>

                <Box
                  style={{ flexDirection: "column", padding: "10px" }}
                  className={`${styles.mobitem_2} ${currentItem === "mobitem_2" ? "" : styles.hidden}`}
                >
                  <Typography
                    className={styles.combnum}
                    variant="h5"
                    pt={1}
                    sx={{ fontWeight: "500" }}
                  >
                    3
                  </Typography>
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "500",
                      paddingBottom: "20px",
                      lineHeight: "17px",
                    }}
                  >
                    Submit for account activation.
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid item className={styles.mobcomb_3} style={{ marginTop: "-2.2rem" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Box
                  className={styles.mobitemMainThree}
                  onMouseEnter={() => handleMouseEnter("mobitem_3")}
                  onMouseLeave={handleMouseLeave}
                  style={{ flexDirection: "column" }}
                >
                  <img
                    src={'/assets/Home_section/Receive_Money_Logo.svg'}
                    alt="Receive_Money_Logo"
                    width={"40%"}
                    style={{ paddingBottom: "4px" }}
                  />
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "300",
                    }}
                  >
                    Receive Money
                  </Typography>
                  <Typography
                    className={styles.maincombnum}
                    variant="h5"
                    sx={{ color: "#39d7ea", fontWeight: "500" }}
                  >
                    3
                  </Typography>
                </Box>
                <Box
                  ml={0.4}
                  style={{ flexDirection: "column", padding: "10px" }}
                  className={`${styles.mobitem_3} ${currentItem === "mobitem_3" ? "" : styles.hidden}`}
                >
                  <Typography
                    className={styles.combnum}
                    variant="h5"
                    pt={1}
                    sx={{ fontWeight: "500" }}
                  >
                    1
                  </Typography>
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "500",
                      paddingBottom: "20px",
                      lineHeight: "17px",
                    }}
                  >
                    Input Remitter details
                  </Typography>
                </Box>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "8.9rem",
                }}
              >
                <Box
                  style={{ flexDirection: "column", padding: "10px" }}
                  className={`${styles.mobitem_3} ${currentItem === "mobitem_3" ? "" : styles.hidden}`}
                >
                  <Typography
                    className={styles.combnum}
                    variant="h5"
                    pt={1}
                    sx={{ fontWeight: "500" }}
                  >
                    3
                  </Typography>
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "500",
                      paddingBottom: "20px",
                      lineHeight: "17px",
                    }}
                  >
                    Select purpose of remittance
                  </Typography>
                </Box>
                <Box
                  ml={0.4}
                  style={{ flexDirection: "column", padding: "10px" }}
                  className={`${styles.mobitem_3} ${currentItem === "mobitem_3" ? "" : styles.hidden}`}
                >
                  <Typography
                    className={styles.combnum}
                    variant="h5"
                    pt={1}
                    sx={{ fontWeight: "500" }}
                  >
                    2
                  </Typography>
                  <Typography
                    className={styles.mobcombtext}
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "500",
                      paddingBottom: "20px",
                      lineHeight: "17px",
                    }}
                  >
                    Add Invoice details.
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MobLrWork;
