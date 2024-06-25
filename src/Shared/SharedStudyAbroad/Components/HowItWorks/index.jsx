"use client";
import Image from "next/image";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import HowItWorksCard from "./HowItWorksCard";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
const HowItWorks = ({ HowItWorksCardData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div className="bg-[#F6F3F3] w-full flex justify-center flex-col items-center py-[50px] md:py-[112px]">
      <section className="">
        <h1 className="text-stone-900 text-[40px] font-bold  text-center mb-2">
          How it works?
        </h1>

        <div className=" md:flex hidden flex-wrap justify-center gap-1 mx-auto w-full lg:gap-[18px]   items-center mt-[48px] ">
          {HowItWorksCardData?.map((data) => {
            return <HowItWorksCard key={data.id} datas={data}></HowItWorksCard>;
          })}
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
            className="mySwiper mx-auto flex justify-center  items-center max-w-[356px] md:max-w-[700px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"
          >
            {HowItWorksCardData?.map((data, index) => (
              <SwiperSlide key={index}>
                <HowItWorksCard datas={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className=" mt-14 max-md:hidden">
        <BookAFreeDemoButton />
      </div>
    </div>
  );
};

export default HowItWorks;
