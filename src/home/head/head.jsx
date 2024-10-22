import React from "react";
import fr from "../../assets/fr.svg";
import fr1 from "../../assets/fr1.svg";
export const Head = () => {
    return (
        <section className="max-w-[1240px] mx-auto mt-[50px]">
            <div className="flex items-center gap-4 justify-center">
                <div className="relative">
                    <div className="w-[532px] h-[367px]">
                        <img src={fr1} alt="" className="w-[100%]" />
                    </div>
                    <p className="absolute top-[22%] left-[35px] translateX-[-50%] translateY-[-50%] text-white text-[30px]  font-yellowtail">Natural!!</p>
                    <h4 className="absolute top-[33%] left-[35px] translateX-[-50%] translateY-[-50%] text-[35px] text-white font-bold w-[50%]">Get Garden Fresh Fruits</h4>
                </div>
                <div className="relative">
                    <div className="w-[532px] h-[367px]">
                        <img src={fr} alt="" className="w-[100%]" />
                    </div>
                    <p className="absolute top-[22%] left-[35px] translateX-[-50%] translateY-[-50%] text-[#7EB693] text-[30px]  font-yellowtail">Offer!!</p>
                    <h4 className="absolute top-[33%] left-[35px] translateX-[-50%] translateY-[-50%] text-[35px] font-bold w-[45%] text-[#274C5B]">Get 10% off
                    on Vegetables</h4>
                </div>
            </div>
        </section>
    );
};
