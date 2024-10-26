import React, { useEffect, useState } from "react";
import Subscribe from "../Reusable_Components/Subscribe/Subscribe";
import FCY from "./ProductServices/FCY/FCY";
import MobFcy from "./ProductServices/FCY/MobFcy";
import InwardRemittance from "./ProductServices/InwardRemittance/InwardRemittance";
import MobInwardRemittance from "./ProductServices/InwardRemittance/MobInwardRemittance";
import FcyBanner from "./ProSerBanner/FcyBanner";
import InwardBanner from "./ProSerBanner/InwardBanner";

const ProductServices = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 860);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <InwardBanner />
      {isSmallScreen ? <MobInwardRemittance /> : <InwardRemittance />}
      <FcyBanner />
      {isSmallScreen ? <MobFcy /> : <FCY />}
      <Subscribe />
    </main>
  );
};

export default ProductServices;
