import React, { useEffect, useState } from "react";
import Converter from "../Mobile_converter/Converter";
import OrganizationSchema from "../Reusable_Components/OrganizationSchema/OrganizationSchema";
import Subscribe from "../Reusable_Components/Subscribe/Subscribe";
import Partners from "../Reusable_Components/investors/Partners";
import Testimonials from "./Customer_Testimonials/Testimonials";
import WeMedia from "./Media/WeMedia";
import Banner from "./banner/Banner";
import LrWorks from "./how_leremitt_work/LrWorks";
import MobLrWork from "./how_leremitt_work/MobLrWork";
import ProSer from "./product_services/ProSer";
import { useMediaQuery, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <main>
      <OrganizationSchema />
      {isMobile ? <Converter /> : <Banner />}
      {isMobile ? (<MobLrWork />) : <LrWorks />}
      <ProSer />
      <Partners text={{ heading: "Partners", title: "100% safe ", spantitle: "and compliant.", subtitle: "backed by leading banks & partners",}}/>
      <Testimonials />
      <WeMedia />
      <Subscribe />
    </main>
  );
};

export default Home;
