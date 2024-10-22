import React from "react";
import fruits from "../../assets/about.svg";
import { Button } from "../../components/button/button";
import { Left } from "../../assets/icons/left";
import { IconAbout } from "../../assets/icons/iconAbout";
import { IconAbout1 } from "../../assets/icons/iconAbout1";

export const HomeAbout = () =>{
    return(
        <section className="bg-offWhite">
            <div className="homeAbout flex items-center w-[100%]">
                <div className="homeAbout-img w-[50%] pl-[80px]">
                    <img src={fruits} alt="" className="w-[100%]" />
                </div>
                <div className="homeAbout-info w-[50%] flex flex-col gap-4">
                    <div className="homoeAbout-title-list ">
                        <p className="font-yellowtail text-lightGreen text-[36px]">About Us</p>
                        <h1 className="text-[50px] text-darkGray font-roboto font-semibold w-[70%]">We Believe in Working
                        Accredited Farmers</h1>
                        <p className="text-C6 text-[16px] leading-6 w-[80%]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <IconAbout/>
                        <div className="flex flex-col gap-2">
                        <h1 className="font-extrabold text-darkGray tex-[25px]">Organic Foods Only</h1>
                        <p className="text-[16px] leading-6 text-C6 w-[70%]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <IconAbout1 />
                        <div className="flex flex-col gap-2">
                        <h1 className="font-extrabold text-darkGray tex-[25px]">Quality Standards</h1>
                        <p className="text-[16px] leading-6 text-C6 w-[70%]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    </div>
                    <Button className="bg-darkGray flex items-center justify-center gap-2 w-[220px] h-[70px] text-[20px] font-bold text-white"> Shop now <Left/></Button>
                </div>
            </div>
        </section>
    )
}