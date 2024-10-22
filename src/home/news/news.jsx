import React from "react";
import news from "../../assets/foodmore.svg"
import news1 from "../../assets/foodmore1.svg"
import { Left } from "../../assets/icons/left";4
import { Button } from "../../components/button/button";
import { User } from "../../assets/icons/user";




export const News = () => {
    return(
        <section className="container">
            <div className="w-[100%] flex flex-col gap-10 pt-[50px] ">
                <div className=" w-[100%] flex items-end ">
                    <div className="flex flex-col gap-2">
                        <p className="text-[36px] font-medium text-lightGreen font-yellowtail">News</p>
                        <h1 className="text-[50px] font-bold text-darkBlue font-roboto w-[70%]">Discover weekly content about organic food, & more</h1>
                    </div>
                    <Button className="border-2 border-darkBlue flex justify-center items-center gap-2 text-[20px] font-bold text-darkBlue"> More News <Left/></Button>
                </div>
                <div className="flex w-[100%] justify-between">
                    <div className="relative w-[600px] h-[500px] rounded-[30px]" style={{backgroundImage: `url(${news})`}}>
                        <div className=" flex flex-col gap-4 bg-white absolute top-[50%] left-[6%] translateX-[-50%] translateY-[-50%]  rounded-[15px] h-[300px] w-[530px] p-10 shadow-lg">
                            <div className="flex gap-2">
                                <User/>
                                <p className="text-darkBlue text-[18px] font-medium font-roboto">By Rachi Card</p>
                            </div>
                            <h1 className="text-[25px] text-darkBlue font-bold font-roboto whitespace-nowrap">The Benefits of Vitamin D & How to Get It</h1>
                            <p className="text-[18px] font-[400] leading-6 w-[80%] text-C6" >Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <Button className="bg-yellow text-darkBlue font-bold tex-[18px] flex items-center justify-center gap-2">Read More <Left/></Button>
                        </div>
                    </div>
                    <div className="w-[600px] h-[500px] rounded-[30px] relative" style={{backgroundImage: `url(${news1})`}}>
                        <div className=" flex flex-col gap-4 bg-white absolute top-[50%] left-[6%] translateX-[-50%] translateY-[-50%]  rounded-[15px] h-[300px] w-[530px] p-10 shadow-lg">
                            <div className="flex gap-2">
                                <User/>
                                <p className="text-darkBlue text-[18px] font-medium font-roboto">By Rachi Card</p>
                            </div>
                            <h1 className="text-[25px] text-darkBlue font-bold font-roboto">Our Favourite Summertime Tommeto</h1>
                            <p className="text-[18px] font-[400] leading-6 w-[80%] text-C6">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <Button className="bg-yellow text-darkBlue font-bold tex-[18px] flex items-center justify-center gap-2">Read More <Left/></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}