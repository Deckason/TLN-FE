"use client";
import OnlineClassCard from "./OnlineClassCard";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
const OnlineLanguageClass = ({ OnlineLanguageClass }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div className="mb-[30px] sm:mb-[112px]">
      <div className="text-black text-[32px]/[39px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] mb-4 lg:mb-12 text-center font-bold ">
        Online {OnlineLanguageClass?.Language} classes
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl max-md:hidden flex-wrap justify-center gap-1  h-full max-md:gap-5 md:gap-2 max-md:px-4 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {OnlineLanguageClass?.CardData?.map((data, index) => (
          <OnlineClassCard data={data} key={index} />
        ))}
      </div>
      <div className="md:hidden">
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          onSlideChange={(swiper) => {
            setCurrentPage(swiper.activeIndex);
          }}
          // slidesPerView={4}
          breakpoints={{
            1680: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            368: {
              slidesPerView: 1,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper mx-auto flex justify-center  items-center max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"
        >
          {OnlineLanguageClass?.CardData?.map((data, index) => (
            <SwiperSlide key={index}>
              <OnlineClassCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OnlineLanguageClass;
