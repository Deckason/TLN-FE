import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import GetStarted from "../buttons/exams/GetStarted";

const ExamHelp = ({ data }) => {
  return (
    <div className="mt-12 2xl:w-[1280px] 3xl:w-[1530px] 4xl:w-[1680px] lg:mx-10 mx-auto 2xl:mx-auto  relative  flex justify-center items-center flex-col lg:mb-[112px]">
      <div className="text-black text-[24px]/[29px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] text-center font-bold mb-[20px]">
        {data.title}
      </div>
      <div className="w-full justify-center items-center flex-col flex">
        <div className="lg:p-5 w-full xl:w-full justify-center items-center flex-col flex">
          <div className="hidden lg:grid grid-cols-3 gap-5">
            {data.data.slice(0, 3).map((card) => (
              <div
                className="w-fit shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-5 lg:px-[32px] lg:py-[48px] 2xl:max-w-[535px] xl:max-w-[415px] lg:max-w-[380px]"
                key={card.title}
              >
                <div className="text-[24px]/[29px] font-semibold">
                  {card.title}
                </div>
                <div className="text-[20px]/[28px] text-[#6E7191] lg:mt-[10px]">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-5 mt-5">
            {data.data.slice(3).map((card) => (
              <div
                className="w-fit shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-5 lg:px-[32px] lg:py-[48px] lg:max-w-[580px] xl:max-w-[632px] 2xl:max-w-[815px]"
                key={card.title}
              >
                <div className="text-[24px]/[29px] font-semibold">
                  {card.title}
                </div>
                <div className="text-[20px]/[28px] text-[#6E7191] lg:mt-[10px]">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="lg:hidden w-full"
            // style={{ overflow: 'visible' }}
          >
            {data.data.map((card) => (
              <SwiperSlide key={card.title} className="px-4 py-8 lg:px-0 lg:py-0">
                <div className="lg:hidden w-full shadow-examShadow hover:shadow-xl transition duration-300 rounded-lg p-5">
                  <div className="text-[24px]/[29px] font-semibold mb-3 text-center">
                    {card.title}
                  </div>
                  <div className="text-[20px]/[28px] text-[#6E7191] text-center">
                    {card.description}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="lg:mt-[8px]">
        <GetStarted />
      </div>
    </div>
  );
};

export default ExamHelp;
