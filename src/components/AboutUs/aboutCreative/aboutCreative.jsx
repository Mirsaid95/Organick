import React from "react";
import img from "../../../assets/AboutUse1.svg"
import { Button } from "../../button/button";
import { Left } from "../../../assets/icons/left";
import {Traktor} from "../../../assets/icons/traktor";
import {HomeIcon} from "../../../assets/icons/home";




export const AboutCreative = () => {
    return(
        <div className="">
            <div className="flex w-[100%] items-center gap-5">
                <div className="w-[50%]">
                    <img src={img} alt="" className="w-[100%]"/>
                </div>
                <div className=" flex flex-col gap-6 w-[40%]">
                    <p className="text-lightGreen text-[36px] font-yellowtail font-[400]">About Us</p>
                    <h1 className="text-[50px] text-darkBlue font-[800] font-roboto">We do Creative Things for Success</h1>
                    <p className="text-[18px]  text-darkBlue font-roboto">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <p className="text-[18px]  text-darkBlue font-roboto">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-3 items-center">
                            <Traktor/>
                            <p className="text-[20px] font-bold text-darkBlue font-roboto">Modern AgricultureEquipment</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <HomeIcon/>
                            <p className="text-[20px] font-bold text-darkBlue font-roboto">No growth hormones are used</p>
                        </div>
                    </div>
                    <Button className="bg-darkBlue flex items-center justify-center gap-2 text-white font-bold font-roboto">Explore More <Left/></Button>
                </div>
            </div>
        </div>
    )
}