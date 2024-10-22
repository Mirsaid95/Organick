import React from "react";
import logo from "../../assets/Logo.svg";
import { Instagram } from "../../assets/icons/instagram";
import { Twitter } from "../../assets/icons/twitter";
import { Facebook } from "../../assets/icons/facebook";
import { Pinseret } from "../../assets/icons/pinseret";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="h-[70vh] flex justify-between flex-col">
      <div className="container grid grid-cols-3 gap-10 pt-[100px]">
        <div className="w-[100%] flex flex-col gap-2 items-end">
          <h1 className="text-darkBlue text-[30px] font-bold font-roboto">Contact Us</h1>
          <div className="flex flex-col items-end">
            <h4 className="text-[18px] text-C6 font-bold">Email</h4>
            <p className="text-[16px] text-C6 font-semibold">needhelp@Organia.com</p>
          </div>
          <div className="flex flex-col items-end">
            <h4 className="text-[18px] text-C6 font-bold">Phone</h4>
            <p className="text-[16px] text-C6 font-semibold">666 888 888</p>
          </div>
          <div className="flex flex-col items-end">
            <h4 className="text-[18px] text-C6 font-bold">Adress</h4>
            <p className="text-[16px] text-C6 font-semibold">88 road, borklyn street, USA</p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}><img src={logo} alt="Home logo"/></Link>
            </div>
            <h1 className="text-darkBlue text-[30px] font-bold font-roboto">Organick</h1>
          </div>
          <p className="text-[18px] leading-6 text-C6 font-[400]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="flex items-center gap-4">
            <span className="w-[60px] h-[60px] bg-softGreen rounded-[50px] flex items-center justify-center">
              <Instagram />
            </span>
            <span className="w-[60px] h-[60px] bg-softGreen rounded-[50px] flex items-center justify-center">
              <Facebook />
            </span>
            <span className="w-[60px] h-[60px] bg-softGreen rounded-[50px] flex items-center justify-center">
              <Twitter />
            </span>
            <span className="w-[60px] h-[60px] bg-softGreen rounded-[50px] flex items-center justify-center">
              <Pinseret />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-darkBlue text-[30px] font-bold font-roboto">Utility Pages</h1>
          <p className="text-[18px] leading-6 text-C6 font-[400]">Style Guide</p>
          <p className="text-[18px] leading-6 text-C6 font-[400]">404 Not Found</p>
          <p className="text-[18px] leading-6 text-C6 font-[400]">Password Protected</p>
          <p className="text-[18px] leading-6 text-C6 font-[400]">Licences</p>
          <p className="text-[18px] leading-6 text-C6 font-[400]">Changelog</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 border-t-2 text-center pt-4 pb-4">
        <p className="text-C6">Copyright ©</p>
        <p className="font-bold text-C6">Organick |</p>
        <p className="text-C6 ">Designed by </p>
        <p className="font-bold text-C6">VictorFlow</p>
        <p className="text-C6">Templates - Powered by </p>
        <p className="font-bold text-C6">Webflow</p>
      </div>
      
    </footer>
  );
};
