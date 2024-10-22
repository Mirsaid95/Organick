import React from "react";
import { data } from "../../../data/data";




export const AboutProducts = () => {
    return(
        <section className="bg-darkBlue h-[100vh] flex justify-center mt-[80px]">
            <div className="container flex flex-col items-center justify-center gap-4">
                <p className="text-[36px] text-lightGreen font-yellowtail font-[400]">About Us</p>
                <h1 className="text-[50px] font-roboto text-white font-bold">What We Offer for You</h1>
                <div className="grid grid-cols-4 gap-4">
                    {data.aboutUs.map((item) => (
                        <div className="flex flex-col gap-3 items-center rounded-[16px]" key={item.id}>
                            <span className="bg-white rounded-[16px]"><img src={item.img} alt="" /></span>
                            <p className="text-[18px] text-white font-roboto">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}