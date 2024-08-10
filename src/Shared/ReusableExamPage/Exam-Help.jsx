import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

const ExamHelp = ({ data }) => {
  return (
    <div className="w-full mt-10 justify-center items-center flex-col flex p-10">
      <div className="p-5 w-full xl:w-full justify-center items-center flex-col flex">
        <div className="lg:text-[40px] text-[20px] xl:text-[40px] mb-10 font-bold text-center">
          {data.title}
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {data.data.slice(0, 3).map((card) => (
            <div
              className="w-fit shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-5 2xl:max-w-[535px] xl:max-w-[415px] lg:max-w-[380px]"
              key={card.title}
            >
              <div className="lg:text-[24px] xl:text-[24px] text-[12px]  font-semibold">{card.title}</div>
              <div className="lg:text-[20px] xl:text-[20px] text-[10px] text-[#6E7191]">
                {card.description}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-5 mt-5">
          {data.data.slice(3).map((card) => (
            <div
              className="w-fit shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-5 lg:max-w-[580px] xl:max-w-[632px] 2xl:max-w-[815px]"
              key={card.title}
            >
              <div className="lg:text-[24px] xl:text-[24px] text-[12px] font-semibold">{card.title}</div>
              <div className="lg:text-[20px] xl:text-[20px] text-[10px] text-[#6E7191]">
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
        >
          {data.data.map((card) => (
            <SwiperSlide key={card.title}>
              <div className="lg:hidden w-full shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-5">
                <div className="text-[20px] font-semibold mb-3 text-center">{card.title}</div>
                <div className="text-[16px] text-[#6E7191] text-center">{card.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExamHelp;
