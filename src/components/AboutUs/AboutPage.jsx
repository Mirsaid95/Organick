import React from "react";
// import { Mainlayout } from "../../layout/main-layout";
import { AboutHero } from "./AboutHero/AboutHero";
import { AboutCreative } from "./aboutCreative/aboutCreative";
import { AboutChoose } from "../AboutUs/AboutCHoose/choose";
import { Team } from "./AboutTeam/team";
import { AboutProducts } from "./aboutProducts/AboutProduct";
import { Subscribe } from "../../home/subscribe/subscribe"

export const AboutPage = () => {
  return (
    <>
      {/* <Mainlayout> */}
        <AboutHero />
        <AboutCreative />
        <AboutChoose />
        <Team />
        <AboutProducts/>
        <Subscribe/>
      {/* </Mainlayout> */}
    </>
  );
};
