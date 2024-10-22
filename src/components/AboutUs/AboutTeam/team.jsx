import React from "react";
import { data } from "../../../data/data";

export const Team = () => {
  return (
    <section className="Team pt-[30px]">
      <div className="container flex flex-col items-center gap-4">
        <p className="font-yellowtail text-lightGreen text-[36px] font-[400]">Team</p>
        <h1 className="text-[50px] text-darkBlue font-bold font-roboto">Our Organic Experts</h1>
        <p className="text-C6 text-[18px] font-roboto leading-6 w-[70%] text-center">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="team-card grid grid-cols-3 gap-4 pt-[20px]">
          {data.aboutTeam.map((item) => (
            <div className="bg-offWhite rounded-[30px] h-[550px] hover:bg-white hover:shadow-xl" key={item.id}>
              <div className="flex flex-col gap-5">
                    <span>
                      <img src={item.img} alt="" />
                    </span>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex flex-col">
                        <h6 className="text-[25px] font-bold text-darkBlue font-roboto">{item.title}</h6>
                        <p className="text-lightGreen text-[18px] font-yellowtail font-[400]">{item.info}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={item.app} alt="" />
                        <img src={item.app1} alt="" />
                        <img src={item.app2} alt="" />
                      </div>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
