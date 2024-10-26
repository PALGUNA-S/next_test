import React, { useState, useEffect } from "react";
import styles from "./LrWorks.module.css";
import { Box, Container, Grid, Typography, Modal, Button } from "@mui/material";

const LrWorks = () => {
  const videoUrl = `https://www.youtube.com/embed/56jlqLNrDqM?si=0zqjaRomJeqTXKt7&rel=0`;
  const [currentItem, setCurrentItem] = useState("item");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [activeItem, setActiveItem] = useState("item");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseEnter = (item) => {
    setIsMouseOver(true);
    setCurrentItem(item);
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        if (currentItem === "item") {
          setCurrentItem("item_2");
          setActiveItem("item_2"); // Set active item
        } else if (currentItem === "item_2") {
          setCurrentItem("item_3");
          setActiveItem("item_3"); // Set active item
        } else if (currentItem === "item_3") {
          setCurrentItem("item");
          setActiveItem("item"); // Set active item
        }
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentItem, isMouseOver]);

  return (
    <section id="lrworks" className={styles.leWorks}>
      <Container>
        <Grid>
          <Typography
            variant="h2"
            sx={{
              paddingBottom: "10px",
              fontWeight: "500",
              textAlign: "center",
              fontSize: '2.25rem'
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
                src='/Assets/Reusable_section/Button_Icon_03.svg'
                alt="Button_Icon_03"
                style={{ paddingRight: "5px" }}
              />
              <Typography
                variant="body1"
                fontSize={'1.5rem'}
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

          <Grid item className={styles.honey}>
            <Box className={styles.comb_1}>
              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item} ${currentItem === 'item' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  1
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Input your mobile/email id.
                </Typography>
              </Box>
              <Box
                className={styles.itemMain}
                onMouseEnter={() => handleMouseEnter("item")}
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
                  className={styles.combText}
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
                  className={styles.mainCombnum}
                  variant="body1"
                  sx={{ color: "#39d7ea", fontWeight: "600", fontSize: '1.5rem' }}
                >
                  1
                </Typography>
              </Box>

              <Box className={styles.itemNullOne}></Box>
              <Box
                className={styles.itemMainTwo}
                onMouseEnter={() => handleMouseEnter("item_2")}
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
                  className={styles.combText}
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
                  className={styles.mainCombnum}
                  variant="body1"
                  sx={{ color: "#39d7ea", fontWeight: "600", fontSize: '1.5rem' }}
                >
                  2
                </Typography>
              </Box>

              <Box className={styles.itemNullTwo}></Box>
              <Box
                className={styles.itemMainThree}
                onMouseEnter={() => handleMouseEnter("item_3")}
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
                  className={styles.combText}
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
                  className={styles.mainCombnum}
                  variant="body1"
                  sx={{ color: "#39d7ea", fontWeight: "600", fontSize: '1.5rem' }}
                >
                  3
                </Typography>
              </Box>
              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item_3} ${currentItem === "item_3" ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  3
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Select purpose of remittance
                </Typography>
              </Box>
            </Box>

            <Grid item className={styles.comb_2}>
              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item} ${currentItem === 'item' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  2
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Verify displayed information.
                </Typography>
              </Box>
              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item} ${currentItem === 'item' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  3
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Login to Dashboard.
                </Typography>
              </Box>

              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item_2} ${currentItem === 'item_2' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  1
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Complete your profile.
                </Typography>
              </Box>
              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item_2} ${currentItem === 'item_2' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  2
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Add required details.
                </Typography>
              </Box>

              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item_3} ${currentItem === 'item_3' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  1
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Input Remitter details
                </Typography>
              </Box>
              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item_3} ${currentItem === 'item_3' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  2
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Add Invoice details.
                </Typography>
              </Box>
            </Grid>

            <Grid item className={styles.comb_3} style={{ marginTop: "-2.2rem" }}>
              <Box
                style={{ flexDirection: "column", padding: "10px" }}
                className={`${styles.item_2} ${currentItem === 'item_2' ? "" : styles.hidden}`}
              >
                <Typography
                  className={styles.combnum}
                  variant="body1"
                  pt={1}
                  sx={{ fontWeight: "600", fontSize: '1.4rem' }}
                >
                  3
                </Typography>
                <Typography
                  className={styles.combText}
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "17px",
                  }}
                >
                  Submit for account activation.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LrWorks;