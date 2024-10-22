import React from "react";
import subs from "../../assets/newsletter.svg"
import { Button } from "../../components/button/button";
import { Input } from "../../components/button/button";




export const Subscribe = () => {
    return(
        <section className="container h-[60vh] mt-[80px] flex justify-center items-center">
            <div className=" flex items-center justify-between h-[40vh] bg-cover bg-no-repeat bg-center p-10 rounded-[16px]" style={{backgroundImage: `url(${subs})`}}>
                <h1 className="text-[50px] text-white font-bold w-[30%]">Subscribe to our Newsletter</h1>
                <div className="flex items-center gap-2">
                    <Input className="w-[340px] h-[70px] pl-4 text-[18px] outline-none" placeholder="Your Email Address"/>
                    <Button className="w-[220px] h-[70px] bg-darkBlue text-white text-[20px] font-bold font-roboto">Subscribe</Button>
                </div>
            </div>
        </section>
    )
}