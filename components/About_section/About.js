import { useMediaQuery, useTheme } from "@mui/material";
import OrganizationSchema from "../Reusable_Components/OrganizationSchema/OrganizationSchema";
import Subscribe from "../Reusable_Components/Subscribe/Subscribe";
import Investors from "../Reusable_Components/investors/Investors";
import Media from "../Reusable_Components/media/Media";
import MediaAboutData from "../Reusable_Components/media/MediaData/MediaAboutData";
import CoreTeam from "./CoreTeam/CoreTeam";
import Banner from "./banner/Banner";
import MobOurStory from "./founders_story/MobOurStory";
import OurStory from "./founders_story/OurStory";
import Values from "./values/Values";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <main>
      <OrganizationSchema />
      <Banner />
      {isMobile ? <MobOurStory /> : <OurStory />}
      <Investors />
      <Values />
      <CoreTeam />
      <Media image={'/assets/Reusable_section/We_are_in_media_bg.svg'} data={MediaAboutData} />
      <Subscribe />
    </main>
  );
};

export default About;
