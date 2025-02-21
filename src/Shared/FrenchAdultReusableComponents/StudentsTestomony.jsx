"use client";
import studentPic from "@/Assets/Homepage/Testomony/testomony.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";
const StudentsTestomony = (data) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);

  return (
    <div className="py-[112px] bg-[#F6F3F3]">
      <div className="min-h-[518px] max-w-full  mx-auto flex justify-center flex-col items-center">
        <h1 className="text-stone-900 text-2xl mb-[48px] font-bold">
          Hear it from the Learners
        </h1>
        <div className="flex">
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
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              368: {
                slidesPerView: 1,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper max-h-[335px] lg:mx-auto mx-0 flex justify-start  items-center max-w-[375px] md:max-w-[700px]  lg:max-w-[1300px] xl:max-w-[1400px]  2xl:max-w-[1600px] 3xl:max-w-[1700px]"
          >
            {data.data.map((card) => (
              <SwiperSlide
                key={card.index}
                className="flex justify-center items-center"
              >
                <div className="flex flex-col h-[335px] bg-white rounded-2xl lg:p-8 p-4 max-w-[404px]">
                  <div className="text-base text-stone-900">{card.para}</div>
                  <div className="flex gap-2.5 mt-10">
                    <Image
                      className="w-20 h-20 rounded-full"
                      alt="studenPIc"
                      src={studentPic}
                    />
                    <div className="flex flex-col flex-1 self-start">
                      <div className="text-xl font-bold text-stone-900">
                        {card.name}
                      </div>
                      <div className="mt-1 text-base font-medium text-neutral-500">
                        {card.Dept}
                      </div>
                      <div className="flex gap-1.5 pr-20 mt-1">
                        <Rating
                          className=" text-[#FFC107] text-nowrap text-[18px]"
                          initialRating={card.Rating}
                          readonly
                          emptySymbol={<FaRegStar />}
                          fullSymbol={<FaStar />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* swiper buttons */}
        <div className="mt-[48px] flex gap-x-[16px]">
          <button
            ref={navigationPrevRef}
            className="w-16 h-[58px] px-5 py-4 rounded-lg border-2 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color justify-center items-center gap-2.5 inline-flex"
          >
            <FaArrowRight className="rotate-180" />
          </button>
          <button
            ref={navigationNextRef}
            className="w-16 h-[58px] px-5 py-4 rounded-lg border-2 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color justify-center items-center gap-2.5 inline-flex"
          >
            <FaArrowRight className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentsTestomony;
