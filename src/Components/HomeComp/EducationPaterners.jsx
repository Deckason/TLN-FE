'use client'
import React from "react";
import Image from "next/image";
import logo1 from "../../Assets/Homepage/Educationalbar/image_1.png";
import logo2 from "../../Assets/Homepage/Educationalbar/image_2.png";
import logo3 from "../../Assets/Homepage/Educationalbar/image_3.png";
import logo4 from "../../Assets/Homepage/Educationalbar/image_4.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useState } from "react";
const EducationPartners = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  const slides = [
    {
      src:logo1
    },
    {
      src:logo2
    },
    {
      src:logo3
    },
    {
      src:logo4
    },
  ]
  return (
    <div>
      <div className="my-[20px] lg:my-[50px] 2xl:my-[112px] max-w-[1681px]  mx-auto flex justify-center items-center ">
        <section>
          <div>
            <h1 className="text-stone-900 text-[24px]/[29px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[72px] font-bold text-center mb-[20.9px]">
              Our Educational Partners
            </h1>
          </div>
          {/* <div className="flex  flex-wrap justify-center items-center w-full gap-[30px]">
            <Image className="lg:w-full lg:flex " alt="logo" src={logo1} />
          </div> */}
          <div>
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
            className="mySwiper mx-auto flex justify-center  items-center  lg:w-[1000px] w-[350px] xl:w-[1270px] gap-[10px]"
          >
            {
              slides.map((item,i)=>(
            <SwiperSlide key={i}>
               <Image className="lg:w-full lg:flex h-[80px] lg:h-[90px] xl:h-[110px] object-contain " alt="logo" src={item.src} />
            </SwiperSlide>

              ))
            }
          </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPartners;