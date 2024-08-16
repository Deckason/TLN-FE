"use client";
import "../css/Custom.css";
import girlRashi from "../Assets/Homepage/UpComingCourseCard/girlRashi.png";
import girlIshwari from "../Assets/Spanish/Ishwari-1 1.png";
import girlPrachi from "../Assets/Spanish/Prachi-1.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import {
  useGetNextMonth1BatchesQuery,
  useGetNextMonth2BatchesQuery,
  useGetNextMonth3BatchesQuery,
} from "../store/apiSlice";
import formatDate from "./utilities/formatDate";
import formatDateToDayMonthYear from "./utilities/formatDateToDayMonthYear";

const UpcomingBatches = ({ language }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  const {
    data: month1Data,
    isLoading1,
    isError1,
  } = useGetNextMonth1BatchesQuery("");
  const {
    data: month2Data,
    isLoading2,
    isError2,
  } = useGetNextMonth2BatchesQuery("");
  const {
    data: month3Data,
    isLoading3,
    isError3,
  } = useGetNextMonth3BatchesQuery("");
  const [data, setData] = useState(
    month1Data &&
      month1Data
        .filter((batch) => batch.trainerDetails.trainerLanguage === language)
        .slice(0, 3)
  );
  const [dataMobile, setDataMobile] = useState(
    month1Data &&
      month1Data.filter(
        (batch) => batch.trainerDetails.trainerLanguage === language
      )
  );
  const [loadBtnClicked, setLoadBtnClicked] = useState(false);
  const [monthNum, setMonthNum] = useState(1);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleLoadMore = () => {
    setLoadBtnClicked(!loadBtnClicked);
  };

  useEffect(() => {
    if (!month1Data) return;

    if (monthNum === 1) {
      if (month1Data && !loadBtnClicked) {
        setData(
          month1Data
            .filter(
              (batch) => batch.trainerDetails.trainerLanguage === language
            )
            .slice(0, 3)
        );
      } else if (month1Data && loadBtnClicked) {
        setData(
          month1Data.filter(
            (batch) => batch.trainerDetails.trainerLanguage === language
          )
        );
        setDataMobile(
          month1Data.filter(
            (batch) => batch.trainerDetails.trainerLanguage === language
          )
        );
      }
      setDataMobile(
        month1Data.filter(
          (batch) => batch.trainerDetails.trainerLanguage === language
        )
      );
    } else if (monthNum === 2) {
      if (month2Data && !loadBtnClicked) {
        setData(
          month2Data
            .filter(
              (batch) => batch.trainerDetails.trainerLanguage === language
            )
            .slice(0, 3)
        );
      } else if (month2Data && loadBtnClicked) {
        setData(
          month2Data.filter(
            (batch) => batch.trainerDetails.trainerLanguage === language
          )
        );
      }
      setDataMobile(
        month2Data.filter(
          (batch) => batch.trainerDetails.trainerLanguage === language
        )
      );
    } else {
      if (month3Data && !loadBtnClicked) {
        setData(
          month3Data
            .filter(
              (batch) => batch.trainerDetails.trainerLanguage === language
            )
            .slice(0, 3)
        );
      } else if (month3Data && loadBtnClicked) {
        setData(
          month3Data.filter(
            (batch) => batch.trainerDetails.trainerLanguage === language
          )
        );
      }
      setDataMobile(
        month3Data.filter(
          (batch) => batch.trainerDetails.trainerLanguage === language
        )
      );
    }
  }, [month1Data, monthNum, loadBtnClicked]);

  return (
    <>
      <div className=" my-[112px]  flex justify-center flex-col items-center">
        <h1 className="my-[40px] text-center self-stretch text-stone-900 text-[32px]/[39px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px]   font-bold">
          Upcoming Batches
        </h1>
        <section
          id="upComingCourseMonths"
          className="flex items-center justify-center flex-wrap gap-[16px]  p-[8px] w-fit mx-auto rounded-lg shadow-xl shadow-neutral-color/5 mb-[32px]"
        >
          <button
            disabled={!month1Data}
            onClick={() => setMonthNum(1)}
            className={`${
              monthNum === 1 ? "upcomingCourseActive" : "upcomingCourseDeActive"
            }`}
          >
            {monthNames[(new Date().getMonth() + 1) % 12]}
          </button>
          <button
            disabled={!month1Data}
            onClick={() => setMonthNum(2)}
            className={`${
              monthNum === 2 ? "upcomingCourseActive" : "upcomingCourseDeActive"
            }`}
          >
            {monthNames[(new Date().getMonth() + 2) % 12]}
          </button>
          <button
            disabled={!month1Data}
            onClick={() => setMonthNum(3)}
            className={`${
              monthNum === 3 ? "upcomingCourseActive" : "upcomingCourseDeActive"
            }`}
          >
            {monthNames[(new Date().getMonth() + 3) % 12]}
          </button>
        </section>
        <div
          className=" xl:flex
        justify-center items-center w-full mx-auto lg:min-w-[1000px] 2xl:max-w-[1681px] hidden flex-col gap-4  "
          id="UpcomingCourseCards"
        >
          <div className=" flex-wrap gap-[17px] flex xl:justify-center justify-center w-full  mb-[40px]">
            {month1Data && data ? (
              data.map((currBatch, index) => {
                return (
                  <div
                    key={index}
                    className="lg:w-[355px] md:w-[355px] xl:w-[390px] 2xl:w-[408px] 4xl:w-[540px] w-full  lg:scale-100   p-4 flex-col justify-start items-start gap-2.5  rounded-xl  shadow-[#bab8b8]/40 flex shadow-md hover:shadow-2xl transition duration-300"
                  >
                    <div className="h-[240px] rounded-t-xl flex items-center  w-full relative">
                      <div className=" h-[60%] w-full absolute -z-0"></div>
                      <Image
                        alt={currBatch.trainerDetails.trainerName}
                        src={currBatch.trainerDetails.trainerImage}
                        width={500}
                        height={500}
                        className="object-contain w-full h-full z-10"
                      ></Image>
                    </div>
                    <div className="  rounded-b-lg flex-col justify-start w-full items-start gap-16 flex">
                      <div className="self-stretch min-h-[344px] flex-col justify-start items-start gap-8 flex">
                        <div className="self-stretch h-[60px] px-4 flex-col justify-start items-start gap-3 flex">
                          <div className="self-stretch h-[23px] text-stone-900 text-2xl font-bold ">
                            {currBatch.trainerDetails.trainerName}
                          </div>
                          <div className="self-stretch h-[25px] text-neutral-500 text-xl font-normal  leading-7">
                            {currBatch.trainerDetails.trainerLanguage} Trainer
                          </div>
                        </div>
                        <div className="h-[252px] w-full flex-col justify-start items-start flex">
                          <div className="self-stretch px-4 pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                            <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                              Batch Starts{" "}
                            </div>
                            <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px] font-bold ">
                              {formatDateToDayMonthYear(currBatch.batchStart)}
                            </div>
                          </div>
                          <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                            <div className="w-[159px] h-[23px] text-stone-900 text-base font-medium ">
                              Number of seats
                            </div>
                            <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px] font-bold ">
                              {currBatch.noOfSeats}
                            </div>
                          </div>
                          <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center flex">
                            <div className="w-[65px] h-[23px] text-stone-900 text-base font-medium ">
                              Timing
                            </div>
                            <div className="lg:w-[335px] w-[195px] flex-col justify-center items-end gap-[13px] inline-flex">
                              <div className="self-stretch text-right text-stone-900 text-nowrap xl:text-[14px] lg:text-[14px] text-[10px] text-sm font-bold ">
                                {formatDate(
                                  currBatch.startTime,
                                  currBatch.endTime
                                )}
                                {currBatch.duration / 60} hrs
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                            <div className="w-[80px] h-[23px] text-stone-900 text-base font-medium ">
                              Certification{" "}
                            </div>
                            <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px]  font-bold ">
                              {currBatch.certification}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="flex justify-center w-full">
                        <div className="w-[183px] h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex text-neutral-50 text-2xl font-medium border-2 border-teal-600 transition-colors duration-200 hover:bg-neutral-50 hover:text-teal-600">
                          <div className="text-center text-nowrap">
                            Enroll now
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className="xl:hidden">
          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
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
            className="mySwiper mx-auto flex justify-center  items-center w-[320px] md:max-w-[700px]  lg:max-w-[1000px]  xl:max-w-[1200px]  2xl:max-w-[1200px] lg:hidden 3xl:max-w-[1440px]"
          >
            {month1Data && dataMobile ? (
              dataMobile.map((currBatch, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className=" md:w-[355px] lg:w-[300px] xl:w-[354px] 2xl:w-[540px] w-full  lg:scale-100   p-4 flex-col justify-start items-start gap-2.5  rounded-xl  shadow-[#bab8b8]/40 flex shadow-md hover:shadow-2xl transition duration-300"
                  >
                    <div className="h-[240px] rounded-t-xl flex items-center w-full relative">
                      <div className=" h-[60%] w-full absolute -z-0"></div>
                      <Image
                        alt={currBatch.trainerDetails.trainerName}
                        src={currBatch.trainerDetails.trainerImage}
                        width={500}
                        height={500}
                        className="object-contain w-full h-full z-10"
                      ></Image>
                    </div>
                    <div className="  rounded-b-lg flex-col justify-start w-full items-start gap-16 flex">
                      <div className="self-stretch min-h-[344px] flex-col justify-start items-start gap-8 flex">
                        <div className="self-stretch h-[60px] px-4 flex-col justify-start items-start gap-3 flex">
                          <div className="self-stretch h-[23px] text-stone-900 text-2xl font-bold ">
                            {currBatch.trainerDetails.trainerName}
                          </div>
                          <div className="self-stretch h-[25px] text-neutral-500 text-xl font-normal  leading-7">
                            {currBatch.trainerDetails.trainerLanguage} Trainer
                          </div>
                        </div>
                        <div className="h-[252px] w-full flex-col justify-start items-start flex">
                          <div className="self-stretch px-4 pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                            <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                              Batch Starts{" "}
                            </div>
                            <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px] font-bold ">
                              {formatDateToDayMonthYear(currBatch.batchStart)}
                            </div>
                          </div>
                          <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                            <div className="w-[159px] h-[23px] text-stone-900 text-base font-medium ">
                              Number of seats
                            </div>
                            <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px] font-bold ">
                              {currBatch.noOfSeats}
                            </div>
                          </div>
                          <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center flex">
                            <div className="w-[65px] h-[23px] text-stone-900 text-base font-medium ">
                              Timing
                            </div>
                            <div className="lg:w-[335px] w-[195px] flex-col justify-center items-end gap-[13px] inline-flex">
                              <div className="self-stretch text-right text-stone-900 text-nowrap xl:text-[14px] lg:text-[14px] text-[10px] text-sm font-bold ">
                                {formatDate(
                                  currBatch.startTime,
                                  currBatch.endTime
                                )}
                                {currBatch.duration / 60} hrs
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                            <div className="w-[120px] h-[23px] text-stone-900 text-base font-medium ">
                              Certification{" "}
                            </div>
                            <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px]  font-bold ">
                              {currBatch.certification}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="flex justify-center  w-full">
                        <div className="w-[183px] h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                          <div className="text-center text-nowrap text-neutral-50 text-2xl font-medium ">
                            Enroll now
                          </div>
                        </div>
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </Swiper>
        </div>
        <div className="mt-[48px] scale-75 xl:hidden flex gap-x-[16px]">
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

        <button
          onClick={handleLoadMore}
          className="hidden w-[183px] h-[58px] px-8 py-3.5 text-[#1F9F90] hover:text-white border-[#1F9F90] hover:bg-[#1F9F90] border rounded-lg justify-center items-center gap-2.5 xl:inline-flex text-center text-nowrap text-2xl font-medium "
        >
          Load more
        </button>
      </div>{" "}
    </>
  );
};

export default UpcomingBatches;
