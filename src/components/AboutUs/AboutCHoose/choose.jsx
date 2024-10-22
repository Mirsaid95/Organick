import React from "react";
import { Fresh } from "../../../assets/icons/freshIcon";
import {PaymentsCard } from "../../../assets/icons/payment"
import {ReturnPolicy} from "../../../assets/icons/returnPolicy"
import { Support24 } from "../../../assets/icons/support24"
import choose from "../../../assets/choose.svg"
import { NaturIcon } from "../../../assets/icons/naturIcon";




export const AboutChoose = () => {
    return(
        <section className="bg-offWhite h-[1100px]">
            <div className=" container flex flex-col items-center justify-center gap-10 pt-[60px]">
                <div className="flex items-center justify-center gap-6">
                    <div className=" flex flex-col gap-4">
                        <p className="text-lightGreen text-[36px] font-yellowtail font-[400]">Why Choose us?</p>
                        <h1 className="text-darkBlue text-[50px] font-bold">We do not buy from the
                        open market & traders.</h1>
                        <p className="text-C6 text-[18px] leading-6 font-roboto w-[90%]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 w-[300px] h-[70px] rounded-[20px] bg-smoke pl-6">
                                <NaturIcon className="w-[20px] h-[20px]"/>
                                <p className="text-[18px] font-bold font-roboto text-darkBlue">100% Natural Product</p>
                            </div>
                            <p className="text-C6 text-[18px] font-[400] font-roboto w-[90%] pl-16">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 w-[300px] h-[70px] rounded-[20px] bg-smoke pl-6">
                                <NaturIcon className="w-[20px] h-[20px]"/>
                                <p className="text-[18px] font-bold font-roboto text-darkBlue"> Increases resistance</p>
                            </div>
                            <p className="text-C6 text-[18px] font-[400] font-roboto w-[90%] pl-16">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="choose-img w-[100%]">
                        <img src={choose} alt="" />
                    </div>
                </div>
                <div className="choose-icons flex items-center justify-center gap-4">
                    <div className="w-[280px] h-[300px] bg-white flex flex-col items-center justify-center gap-2 text-center rounded-lg">
                            <span className="w-[95px] h-[95px] bg-offWhite rounded-[16px] flex items-center justify-center"><ReturnPolicy /></span>
                        <h5 className="text-[25px] text-darkBlue font-bold font-roboto">Return Policy</h5>
                        <p className="text-C6 text-[18px] font-[400] leading-6 w-[70%]">Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="w-[280px] h-[300px] bg-white flex flex-col items-center justify-center gap-2 text-center rounded-lg">
                        <div className="w-[95px] h-[95px] bg-offWhite rounded-[16px] flex items-center justify-center">
                            <Fresh />
                        </div>
                        <h5 className="text-[25px] text-darkBlue font-bold font-roboto">100% Fresh</h5>
                        <p className="text-C6 text-[18px] font-[400] leading-6 w-[70%]">Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="w-[280px] h-[300px] bg-white flex flex-col items-center justify-center gap-2 text-center rounded-lg">
                        <div className="w-[95px] h-[95px] bg-offWhite rounded-[16px] flex items-center justify-center">
                            <Support24/>
                        </div>
                        <h5 className="text-[25px] text-darkBlue font-bold font-roboto">Support 24/7</h5>
                        <p className="text-C6 text-[18px] font-[400] leading-6 w-[70%]">Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="w-[280px] h-[300px] bg-white flex flex-col items-center justify-center gap-2 text-center rounded-lg"    >
                        <div className="w-[95px] h-[95px] bg-offWhite rounded-[16px] flex items-center justify-center">
                            <PaymentsCard/>
                        </div>
                        <h5 className="text-[25px] text-darkBlue font-bold font-roboto">Secured Payment</h5>
                        <p className="text-C6 text-[18px] font-[400] leading-6 w-[70%]">Simply dummy text of the printintypesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}