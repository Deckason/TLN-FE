"use client";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import HowItWorksCard from "./HowItWorksCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import AdultsStartedBtn from "./../../../../Shared/buttons/adults/AdultsStartedBtn";

const HowItWorks = ({ HowItWorksCardData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="bg-[#F6F3F3] w-full flex justify-center flex-col items-center py-[50px] md:py-[112px]">
      <section className="">
        <h1 className="text-stone-900 text-[24px] xl:text-[40px] 4xl:text-[60px] font-bold text-center mb-2">
          How it works?
        </h1>

        <div className="3xl:flex hidden flex-wrap justify-center gap-1 mx-auto w-full lg:gap-[18px] items-center mt-[48px]">
          {HowItWorksCardData?.map((data) => {
            return <HowItWorksCard key={data.id} datas={data}></HowItWorksCard>;
          })}
        </div>

        <div className="3xl:hidden">
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
                slidesPerView: 1,
              },
            }}
            className="mySwiper mx-auto flex justify-center items-center max-w-[356px] md:max-w-[395px] lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full 2xl:w-full 3xl:max-w-[1440px]"
          >
            {HowItWorksCardData?.map((data, index) => (
              <SwiperSlide key={index}>
                <HowItWorksCard datas={data} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="hidden lg:flex justify-center  items-center mr-10 gap-5 mt-10 ">
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
      </section>
      <div className="mt-8 hidden 3xl:block">
        <AdultsStartedBtn />
      </div>
    </div>
  );
};

export default HowItWorks;
