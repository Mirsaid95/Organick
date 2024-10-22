import React from "react";
import { Logo } from "../../assets/icons/logo";
import { Link } from "react-router-dom";
import { data } from "../../data/data.js";
import { SearchIcon } from "../../assets/icons/search.jsx";
import { Shopping } from "../../assets/icons/shopping.jsx";

export const Header = () => {
  return (
    <header className="header pt-[20px]">
      <div className="header-container max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-[135px]">
          <div className="flex items-center gap-2">
            <Logo className="bg-[#7EB693]" />
            <h1 className="header-logo-title font-roboto text-[38px] font-extrabold flex items-center" style={{ color: "#274C5B" }}>Organick</h1>
          </div>
          <div className="flex items-center gap-4">
            {data.headerLinks.map((item) => (
              <Link key={item.id} to={item.link} className="text-[#274C5B] font-opensans text-[18px] font-bold">{item.title}</Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center w-[350px] h-[60px] bg-[#FAFAFA] rounded-[36px] justify-between p-2">
            <input type="text" placeholder="Search" className="bg-transparent border-none outline-none w-[280px] h-[50px]  text-[20px] font-opensans font-normal text-[#C6C6C6]"/>
            <button className="bg-[#7EB693] w-[50px] h-[50px] rounded-full flex items-center justify-center"><SearchIcon /></button>
          </div>
          <div className=" gap-2 w-[159px] h-[60px] border-[1px] border-[#E0E0E0] rounded-[36px] flex items-center justify-between p-2">
            <span className="bg-[#274C5B] w-[50px] h-[50px] rounded-full flex items-center justify-center"><Shopping /></span>
            <p className="text-[#274C5B] font-opensans text-[18px] font-bold">Cart(0)</p>
          </div>
        </div>
      </div>
    </header>
  );
};
