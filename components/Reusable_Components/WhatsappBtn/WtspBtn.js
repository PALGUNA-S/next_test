import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

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

const WtspBtn = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <WhatsAppIcon
        onClick={handleOpen}
        sx={{ color: '#25d366', fontSize: '2.5rem', cursor: 'pointer' }}
      />

      <Modal
        open={open}
        onClose={handleClose}
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
    </>
  );
};

export default WtspBtn;
