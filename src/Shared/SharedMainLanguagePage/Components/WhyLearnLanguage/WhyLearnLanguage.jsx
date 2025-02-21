"use client";
import whyLearnFrench from "../../../../Assets/FrenchPage/FrenchMain/whyLearnFrench.svg";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import React, { useState } from "react";
import GetMainLangBannerBtn from "../../../buttons/languages/GetMainLangBannerBtn";
const WhyLearnLanguage = ({ WhyLearnLanguage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div className=" sm:my-[112px] w-full flex items-center flex-col justify-center">
      <div className="text-black text-[32px]/[39px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] sm:mb-12 text-center font-bold ">
        Why learn {WhyLearnLanguage?.Language}?
      </div>
      <div className="2xl:max-w-[1440px] mx-auto min-h-[1016px] flex-col justify-start items-center  h-full w-full max-md:gap-10 gap-14 inline-flex">
        <Image
          alt="whyLearnFrench"
          className="max-lg:w-[300px] mt-[80px] xl:hidden  mx-auto "
          src={whyLearnFrench}
        />
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
            className="mySwiper mx-auto flex justify-center  items-center max-w-[355px] md:max-w-[700px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"
          >
            <SwiperSlide>
              <div className="min-h-[276px] shadow-md hover:shadow-xl transition duration-300 pb-6 bg-white rounded-2xl justify-start md:w-1/2 lg:w-full max-w-[405px] items-start gap-2.5 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                  <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                    <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                      {WhyLearnLanguage?.CardData1?.title}
                    </div>
                  </div>
                  <div className=" self-stretch min-h-[148px] max-md:mb-4 max-h-[180px] px-4 flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[148px] max-h-[180px] rounded-lg flex-col justify-start items-center gap-8 flex">
                      <div className="self-stretch min-h-[148px] max-h-[180px] flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                          {" "}
                          {WhyLearnLanguage?.CardData1?.info}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[276px] shadow-md hover:shadow-xl transition duration-300 max-w-[405px] pb-6 bg-white rounded-2xl md:w-1/2 lg:w-full justify-start items-start gap-2.5 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                  <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                    <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                      {WhyLearnLanguage?.CardData2?.title}
                    </div>
                  </div>
                  <div className="self-stretch max-md:mb-4 min-h-[148px] max-h-[180px] px-4 flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[148px] max-h-[180px] rounded-lg flex-col justify-start items-center gap-8 flex">
                      <div className="self-stretch min-h-[148px] max-h-[180px] flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                          {WhyLearnLanguage?.CardData2?.info}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[268px] md:w-1/2 lg:w-full max-w-[405px] lg:pb-6 pb-10 max-sm:mb-5 bg-white  rounded-2xl shadow-md hover:shadow-xl transition duration-300 justify-start items-start gap-2.5 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                  <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                    <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                      {WhyLearnLanguage?.CardData3?.title}
                    </div>
                  </div>
                  <div className="self-stretch  h-full  min-h-[140px] max-h-[170px] px-4 flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch  min-h-[140px] max-h-[170px] rounded-lg flex-col justify-start items-center gap-8 flex">
                      <div className="self-stretch min-h-[140px] max-h-[170px] flex-col justify-start  items-center gap-2 flex">
                        <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                          {WhyLearnLanguage?.CardData3?.info}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[268px] md:w-1/2 lg:w-full max-w-[405px]  bg-white rounded-2xl lg:pb-6 pb-10 shadow-md hover:shadow-xl transition duration-300 justify-start items-start gap-2.5 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                  <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                    <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                      {WhyLearnLanguage?.CardData4?.title}
                    </div>
                  </div>
                  <div className="self-stretch min-h-[140px] max-h-[170px] px-4 flex-col justify-start max-md:mb-4 items-center gap-8 flex">
                    <div className="self-stretch min-h-[140px] max-h-[170px] rounded-lg flex-col justify-start items-center gap-8 flex">
                      <div className="self-stretch min-h-[140px] max-h-[170px] flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                          {WhyLearnLanguage?.CardData4?.info}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex md:mt-5  justify-center 2xl:mt-[112px] xl:mt-[250px]">
                <div className="max-w-[405px]  pb-6 min-h-[270px]  bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch min-h-[88px] py-8 rounded-t-2xl bg-secondary-color  flex-col justify-start items-center gap-2.5 flex">
                      <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                        {WhyLearnLanguage?.CardData5?.title}
                      </div>
                    </div>
                    <div className="self-stretch min-h-28 px-4 flex-col justify-start items-center gap-8  flex">
                      <div className="self-stretch min-h-28 rounded-lg flex-col justify-start items-center gap-8 flex">
                        <div className="self-stretch min-h-28 flex-col justify-start items-center gap-2 flex">
                          <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                            {WhyLearnLanguage?.CardData5?.info}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="2xl:max-w-[1640px]  w-full min-h-[902px] relative hidden md:block">
          <Image
            alt="whyLearnFrench"
            className="4xl:w-[470px]  4xl:h-[471px] 2xl:min-w-[318px]  2xl:min-h-[px] xl:w-[376.5px] mt-[80px] lg:scale-75 2xl:scale-100 hidden xl:block xl:left-1/2 2xl:left-[579px] top-[60px] mx-auto "
            src={whyLearnFrench}
          />

          <div className="left-0 top-0 xl:absolute justify-between items-start w-full p-5 4xl:p-5 3xl:px-12 flex md:flex-row flex-col gap-y-5 md:gap-5 lg:gap-0">
            <div className="min-h-[276px] shadow-md hover:shadow-xl transition duration-300 pb-6 bg-white rounded-2xl justify-start md:w-1/2 lg:w-full max-w-[405px] items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    {WhyLearnLanguage?.CardData1?.title}
                  </div>
                </div>
                <div className=" self-stretch min-h-[148px] max-md:mb-4 max-h-[180px] px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch min-h-[148px] max-h-[180px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[148px] max-h-[180px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                        {" "}
                        {WhyLearnLanguage?.CardData1?.info}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[276px] shadow-md hover:shadow-xl transition duration-300 max-w-[405px] pb-6 bg-white rounded-2xl md:w-1/2 lg:w-full justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    {WhyLearnLanguage?.CardData2?.title}
                  </div>
                </div>
                <div className="self-stretch max-md:mb-4 min-h-[148px] max-h-[180px] px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch min-h-[148px] max-h-[180px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[148px] max-h-[180px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                        {WhyLearnLanguage?.CardData2?.info}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-full top-[394px] xl:absolute justify-between items-start flex  p-5  2xl:px-0 4xl:px-[60px] md:px-10 md:gap-5 lg:gap-0 md:flex-row flex-col  w-full">
            <div className="min-h-[268px] md:w-1/2 lg:w-full max-w-[405px] lg:pb-6 pb-10 max-sm:mb-5 bg-white  rounded-2xl shadow-md hover:shadow-xl transition duration-300 justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    {WhyLearnLanguage?.CardData3?.title}
                  </div>
                </div>
                <div className="self-stretch  h-full  min-h-[140px] max-h-[170px] px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch  min-h-[140px] max-h-[170px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[140px] max-h-[170px] flex-col justify-start  items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                        {WhyLearnLanguage?.CardData3?.info}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[268px] md:w-1/2 lg:w-full max-w-[405px]  bg-white rounded-2xl lg:pb-6 pb-10 shadow-md hover:shadow-xl transition duration-300 justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    {WhyLearnLanguage?.CardData4?.title}
                  </div>
                </div>
                <div className="self-stretch min-h-[140px] max-h-[170px] px-4 flex-col justify-start max-md:mb-4 items-center gap-8 flex">
                  <div className="self-stretch min-h-[140px] max-h-[170px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[140px] max-h-[170px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                        {WhyLearnLanguage?.CardData4?.info}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:mt-5  max-sm:p-5 justify-center 2xl:mt-[112px] xl:mt-[290px]">
            <div className="max-w-[405px]  pb-6 min-h-[270px]  bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch min-h-[88px] py-8 rounded-t-2xl bg-secondary-color  flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    {WhyLearnLanguage?.CardData5?.title}
                  </div>
                </div>
                <div className="self-stretch min-h-28 px-4 flex-col justify-start items-center gap-8  flex">
                  <div className="self-stretch min-h-28 rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-28 flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                        {WhyLearnLanguage?.CardData5?.info}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-50 px-8  rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="z-50 flex md:mt-12 justify-center items-center ml-8 lg:ml-6 xl:ml-0">
            <button
              data-tally-open="3qORRk"
              data-tally-layout="modal"
              data-tally-width="676"
              data-tally-hide-title="1"
              className="w-[280px] text-center text-[24px]/[29px] px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3.5 bg-teal-600 rounded-lg font-medium text-neutral-50 flex items-center gap-2.5 hover:bg-neutral-50 hover:text-teal-600 border-2 border-teal-600 transition-colors duration-200"
            >
              <span className="text-center mx-auto">Get started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnLanguage;
