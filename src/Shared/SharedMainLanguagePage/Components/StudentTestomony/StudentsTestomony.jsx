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
const StudentsTestomony = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div className="2xl:max-w-[1680px] bg-[#F6F3F3] lg:px-10 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col py-[112px]">
      <div className="min-h-[518px]  mx-auto flex justify-center flex-col items-center">
        <h1 className="text-stone-900 text-center text-[60px] mb-8 font-bold max-lg:text-2xl">
          Hear it from the Learners
        </h1>
        <div className="  w-full ">
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
            className="mySwiper mx-auto flex justify-center  items-center max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] xl:max-w-[1150px] w-full max-sm:max-h-full max-sm:w-[326px] max-sm:h-[350px] p-4 2xl:w-full 3xl:max-w-[1440px]"
          >
            <SwiperSlide className="flex justify-center items-center max-sm:w-[326px] max-sm:h-[335px] ">
              <div className="flex flex-col  bg-white rounded-2xl shadow-md m-2 transition duration-300 hover:shadow-xl lg:p-8 p-4 max-w-[404px]">
                <div className="text-sm text-stone-900">
                  “Spanish I have done my Spanish A1 & A2 from The Language
                  Network. I have an amazing experience with the teachers. They
                  teach from the deep down of their soul. Anytime they are ready
                  to help. Specially Amrita Iyer is very very helpful to learn
                  Spanish. Thank you The Language Network!!!”
                </div>
                <div className="flex gap-2.5 mt-10">
                  <Image
                    className="w-20 h-20 rounded-full"
                    alt="studenPIc"
                    src={studentPic}
                  />
                  <div className="flex flex-col flex-1 self-start">
                    <div className="text-xl font-bold text-stone-900">
                      Komal Patil
                    </div>
                    <div className="mt-1 text-base font-medium text-neutral-500">
                      MBA in Marketing
                    </div>
                    <div className="flex gap-1.5 pr-20 mt-1">
                      <Rating
                        className=" text-[#FFC107] text-nowrap text-[18px]"
                        initialRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center max-sm:w-[326px] max-sm:h-[335px] ">
              <div className="flex flex-col  bg-white rounded-2xl shadow-md m-2 transition duration-300 hover:shadow-xl lg:p-8 p-4 max-w-[404px]">
                <div className="text-sm text-stone-900">
                  “Spanish I have done my Spanish A1 & A2 from The Language
                  Network. I have an amazing experience with the teachers. They
                  teach from the deep down of their soul. Anytime they are ready
                  to help. Specially Amrita Iyer is very very helpful to learn
                  Spanish. Thank you The Language Network!!!”
                </div>
                <div className="flex gap-2.5 mt-10">
                  <Image
                    className="w-20 h-20 rounded-full"
                    alt="studenPIc"
                    src={studentPic}
                  />
                  <div className="flex flex-col flex-1 self-start">
                    <div className="text-xl font-bold text-stone-900">
                      Komal Patil
                    </div>
                    <div className="mt-1 text-base font-medium text-neutral-500">
                      MBA in Marketing
                    </div>
                    <div className="flex gap-1.5 pr-20 mt-1">
                      <Rating
                        className=" text-[#FFC107] text-nowrap text-[18px]"
                        initialRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center max-sm:w-[326px] max-sm:h-[335px] ">
              <div className="flex flex-col  bg-white rounded-2xl shadow-md m-2 transition duration-300 hover:shadow-xl lg:p-8 p-4 max-w-[404px]">
                <div className="text-sm text-stone-900">
                  “Spanish I have done my Spanish A1 & A2 from The Language
                  Network. I have an amazing experience with the teachers. They
                  teach from the deep down of their soul. Anytime they are ready
                  to help. Specially Amrita Iyer is very very helpful to learn
                  Spanish. Thank you The Language Network!!!”
                </div>
                <div className="flex gap-2.5 mt-10">
                  <Image
                    className="w-20 h-20 rounded-full"
                    alt="studenPIc"
                    src={studentPic}
                  />
                  <div className="flex flex-col flex-1 self-start">
                    <div className="text-xl font-bold text-stone-900">
                      Komal Patil
                    </div>
                    <div className="mt-1 text-base font-medium text-neutral-500">
                      MBA in Marketing
                    </div>
                    <div className="flex gap-1.5 pr-20 mt-1">
                      <Rating
                        className=" text-[#FFC107] text-nowrap text-[18px]"
                        initialRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center max-sm:w-[326px] max-sm:h-[335px] ">
              <div className="flex flex-col  bg-white rounded-2xl shadow-md m-2 transition duration-300 hover:shadow-xl lg:p-8 p-4 max-w-[404px]">
                <div className="text-sm text-stone-900">
                  “Spanish I have done my Spanish A1 & A2 from The Language
                  Network. I have an amazing experience with the teachers. They
                  teach from the deep down of their soul. Anytime they are ready
                  to help. Specially Amrita Iyer is very very helpful to learn
                  Spanish. Thank you The Language Network!!!”
                </div>
                <div className="flex gap-2.5 mt-10">
                  <Image
                    className="w-20 h-20 rounded-full"
                    alt="studenPIc"
                    src={studentPic}
                  />
                  <div className="flex flex-col flex-1 self-start">
                    <div className="text-xl font-bold text-stone-900">
                      Komal Patil
                    </div>
                    <div className="mt-1 text-base font-medium text-neutral-500">
                      MBA in Marketing
                    </div>
                    <div className="flex gap-1.5 pr-20 mt-1">
                      <Rating
                        className=" text-[#FFC107] text-nowrap text-[18px]"
                        initialRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center max-sm:w-[326px] max-sm:h-[335px] ">
              <div className="flex flex-col  bg-white rounded-2xl shadow-md m-2 transition duration-300 hover:shadow-xl lg:p-8 p-4 max-w-[404px]">
                <div className="text-sm text-stone-900">
                  “Spanish I have done my Spanish A1 & A2 from The Language
                  Network. I have an amazing experience with the teachers. They
                  teach from the deep down of their soul. Anytime they are ready
                  to help. Specially Amrita Iyer is very very helpful to learn
                  Spanish. Thank you The Language Network!!!”
                </div>
                <div className="flex gap-2.5 mt-10">
                  <Image
                    className="w-20 h-20 rounded-full"
                    alt="studenPIc"
                    src={studentPic}
                  />
                  <div className="flex flex-col flex-1 self-start">
                    <div className="text-xl font-bold text-stone-900">
                      Komal Patil
                    </div>
                    <div className="mt-1 text-base font-medium text-neutral-500">
                      MBA in Marketing
                    </div>
                    <div className="flex gap-1.5 pr-20 mt-1">
                      <Rating
                        className=" text-[#FFC107] text-nowrap text-[18px]"
                        initialRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center max-sm:w-[326px] max-sm:h-[335px] ">
              <div className="flex flex-col  bg-white rounded-2xl shadow-md m-2 transition duration-300 hover:shadow-xl lg:p-8 p-4 max-w-[404px]">
                <div className="text-sm text-stone-900">
                  “Spanish I have done my Spanish A1 & A2 from The Language
                  Network. I have an amazing experience with the teachers. They
                  teach from the deep down of their soul. Anytime they are ready
                  to help. Specially Amrita Iyer is very very helpful to learn
                  Spanish. Thank you The Language Network!!!”
                </div>
                <div className="flex gap-2.5 mt-10">
                  <Image
                    className="w-20 h-20 rounded-full"
                    alt="studenPIc"
                    src={studentPic}
                  />
                  <div className="flex flex-col flex-1 self-start">
                    <div className="text-xl font-bold text-stone-900">
                      Komal Patil
                    </div>
                    <div className="mt-1 text-base font-medium text-neutral-500">
                      MBA in Marketing
                    </div>
                    <div className="flex gap-1.5 pr-20 mt-1">
                      <Rating
                        className=" text-[#FFC107] text-nowrap text-[18px]"
                        initialRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* swiper buttons */}
        <div className="mt-8 max-sm:scale-75 flex gap-x-[16px]">
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
