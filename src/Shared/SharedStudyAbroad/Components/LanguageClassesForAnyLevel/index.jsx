"use client";
import ClassLevelCard from "./ClassLevelCard";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";

const LanguageClassesForAnyLevel = ({ ClassesForAnyLevel }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div className=" my-[112px] w-full mx-auto">
      <div className="text-black max-md:text-2xl lg:text-4xl max-lg:text-3xl text-[60px] mb-12 text-center font-bold ">
        {ClassesForAnyLevel?.Language} Classes for Any Level
      </div>
      <div
        className={`${
          ClassesForAnyLevel?.CardData?.length === 3 && "xl:grid-cols-3"
        } ${ClassesForAnyLevel?.CardData?.length === 4 && "xl:grid-cols-4"} ${
          ClassesForAnyLevel?.CardData?.length === 1 ? "grid" : ""
          } xl:grid max-md:hidden 2xl:max-w-[1640px] max-w-8xl justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto max-sm:px-4 w-full lg:gap-[18px] md:grid-cols-2  items-center mt-[48px] `}
      >
        {ClassesForAnyLevel?.CardData?.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
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
          {ClassesForAnyLevel?.CardData?.map((data, index) => (
            <SwiperSlide key={index}>
              <ClassLevelCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LanguageClassesForAnyLevel;
