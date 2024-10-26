import React, { useEffect, useState } from "react";
import { Button, Grid, Stack, Tooltip, Typography, tooltipClasses, } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from './Subscribe.module.css'
import getUtmParams from "../../utils/utmParams";
import { app_url } from "../../../config/config";

const HtmlTooltipImg = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    color: '#fff',
    maxWidth: 230,
    fontSize: theme.typography.pxToRem(12),
    borderRadius: "0",
  },
}));

const imgdata = [
  { id: 1, img: '/Assets/Reusable_section/Register_Icon_01.png', title: "Zero Forex Margins" },
  { id: 2, img: '/Assets/Reusable_section/Register_Icon_02.png', title: "Global FCY Account" },
  { id: 3, img: '/Assets/Reusable_section/Register_Icon_03.png', title: "Transparent Charges" },
  { id: 4, img: '/Assets/Reusable_section/Register_Icon_04.png', title: "Instant E-fira" },
  { id: 5, img: '/Assets/Reusable_section/Register_Icon_05.png', title: "Manage Payments Through Whatsapp" },
  { id: 6, img: '/Assets/Reusable_section/Register_Icon_06.png', title: "Real Time Tracking" },
  { id: 7, img: '/Assets/Reusable_section/Register_Icon_07.png', title: "Transaction Advisory" },
  { id: 8, img: '/Assets/Reusable_section/Register_Icon_08.png', title: "Historic Rates Comparison" },
];

const Subscribe = () => {
  const [showSetOne, setShowSetOne] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [fade, setFade] = useState(false);

  const handleRegister = () => {
    let utm_params = getUtmParams()
    window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
  }

  useEffect(() => {
    let interval;
    let timeout;

    if (!hovered) {
      interval = setInterval(() => {
        setFade(true);
        timeout = setTimeout(() => {
          setShowSetOne((prevValue) => !prevValue);
          setFade(false);
        }, 500);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section id="subscribe" className={styles.subscribe}>
      <Grid container spacing={{ xs: 0, lg: 2 }}>
        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container spacing={3} className={`fade ${fade ? 'out' : 'in'}`}>
            {imgdata.slice(0, 4).map((img, index) => (
              <Grid item xs={6} key={img.id} display={'flex'} justifyContent={'center'}>
                {showSetOne ? (
                  (index === 0 || index === 3) && (
                    <HtmlTooltipImg
                      title={
                        <React.Fragment>
                          <Typography textAlign={"center"} fontWeight={400}>
                            {img.title}
                          </Typography>
                        </React.Fragment>
                      }
                      placement={index === 0 || index === 1 ? "bottom" : "top"}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img data-aos="zoom-in" src={img.img} alt="img" style={{ width: "50px", height: "auto", cursor: "pointer",}}/>
                    </HtmlTooltipImg>
                  )
                ) : (
                  (index === 1 || index === 2) && (
                    <HtmlTooltipImg
                      title={
                        <React.Fragment>
                          <Typography textAlign={'center'} fontWeight={400}>{img.title}</Typography>
                        </React.Fragment>
                      }
                      placement={index === 0 || index === 1 ? "bottom" : "top"}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img data-aos="zoom-in"
                        src={img.img}
                        alt="img"
                        style={{
                          width: "50px",
                          height: "auto",
                          cursor: "pointer",
                        }}
                      />
                    </HtmlTooltipImg>
                  )
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
            <Typography color={"white"} variant="h2" fontSize={'2.25rem'} fontWeight={500} mb={2} >
              Get started with hassle-free inward remittances.
            </Typography>
            <Button
              variant="contained"
              endIcon={<img src='/Assets/Reusable_section/Button_Icon_01.svg' alt="Button_Icon_01" />}
              sx={{
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
                width: { xs: '70%', sm: '40%', md: '80%', lg: '50%' }
              }}
              onClick={() => {
                handleRegister()
              }}
            >
              Register Now
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container spacing={3} className={`fade ${fade ? 'out' : 'in'}`}>
            {imgdata.slice(4, 8).map((img, index) => (
              <Grid item xs={6} key={img.id} display={'flex'} justifyContent={'center'}>
                {showSetOne ? (
                  (index === 0 || index === 3) && (
                    <HtmlTooltipImg
                      title={
                        <React.Fragment>
                          <Typography textAlign={"center"} fontWeight={400}>
                            {img.title}
                          </Typography>
                        </React.Fragment>
                      }
                      placement={index === 0 || index === 1 ? "bottom" : "top"}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img data-aos="zoom-in"
                        src={img.img}
                        alt="img"
                        style={{
                          width: "50px",
                          height: "auto",
                          cursor: "pointer",
                        }}
                      />
                    </HtmlTooltipImg>
                  )
                ) : (
                  (index === 1 || index === 2) && (
                    <HtmlTooltipImg
                      title={
                        <React.Fragment>
                          <Typography textAlign={'center'} fontWeight={400}>{img.title}</Typography>
                        </React.Fragment>
                      }
                      placement={index === 0 || index === 1 ? "bottom" : "top"}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img data-aos="zoom-in" src={img.img} alt="img" style={{ width: "50px", height: "auto", cursor: "pointer", }} />
                    </HtmlTooltipImg>
                  )
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Subscribe;
