import React from "react";
import Footer from "../Reusable_Components/footer/Footer";
import Navbar from "../Reusable_Components/navbar/Navbar";
import Subscribe from "../Reusable_Components/Subscribe/Subscribe";
import Media from "./Media/Media";
import ScrollTop from '../Reusable_Components/ScrollTop/ScrollTop'

import MetaTags from "../Reusable_Components/MetaTags/MetaTags";
import Popup from "../Reusable_Components/PopUp/PopUp";

const Blogs = () => {
  return (
    <main>
      <MetaTags
        metatitle="LeRemitt | Knowledge Hub For International Trade"
        metadesc="Get news & articles on payments, banking & business growth. LeRemitt Blogs empower your financial journey & business success."
        canonicalUrl="https://www.leremitt.com/blogs"
        metaimage="https://www.leremitt.com/Images/Reusable-inside/LeRemitt_logo-re_svg.svg"
      />
      <Navbar />
      <ScrollTop>
        <Media />
        <Subscribe />
        <Footer image={'https://www.leremitt.com/Images/Reusable-section/footersbg.svg'} />
        <Popup blogId="Blogs" />
      </ScrollTop>
    </main>
  );
};

export default Blogs;
