"use client";
import PreapareForExamCard from "./PreapareForExamCard";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
const PrepareForLanguageExam = ({ LanguageExams }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div>
      <div className="text-black max-md:text-2xl lg:text-4xl max-lg:text-3xl xl:text-[60px] mb-12 text-center font-bold ">
        Prepare for {LanguageExams?.Language} Exams
      </div>
      <div
        className={`${
          LanguageExams?.CardData?.length === 3 && "xl:grid-cols-3"
        } ${LanguageExams?.CardData?.length === 2 && "xl:grid-cols-2"} ${
          LanguageExams?.CardData?.length === 1 && "xl:flex"
        }   2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 max-md:px-4 max-md:hidden px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] `}
      >
        {LanguageExams?.CardData?.map((data, index) => (
          <div key={index} className="max-w-[548px]">
            <PreapareForExamCard data={data} key={index} />
          </div>
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
          className="mySwiper mx-auto max-md:flex justify-center  items-center max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"
        >
          {LanguageExams?.CardData?.map((data, index) => (
            <SwiperSlide key={index}>
              <PreapareForExamCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PrepareForLanguageExam;