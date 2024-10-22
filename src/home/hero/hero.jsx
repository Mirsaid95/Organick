import React from "react";
import banner from "../../assets/Banner.png";
import { Left } from "../../assets/icons/left";
import { Button } from "../../components/button/button";

export const Hero = () => {
  return (
    <section
      className="hero h-[90vh] bg-cover bg-center bg-no-repeat mt-[30px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-5 pt-[120px]">
        <p className="text-[36px] text-[#68A47F] font-normal font-yellowtail"> 100% Natural Food</p>
        <h1 className="text-[55px] text-[#274C5B] font-extrabold w-[45%] leading-relaxed">Choose the best healthier way of life</h1>
        <Button className=" w-[220px] h-[70px] bg-[#EFD372] flex items-center justify-center gap-5 font-roboto text-[20px] text-darkBlue font-bold rounded-[16px] scale-105 hover:scale-110 transition-all duration-400 shadow-md shadow-black-100/50"> Explore Now <Left/></Button>
        </div>
      </div>
    </section>
  );
};
