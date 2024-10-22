import React from "react";
import shop from "../../../assets/Shop.svg"




export const ShopBanner = () =>{
    return (
        <section className="h-[350px] bg-cover bg-no-repeat bg-center flex items-center justify-center mt-[30px]" style={{backgroundImage: `url(${shop})`}}>
                <h1 className="text-[70px] text-darkBlue font-bold font-roboto">Shop</h1>
        </section>
    )
}
