"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";

const StudentsTestomony = (data) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="py-[112px] bg-[#F6F3F3]">
      <div className="min-h-[518px] max-w-[1700px]  mx-auto flex justify-center flex-col items-center">
        <h1 className="text-stone-900 text-2xl mb-[48px] font-bold">
          {data.data.title}
        </h1>
        <div className="mx-20 ">
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
            breakpoints={{
              1680: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              368: { slidesPerView: 1 },
            }}
            className="mySwiper mx-auto flex justify-center  items-center max-w-[305px] md:max-w-[700px]  lg:max-w-[1000px] xl:max-w-[1200px]  2xl:max-w-[1200px] 3xl:max-w-[1440px]"
          >
            {data.data.testimonial.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="flex justify-center items-center"
              >
                <div className="flex flex-col shadow-md hover:shadow-xl transition duration-300 m-2 bg-white rounded-2xl lg:p-8 p-4 max-w-[404px]">
                  <div className="text-base text-stone-900">
                    {testimonial.text}
                  </div>
                  <div className="flex gap-2.5 mt-10">
                    <Image
                      className="w-20 h-20 rounded-full"
                      alt="studentPic"
                      src={testimonial.studentImage}
                    />
                    <div className="flex flex-col flex-1 self-start">
                      <div className="text-xl font-bold text-stone-900">
                        {testimonial.studentName}
                      </div>
                      <div className="mt-1 text-base font-medium text-neutral-500">
                        {testimonial.course}
                      </div>
                      <div className="flex gap-1.5 pr-20 mt-1">
                        <Rating
                          className=" text-[#FFC107] text-nowrap text-[18px]"
                          initialRating={testimonial.rating}
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
