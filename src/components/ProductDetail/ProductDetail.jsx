import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { data } from "../../data/data";
import { Button } from "../button/button";
import { Left } from "../../assets/icons/left";
import { SingleBanner } from "../Shop/ShopSingle/SingleBanner";
import { Subscribe } from "../../home/subscribe/subscribe";



export const ProductDetail = () => {

    const [currentProduct, setCurrentProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        window.scrollTo(0, 0);

        const product = data.Shop.find((item) => item.id === parseInt(id));

        setCurrentProduct(product);

    }, [id]);

    const handleRelatedProductClick = (newId) => {
        const newProduct = data.Related.find((item) => item.id === newId);
        setCurrentProduct(newProduct);
        window.scrollTo(0, 0);
    };



    return (

        <>

            <SingleBanner />

            {currentProduct && (

                <section className="container mt-[40px]">

                    <div className="details flex flex-col gap-10 items-center">

                        <div className="details flex w-[100%] bg-offWhite gap-10 rounded-[20px] p-4">

                            <div className="w-[40%] flex items-center justify-center p-2">

                                <img src={currentProduct.img} alt="" className="w-[100%] rounded-[20px]" />

                            </div>

                            <div className="flex flex-col w-[60%] p-2 gap-10">

                                <div className="details-info flex flex-col gap-4">

                                    <h1 className="text-[30px] font-bold font-roboto">{currentProduct.title}</h1>

                                    <div className="rating flex items-center gap-1">

                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>

                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>

                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>

                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>

                                        <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <p className="text-B8 text-[20px] font-roboto font-[600] line-through">{currentProduct.price}</p>

                                        <p className="text-darkBlue text-[20px] font-roboto font-[600]">{currentProduct.sale}</p>

                                    </div>

                                    <p className="text-[18px] text-C6 font-[400] leading-6 w-[80%]">{currentProduct.description}</p>

                                </div>

                                <div className="flex items-center gap-2">

                                    <p className="text-darkBlue text-[25px] font-bold font-roboto">Quantity :</p>

                                    <p className="w-[135px] h-[70px] border-2 border-darkBlue rounded-[16px] flex items-center justify-center text-[20px font-bold">1</p>

                                    <Button className="bg-darkBlue text-white flex items-center justify-center gap-2">Add To Cart <Left /></Button>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col gap-6 items-center justify-center">

                            <div className="flex items-center justify-center gap-2">

                                <p className="w-[360px] h-[70px] flex items-center justify-center text-white font-bold text-[25px] font-roboto bg-darkBlue rounded-[16px]">Product Description</p>

                                <p className="w-[300px] h-[70px] flex items-center justify-center text-darkBlue font-bold text-[25px] font-roboto bg-offWhite rounded-[16px]">Additional Info</p>

                            </div>

                            <p className="text-C6 text-[25px] font-roboto w-[82%] text-center">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>

                        </div>

                    </div>

                </section>

            )}

            <section className="container mt-[100px]">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {data.Related.map((item) => (

                        <div key={item.id} onClick={() => handleRelatedProductClick(item.id)} className="">

                            <div className="ourProducts-item flex flex-col bg-offWhite rounded-[16px] border h-[400px] gap-5 relative" key={item.id}>

                                <p className="w-[75px] h-[28px] text-white text-[14px] bg-darkBlue absolute top-2 left-3 rounded-md flex items-center justify-center">{item.info}</p>

                                <div className="image-container h-[300px] w-[100%]">

                                    <img src={item.img} alt={item.title} className="w-[100%] h-[300px] rounded-t-2xl" />

                                </div>

                                <div className="flex flex-col pl-5 pr-5 gap-2">

                                    <h1 className="border-b-2 text-[20px] text-darkBlue font-bold">{item.title}</h1>

                                    <div className="product-details flex justify-between">

                                        <div className="pricing flex items-center gap-2">

                                            <p className="sale-price text-[15px] font-semibold text-center font-opensans text-B8 line-through">{item.sale}</p>

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

                        </div>

                    ))}

                </div>

            </section>
            <Subscribe/>
        </>

    )

}
