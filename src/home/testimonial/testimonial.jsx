import React from "react";
import bg from "../../assets/saying.svg";
import userImg from "../../assets/userSaying.svg";

export const Testimonial = () => {
  return (
    <section
      className=" bg-cover bg-center bg-no-repeat mt-[100px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex w-[1000px] h-[938px] mx-auto flex-col items-center justify-center pt-[30px] gap-[50px]">
        <div className="flex flex-col gap-6">
            <div className=" flex flex-col items-center justify-center gap-5">
                  <p className="text-[36px] text-lightGreen font-yellowtail font-medium">Testimonial</p>
                  <h1 className="text-[50px] text-darkBlue font-bold">What Our Customer Saying?</h1>

                  <div className="w-[115px] h-[115px] rounded-[50px]">
                    <img src={userImg} alt="" />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4">
                      <div className="rating">
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#FFD43B" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#FFD43B" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#FFD43B" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#FFD43B" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#FFD43B" }}
                          ></i>
                      </div>
                    <p className="text-[18px] font-medium text-darkBlue w-[58%] text-center leading-7">
                      Simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been.
                    </p>
                  </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h4 className="text-[25px] text-darkBlue font-bold">Sara Taylor</h4>
              <p className="text-[16px] font-medium text-C6">Consumer</p>
              <div className="flex items-center gap-2">
                <p className="w-[10px] h-[10px] bg-[#C4C4C4] rounded-[50px]"></p>
                <p className="w-[10px] h-[10px] bg-[#7EB693] rounded-[50px]"></p>
                <p className="w-[10px] h-[10px] bg-[#C4C4C4] rounded-[50px]"></p>
              </div>
            </div>
        </div>
        <div className="flex  items-center justify-center gap-6 border-t-2 pt-[25px]">
          <div className="w-[160px] h-[160px] rounded-[50%] border-2 border-[#7EB693] flex flex-col items-center justify-center bg-F1">
            <h1 className="text-[40px] text-darkBlue font-extrabold">100%</h1>
            <p className="text-[16px] text-darkBlue font-semibold">Organic</p>
          </div>
          <div className="w-[160px] h-[160px] rounded-[50%] border-2 border-[#7EB693] flex flex-col items-center justify-center bg-F1">
            <h1 className="text-[40px] text-darkBlue font-extrabold">285</h1>
            <p className="text-[16px] text-darkBlue font-semibold">
              Active Product
            </p>
          </div>
          <div className="w-[160px] h-[160px] rounded-[50%] border-2 border-[#7EB693] flex flex-col items-center justify-center bg-F1">
            <h1 className="text-[40px] text-darkBlue font-extrabold">350+</h1>
            <p className="text-[16px] text-darkBlue font-semibold">
              Organic Orchads
            </p>
          </div>
          <div className="w-[160px] h-[160px] rounded-[50%] border-2 border-[#7EB693] flex flex-col items-center justify-center bg-F1">
            <h1 className="text-[40px] text-darkBlue font-extrabold">25+</h1>
            <p className="text-[16px] text-darkBlue font-semibold">
              Years of Farming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
