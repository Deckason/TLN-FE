"use client";
import "../../../../css/Custom.css";
import girlRashi from "../../../../Assets/Homepage/UpComingCourseCard/girlRashi.png";
import girlIshwari from "../../../../Assets/Spanish/Ishwari-1 1.png";
import girlPrachi from "../../../../Assets/Spanish/Prachi-1.png";
import Image from "next/image";
import UpcomingBatchCard from "./UpcomingBatchCard";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const UpcomingBathches = () => {
  const CardData = [
    {
      id: 1,
      name: "Abhinav Kaushal",
      language: "French",
      img: girlRashi,
      batch: "March 20th 2024",
      seats: "07",
      timing: "SAT 8:00 pm - 10:00 pm | 2 hrs",
      certificate: "Beginners French | A1",
    },
    {
      id: 2,
      name: "T. Vijayan Joseph Scott",
      language: "French",
      img: girlIshwari,
      batch: "March 15th 2024",
      seats: "07",
      timing: "SAT 10:00 pm - 11:00 pm | 1 hrs",
      certificate: "Intermediate French | A1",
    },
    {
      id: 3,
      name: "Anchal Gupta",
      language: "French",
      img: girlPrachi,
      batch: "March 20th 2024",
      seats: "07",
      timing: "SAT 9:00 pm - 11:00 pm | 3 hrs",
      certificate: "Advanced French | A1",
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div className="my-[12px] -mt-[94px] flex justify-center flex-col items-center">
      <h1 className="my-[40px] text-center self-stretch text-stone-900 2xl:text-[60px]/[72.6px] xl:text-[40px] max-md:text-2xl max-xl:text-5xl text-[24px] font-bold  ">
        Upcoming Batches
      </h1>
      <section
        id="upComingCourseMonths"
        className="flex items-center justify-center flex-wrap lg:gap-[16px]  p-[8px] w-fit mx-auto rounded-lg shadow-xl shadow-neutral-color/5 mb-[32px]"
      >
        <button className="upcomingCourseActive">January</button>
        <button className="upcomingCourseDeActive">February</button>
        <button className="upcomingCourseDeActive">March</button>
      </section>
      <section
        className="2xl:hidden flex
      justify-center items-center w-full mx-auto lg:min-w-[1000px] 2xl:max-w-[1681px] flex-col gap-4  "
        id="UpcomingCourseCards"
      >
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
          className=" mySwiper mx-auto flex justify-center  items-center max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] xl:max-w-[1150px] w-full max-sm:max-h-fit  2xl:w-full 4xl:max-w-[1440px]"
        >
          {CardData.map((cardData, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <UpcomingBatchCard data={cardData} />
            </SwiperSlide>
          ))}
        </Swiper>

      </section>

      <section
        className="hidden 2xl:flex
      justify-center items-center w-full mx-auto lg:min-w-[1000px] 2xl:max-w-[1681px] flex-col gap-4  "
        id="UpcomingCourseCards"
      >
        <div className="mx-auto flex justify-center items-center gap-4 max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] xl:max-w-[1150px] w-full max-sm:max-h-fit  2xl:w-full 3xl:max-w-[1440px]">
          {CardData.map((cardData, i) => (
            <div key={i} className="flex justify-center items-center ">
              <UpcomingBatchCard data={cardData} />
            </div>
          ))}
        </div>
      </section>
      {/* load more button will load more datas */}
      <div className="w-full max-lg:hidden flex justify-center mt-6">
        {" "}
        <button className="px-[32px] shadow-md transition duration-300 hover:shadow-xl  text-primary-color py-3.5 rounded-lg border border-primary-color font-medium text-2xl text justify-center focus:outline-none hover:bg-primary-color focus:bg-primary-color hover:text-white focus:text-white items-center gap-2.5 inline-flex">
          Load more
        </button>
      </div>
      {/* swiper buttons */}
      <div className=" hidden max-lg:flex gap-x-[16px] mt-[55px] max-sm:scale-75">
        <button
          ref={navigationPrevRef}
          className="w-16 h-[58px] px-5 py-4 rounded-lg border-2 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color justify-center items-center gap-2.5 inline-flex"
        >
          <FaArrowRight className="rotate-180" />
        </button>
        <button
          ref={navigationNextRef}
          className="w-16  h-[58px]  px-5 py-4 rounded-lg border-2 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color justify-center items-center gap-2.5 inline-flex"
        >
          <FaArrowRight className="" />
        </button>
      </div>
    </div>
  );
};

export default UpcomingBathches;
