"use client";
import step1 from "../../../public/homepage/steps/step1.png";
import step2 from "../../../public/homepage/steps/step2.png";
import step3 from "../../../public/homepage/steps/step3.png";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import FluencyCultureCard from "./FluencyCultureCard";
import React, { useState } from "react";
import Image from "next/image";
import RightArrow from "../../../public/homepage/steps/RightArrow.png";

const RegisterCard = ({ id, title, description, img,currentPage }) => {
  return (
    <div className="relative mx-auto bg-white border border-[#1F9F90] rounded-[8px] shadow-md h-[400px] w-[287px] gap-[6px]">
      <p className="mb-4 mt-6 mx-[20px] w-[28px] h-[28px] flex items-center justify-center bg-[#1F9F90] text-white rounded-[4px]">
        {id}
      </p>
      <h2 className="text-[30px]/[36px] font-[600] mb-2 mx-[20px]">{title}</h2>
      <p className="text-gray-600 mb-4 text-[14px]/[17px] font-[400] mx-[20px]">
        {description}
      </p>
      <Image
        src={img}
        height={196}
        width={278}
        alt="Illustration"
        className="w-full"
      />
      { (id===2 || id===3) &&
        <Image
          src={RightArrow}
          height={20}
          width={12}
          alt="Left arrow"
          className={`${currentPage===0 ||id===3 ? "lg:hidden":""} absolute left-[10px] top-[220px] rotate-180`}
        />
      }
      { (id===1 || id===2) &&
        <Image
          src={RightArrow}
          height={20}
          width={12}
          alt="Right arrow"
          className={`${currentPage===1 || id===1 ? "lg:hidden ":""} xl:hidden absolute right-[10px] top-[220px]`}
        />
      }
    </div>
  );
};

const FluencyCarrerCulture = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  const datas = [
    {
      id: 1,
      title: "Register with us",
      description:
        "Complete our form with your details and language preference to register. Our team will then assist you with online classes, study materials, and more!",
      img: step1,
    },
    {
      id: 2,
      title: "Experience a free demo class",
      description:
        "Discover the power of learning with our complimentary demo class at your convenient time!",
      img: step2,
    },
    {
      id: 3,
      title: "Get started",
      description:
        "Love our demo- now pick and choose batches according to your flexibility and get started on your learning adventure!",
      img: step3,
    },
  ];
  return (
    <div className="4xl:bg-[#F6F3F3] pb-[10px]">
      <section className="">
        <div className="w-full flex justify-center  items-center lg:h-[321px] h-[256px] bg-primary-color flex-col">
          <h1 className="text-center text-neutral-50 lg:text-[45px] text-3xl px-8 font-bold lg:mb-[25px]">
            Fluency, Culture, Career & Beyond
          </h1>
          <h2 className="lg:text-[28px] p-4 text-[18px] text-center  text-neutral-50">
            From learning a new language to living it!
          </h2>
        </div>
      </section>

      <section className="pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[42px] xl:pt-[52px] 2xl:pt-[56px] 4xl:pt-[112px] flex flex-col justify-center items-center 2xl:gap-[48px]">
        <div className="flex flex-col justify-center items-center 2xl:gap-[8px]">
          <h1 className="text-stone-900 text-[24px]/[29px] sm:text-[30px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[72px] font-bold  text-center ">
            Let&apos;s embark on a Language Trip!
          </h1>
          <h1 className="text-neutral-500 2xl:text-[32px]/[38.73px] font-medium  text-center mb-2">
            Here are the steps
          </h1>
        </div>
        <div className="2xl:w-[1264px] 4xl:w-[1680px] hidden 2xl:flex flex-wrap justify-center 2xl:gap-[16px] 4xl:gap-[18px] items-center">
          {datas.map((data) => {
            return (
              <FluencyCultureCard
                key={data.id}
                datas={data}
              ></FluencyCultureCard>
            );
          })}
        </div>
        <div className="2xl:hidden">
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

              368: {
                slidesPerView: 1,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper mx-auto flex justify-center  items-center max-w-[356px] md:max-w-[395px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px] mt-[18px] lg:mt-[36px] mb-[48px]"
          >
            {datas?.map((data, index) => (
              <SwiperSlide key={index}>
                <RegisterCard
                  id={data.id}
                  title={data.title}
                  description={data.description}
                  img={data.img}
                  currentPage={currentPage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default FluencyCarrerCulture;
