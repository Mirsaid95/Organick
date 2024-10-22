import React from "react";
import { data } from "../../../data/data";
import { Subscribe } from "../../../home/subscribe/subscribe"
import { Link } from "react-router-dom";





export const ShopCard = () => {
    return(
        <section>
            <div className="container ShopCard-container grid grid-cols-4 gap-6 items-center mt-[60px]">
                {data.Shop.map((item) => (
                    <Link to={`product/detail/${item.id}`} key={item.id} >
                     <div className="ourProducts-item flex flex-col bg-offWhite rounded-[16px] border h-[400px] gap-5 relative" key={item.id}>
                        <p className="w-[75px] h-[28px] text-white text-[14px] bg-darkBlue absolute top-2 left-3 rounded-md flex items-center justify-center">{item.info}</p>
                        <div className="image-container h-[300px] w-[100%]">
                            <img src={item.img} alt={item.title}  className=" w-[100%] h-[300px] rounded-t-2xl"/>
                        </div>
                        <div className="flex flex-col pl-5 pr-5 gap-2">
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
                    </Link>
                ))}
            </div>
            <Subscribe/>
        </section>
    )
}