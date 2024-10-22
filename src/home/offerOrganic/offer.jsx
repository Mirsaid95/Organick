import React from "react";
import { data } from "../../data/data";
import { Button } from "../../components/button/button";
import { Left } from "../../assets/icons/left";





export const Offer = () => {
    return(
        <section className="bg-darkBlue h-[100vh]">
            <div className="container flex flex-col items-center justify-center pt-[70px]">
                <div className=" w-[100%] flex items-end justify-between">
                    <div>
                        <p className="text-lightGreen text-[36px] font-[400] font-yellowtail">Offer</p>
                        <h1 className="text-[50px] font-[800] text-white">We Offer Organic For You</h1>
                    </div>
                    <Button className="bg-yellow w-[220px] h-[70px]  text-darkBlue font-medium text-[18px] flex items-center justify-center gap-2">View All Product <Left/></Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-[40px]">
                    {data.Organic.map((item) => (
                        <div className="flex flex-col items-center gap-10 relative bg-white w-[100%] h-[420px] rounded-[15px]" key={item.id}>
                            <p className="w-[75px] h-[28px] text-white text-[14px] bg-darkBlue absolute top-2 left-3 rounded-md flex items-center justify-center">{item.info}</p>
                            <div className="w-[290px] h-[290px] flex items-center justify-center">
                                <img src={item.img} alt="" className="w-[270px] h-[280px]" />
                            </div>
                            <div className="flex flex-col pl-4 pr-4 gap-2 w-[100%]">
                                <h1 className="border-b-2 text-[20px] text-darkBlue font-bold">{item.title}</h1>
                                <div className="product-details flex justify-between">
                                    <div className="pricing flex items-center gap-2">
                                        <p className="sale-price text-[15px] font-semibold  text-center font-opensans text-B8 line-through">{item.sale}</p>
                                        <p className="original-price text-[18px] text-center font-bold text-darkBlue">{item.price}</p>
                                    </div>
                                    <div className="rating">
                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}