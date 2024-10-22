import React from "react";
import econis from "../../assets/econis.svg";
import econis1 from "../../assets/Econis1.svg";
import econis2 from "../../assets/Econis2.svg";
import econis3 from "../../assets/Econis3.svg";


export const EcoFriendly = () =>{
    return(
        <section>
            <div className="w-[100%] flex relative">
                <div className="w-[50%]">
                    <img src={econis} alt="" />
                </div>
                <div className="bg-white w-[700px] h-[600px] absolute top-24 right-36  rounded-[16px] pl-20 pt-8 flex flex-col gap-4">
                    <p className="text-[36px] text-simebold font-yellowtail text-lightGreen">Eco Friendly</p>
                    <h1 className="text-[50px] font-bold text-darkBlue font-roboto w-[80%]">Econis is a Friendly
                    Organic Store</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[25px] text-darkBlue font-semibold">Start with Our Company First</h1>
                            <p className="text-[18px] text-C6 leading-6 w-[90%]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[25px] text-darkBlue font-semibold">Learn How to Grow Yourself</h1>
                            <p className="text-[18px] text-C6 leading-6 w-[90%]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[25px] text-darkBlue font-semibold">Farming Strategies of Today</h1>
                            <p className="text-[18px] text-C6 leading-6 w-[90%]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export const OrganicFood = () =>{
    return(
        <section className="bg-F2 h-[100vh] flex items-center justify-center">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img src={econis1} alt="" />
                    <p className="absolute top-[45%] left-[30%] translateX-[-50%] translateY-[-50%] w-[200px] h-[60px] bg-white rounded-[16px] flex items-center justify-center">Organic Juice</p>
                </div>
                <div className="relative">
                    <img src={econis2} alt="" />
                    <p className="absolute top-[45%] left-[30%] translateX-[-50%] translateY-[-50%] w-[200px] h-[60px] bg-white rounded-[16px] flex items-center justify-center">Organic Food</p>
                </div>
                <div className="relative">
                    <img src={econis3} alt="" />
                    <p className="absolute top-[45%] left-[30%] translateX-[-50%] translateY-[-50%] w-[200px] h-[60px] bg-white rounded-[16px] flex items-center justify-center">Nuts Cookis</p>
                </div>
            </div>
        </section>
    )
}