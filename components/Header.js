import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { AppBar, Box, Button, Divider, Drawer, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { app_url } from "../config/config";
import WtspBtn from "./Reusable_Components/WhatsappBtn/WtspBtn";
import getUtmParams from "./utils/utmParams";

const handleLogin = () => {
  let utm_params = getUtmParams()
  window.open(`${app_url}/#/LoginScreens/default-login${utm_params ? '?' + utm_params : ''}`, '_blank');
}

const drawerWidth = 240;

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#142d82",
  fontWeight: "500",
  position: "relative",
  textDecoration: "none",
  "& .Menuarrow": {
    visibility: "hidden",
  },
  "&:hover, &.active, &:active": {
    "& .Menuarrow": {
      visibility: "visible",
    },
  },
  "& .span-text": {
    color: "#00b8d4",
  },
}));

const Header = ({ window }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => { setMobileOpen((prevState) => !prevState);};
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textalign: "center" }}>
      <Typography component={Link} href={"/"} justifyContent={'center'} alignItems={'center'} display={'flex'}>
        <img src={'/Assets/Reusable_section/LeRemitt_logo_Re.svg'} alt="LeRemitt" style={{ width: "160px", }} />
      </Typography>

      <Divider />

      <Box mt={2} ml={2}>
        {navbarData.map((item) => (
          <StyledLink key={item.id} href={item.link} activeclassname="active">
            <Box pb={2} sx={{ display: "flex", fontSize: "15px", }}>
              <img src={'/Assets/Reusable_section/Button_Icon_03.svg'} alt="MenuArrow" style={{ paddingRight: "5px" }} />

              <Typography fontSize={'1.25rem'} fontWeight={500}>{item.title}</Typography>
            </Box>
          </StyledLink>
        ))}
      </Box>

      <Box ml={2}>
        <Typography
          component="a"
          href="https://wa.me/918050087593?text=Hello%20How%20can%20I%20help%20you%20?"
          target="_blank"
          rel="noreferrer"
          fontSize={'1.25rem'} fontWeight={500}
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            color: '#142d82',
            cursor: 'pointer',
          }}
        >
          <span style={{ color: '#142d82', paddingRight: '10px' }}>Whats<span style={{ color: '#25d366' }}>App</span></span>
          <WhatsAppIcon sx={{ color: '#25d366', fontSize: '2rem', borderRadius: '50px', boxShadow: '0px 0px 25px -6px rgba(0,0,0,0.5)' }} />
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            background: "#142d82",
            color: "white",
            fontSize: "1.3rem",
            width: "100%",
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
          onClick={handleLogin}
        >
          Sign&nbsp;
          <span style={{ color: "#00e5ff", }}> In</span>
        </Button>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "white", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 0 0 8px", marginRight: "-8px", }} >

          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <Typography component={Link} href={"/"} display={{ xs: 'none', sm: 'block' }}>
              <img src={'/Assets/Reusable_section/LeRemitt_logo_Re.svg'} alt="logo" style={{ width: "170px", }} />
            </Typography>
            <Typography component={Link} href={"/"} display={{ xs: 'block', sm: 'none' }}>
              <img src={'/Assets/Reusable_section/LeRemitt_logo_R.png'} alt="LeRemitt" style={{ width: "70px", }} />
            </Typography>
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { lg: "none" },
                background: "#142d82",
                borderRadius: "0",
                color: "white",
                "&:hover": {
                  backgroundColor: "#2645af",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex", alignItems: "center" } }}>
            {navbarData.map((item) => (
              <StyledLink key={item.id} href={item.link} className={router.pathname === item.link ? "active" : ""}>
                <Box sx={{ display: "flex", alignItems: "center", padding: "10px 9px", }}>
                  <img className="Menuarrow" src={'/Assets/Reusable_section/Button_Icon_03.svg'} alt="Button_Icon_03" style={{ paddingRight: "5px" }} />

                  <Typography fontSize={'1.25rem'} fontWeight={500}>{item.title}</Typography>
                </Box>
              </StyledLink>
            ))}

            <Button
              variant="contained"
              sx={{
                background: "#142d82",
                color: "white",
                fontWeight: "400",
                fontSize: "1.2rem",
                boxShadow: "none",
                textTransform: "capitalize",
                height: "35px",
                marginLeft: "10px",
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "#2645af",
                  boxShadow: "none",
                },
              }}
              onClick={handleLogin}
            >
              Sign&nbsp;
              <span style={{ color: "#00e5ff", }}> In</span>
            </Button>
            <Box pl={1.5}>
              <WtspBtn />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;

const navbarData = [
  { id: 1, link: "/about", title: "About Us", },
  { id: 2, link: "/accept-international-payments-for-businesses", title: "Product & Services", },
  { id: 3, link: "/demo", title: "Demo", },
  { id: 4, link: "/blogs", title: "Blogs", },
  { id: 5, link: "/faqs", title: "FAQs", },
  { id: 6, link: "/leconnect", title: "LeConnect", },
];



