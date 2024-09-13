"use client";
import studentPic from "../../../../Assets/Homepage/Testomony/testomony.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useGetAllTestimonialsQuery } from "../../../../store/apiSlice";
const StudentsTestomony = ({ language, context }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  const { data } = useGetAllTestimonialsQuery({
    language: language,
    context: context,
  });
  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);
  return (
    <div className="w-full bg-[#F6F3F3] sm:bg-white 4xl:bg-[#F6F3F3] lg:px-10 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col pt-[60px] sm:pt-[80px] pb-[40px]">
      <div className="-mt-[20px]  mx-auto flex justify-center flex-col items-center lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
        <h1 className="text-stone-900 mx-16 text-center text-[32px]/[39px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] sm:font-bold mb-4 font-semibold max-lg:text-2xl">
          Hear It From The Learners
        </h1>
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
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2,
              },
              368: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper mx-auto flex justify-center items-center max-sm:max-h-full w-[326px] sm:w-[404px] lg:w-[808px] xl:w-[1264px] 2xl:w-[1264px] 4xl:w-[1680px] h-[350px] p-4 "
          >
            {data &&
              data.map((student, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center max-sm:w-[326px] w-[404px] h-[335px] "
                  >
                    <div className="flex flex-col justify-between bg-white rounded-2xl 4xl:shadow-md m-2 p-[20px] transition duration-300 hover:shadow-xl lg:p-8 max-w-[404px] h-[335px]">
                      <div className="text-sm text-stone-900">
                        “{student.description.slice(0, 250)}...”
                      </div>
                      <div className="flex gap-2.5">
                        <Image
                          alt="studenPIc"
                          height={300}
                          width={300}
                          src={student.image}
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="flex flex-col flex-1 self-start">
                          <div className="text-xl font-bold text-stone-900">
                            {student.name}
                          </div>
                          <div className="mt-1 text-base font-medium text-neutral-500">
                            {student.profession}
                          </div>
                          <div className="flex gap-1.5 pr-20 mt-1">
                            <Rating
                              className=" text-[#FFC107] text-nowrap text-[18px]"
                              initialRating={5}
                              readonly
                              emptySymbol={<FaRegStar />}
                              fullSymbol={<FaStar />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>

          {/* {data && ( */}
          <div className="mt-8 max-sm:scale-75 flex items-center justify-center gap-x-[16px]">
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
              <FaArrowRight />
            </button>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default StudentsTestomony;
