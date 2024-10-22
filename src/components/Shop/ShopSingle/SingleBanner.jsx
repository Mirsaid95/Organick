import React from "react";
import single from '../../../assets/ShopSingle.svg'



export const SingleBanner = () => {
    return(
        <section className=" h-[330px] bg-cover bg-no-repeat bg-center flex items-center justify-center mt-[60px]" style={{backgroundImage: `url(${single})`}}>
            <h1 className="text-[80px] text-darkBlue font-roboto font-bold">Shop Single</h1>
        </section>
    )
}