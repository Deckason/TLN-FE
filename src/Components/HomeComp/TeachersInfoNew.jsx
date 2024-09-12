"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import studentPic from "../../Assets/Homepage/Testomony/testomony.png";
import Image from "next/image";
import { useGetAllTrainersQuery } from "../../store/apiSlice";
// import studentPic from "../../../../Assets/Homepage/Testomony/testomony.png";

const Slide = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  const { data: trainerDetails } = useGetAllTrainersQuery("");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <div className="w-full">
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
          slidesPerView="auto"
          breakpoints={{
            1920: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 2,
            },
            368: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper mx-auto flex justify-center items-center max-sm:max-h-full w-[326px] sm:w-[404px] lg:w-[808px] xl:w-[1300px]  4xl:w-[1680px] p-4 "
        >
          {trainerDetails &&
            trainerDetails.map((trainer, index) => {
              const isHovered = index === hoveredIndex;
              return (
                <SwiperSlide
                  key={index}
                  className={`flex justify-center items-center py-[20px]`}
                  // className={`flex justify-center items-center py-[20px] ${
                  //   index === 0 ? "ml-[20px]" : ""
                  // }  ${index === trainerDetails.length - 1 ? "mr-[20px]" : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col transition duration-300 hover:scale-105 relative h-[416px]">
                    <Image
                      width={300}
                      height={700}
                      className={`h-[416px] object-fill`}
                      alt="trainerPIc"
                      src={trainer.image}
                    />
                    {!isHovered && (
                      <p className="absolute bottom-[20px] text-white font-bold text-lg text-center left-0 right-0">
                        {trainer.name}
                      </p>
                    )}
                    {isHovered && (
                      <div class="cursor-pointer absolute inset-0 transition-all duration-300 gradient-bg flex flex-col justify-center items-center ">
                        <p class="text-white text-[40px] font-bold mx-4 text-center">
                          {trainer.name}
                        </p>
                        <p class="text-white text-[24px]">{trainer.language}</p>
                        <p class="text-white text-[12px] mx-[20px] text-justify mt-[10px]">
                          {trainer.description &&
                            trainer.description.slice(0, 400)}
                        </p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <div className="mt-8 max-sm:scale-75 flex gap-x-[16px] items-center justify-center ">
          <button
            ref={navigationPrevRef}
            className="w-16 h-[58px] px-5 py-4 rounded-lg border-2 transition duration-300 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color justify-center items-center gap-2.5 inline-flex"
          >
            <FaArrowRight className="rotate-180" />
          </button>
          <button
            ref={navigationNextRef}
            className="w-16 h-[58px] px-5 py-4 rounded-lg border-2 transition duration-30 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color justify-center items-center gap-2.5 inline-flex"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

const TeachersInfoNew = () => {
  return (
    <div className="pt-[40px] lg:pb-[112px] flex flex-col justify-center items-center px-[18px] sm:px-[72px] lg:px-10 2xl:px-[100px] 3xl:mx-auto">
      <div className="4xl:h-full flex-col justify-center items-center gap-4 4xl:gap-8 flex xl:z-30 w-full">
        <div className="flex-col justify-center items-center gap-[8px] flex text-[#1E1E1E] text-[32px]/[39px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[72px] font-bold">
          <p className="text-center">Inspiring. Dedicated. Knowledgeable.</p>
        </div>
        <div className="text-[#1E1E1E] text-[14px]/[17px] font-medium lg:text-lg lg:font-normal 2xl:text-[20px]/[28px] max-w-[330px] md:max-w-[540px] lg:max-w-[640px] xl:max-w-[840px] 3xl:max-w-[1120px]">
          <p className="text-justify xl:text-center">
            Meet our team of over 200+ internationally certified trainer who
            bring learning to life! With their expertise, they transform every
            lesson into a fun and engaging experience, creating a warm and
            welcoming environment where students thrive.
          </p>
          <br />
        </div>
      </div>
      <div>
        <Slide />
      </div>
    </div>
  );
};

export default TeachersInfoNew;
