import React from "react";
import Us from "../../../assets/AboutUs.svg";




export const AboutHero = () => {
    return(
        <div className="h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center mt-[30px]" style={{backgroundImage: `url(${Us})`}}>
            <h1 className="text-[55px] text-darkBlue font-extrabold">About Us</h1>
        </div>
    )
}