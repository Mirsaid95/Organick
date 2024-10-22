import React from "react";
import { Hero } from "./hero/hero";
import { Head } from "./head/head";
import { HomeAbout } from "./homeAbout/homeAbout";
import { OurProducts } from "./categories/ourProducts";
import { Testimonial } from "./testimonial/testimonial";
import { Offer } from "./offerOrganic/offer";
import { EcoFriendly } from "./ecoFriendly/ecoFriendly";
import { OrganicFood } from "./ecoFriendly/ecoFriendly";
import { News } from "./news/news";
import { Subscribe } from "./subscribe/subscribe";

export const Home =()=>{
    return(
        <>
            <div>
                <Hero/>
                <Head/>
                <HomeAbout />
                <OurProducts />
                <Testimonial />
                <Offer/>
                <EcoFriendly />
                <OrganicFood />
                <News />
                <Subscribe/>
            </div>
        </>
    )
}