"use client";
import Image from "next/image";
import girlImage from "../../Assets/Homepage/Cefr/girlHappy.png";
import BookAFreeDemoButton from "../../Shared/BookAFreeDemoButton";
import rightIcon from "../../Assets/Homepage/Cefr/rightIcon.png";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const CefrLevels = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);
  return (
    <div className="bg-[#F5F5F5] pb-[90px] xl:pt-[90px] lg:pt-[150px] min-h-[1250px] ">
      <div className="max-w-[1681px]  mx-auto flex justify-center items-center p-5 lg:p-0 mb-[50px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
        <section className="min-h-[463px] lg:mx-10 gap-5 lg:gap-[42px] w-full grid lg:grid-cols-2 ">
          <div className="rounded-3xl">
            <Image
              alt="girl"
              className="object-cover h-[90%] rounded-3xl w-[110%]"
              src={girlImage}
            />
          </div>
          <div>
            <h1
              className="text-stone-900 2xl:text-[45px] xl:text-[45px] max-md:text-2xl max-xl:text-5xl text-[24px] font-bold"
            >
              Our courses are aligned with The CEFR Levels
            </h1>
            <p className=" lg:min-h-[250px] text-neutral-500 lg:text-[16px]/[22px] font-normal text-base mt-2 lg:mt-[23px] leading-7 text-justify mb-[16px]">
              Common European Framework of Reference for Languages (CEFR) is an
              internationally recognized standard that describes your learning
              progress in more detail. The framework helps you to explain your
              level from Beginner (A1) to Advanced (C2).
              <br />
              <br />
              All languages we offer are aligned with the CEFR levels, so once
              you know your level, we can suggest the best classes to get your
              progress going immediately.
              <br />
              <br />
            </p>
            <div className="flex mt-[-4rem]">
              <BookAFreeDemoButton></BookAFreeDemoButton>
            </div>
          </div>
        </section>
      </div>
      {/* cefr levels card section is below */}

      <section className="flex items-center justify-center">
        <div className="mt-[102px] max-w-[1700px] hidden 2xl:flex justify-center items-center gap-[20px] flex-wrap xl:mx-[120px]">
          <div className="flex gap-[40px] 4xl:gap-[18px]">
            <div
              id="A1"
              className="4xl:w-[263px] w-1/3 h-[306px] 4xl:h-[390px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-secondary-color rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
                <div className="h-[57px] flex-col justify-start items-center flex">
                  <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold ">
                    A1
                  </div>
                  <div className="self-stretch text-center text-neutral-800 text-xl font-normal  leading-7">
                    Absolute Beginner
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5 bg-white justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Understands everyday expressions and basic phrases
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Can introduce oneself and ask simple questions
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Participates in basic conversations about hobbies or
                      preferences
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="A2"
              className="4xl:w-[263px] w-1/3 h-[306px] 4xl:h-[390px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#B0DCD7] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
                <div className="h-[57px] flex-col justify-start items-center flex">
                  <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold ">
                    A2
                  </div>
                  <div className="self-stretch text-center text-neutral-800 text-xl font-normal  leading-7">
                    Elementary
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Understands common expressions in relevant areas
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Communicates in routine tasks like ordering food or asking for
                      directions
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Engages in everyday activities such as shopping or making
                      reservations
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="B1"
              className="4xl:w-[263px] w-1/3 h-[306px] 4xl:h-[390px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#48B0A3] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
                <div className="h-[57px] flex-col justify-start items-center flex">
                  <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold ">
                    B1
                  </div>
                  <div className="self-stretch text-center text-neutral-800 text-xl font-normal  leading-7">
                    Intermediate
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5 bg-white justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Grasps main points of clear, familiar topics
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Handles most situations while traveling or living in a foreign
                      country
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className=" text-neutral-500 text-base  font-normal ">
                      Participates in discussions, expresses opinions, and follows
                      basic news articles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[20px] 4xl:mt-0 flex gap-[40px] 4xl:gap-[18px]"> 
            <div
              id="B2"
              className="4xl:w-[263px] w-1/3 h-[306px] 4xl:h-[390px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#1F9F90] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
                <div className="h-[57px] flex-col justify-start items-center flex">
                  <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold ">
                    B2
                  </div>
                  <div className="self-stretch text-center text-white text-xl font-normal  leading-7">
                    Upper intermediate
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Understands complex texts on concrete and abstract topics
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Interacts fluently with native speakers, engaging in debates
                      and discussing world events
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className=" text-neutral-500 text-base  font-normal ">
                      Reads articles, expresses opinions, and engages in debates on
                      various subjects
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="C1"
              className="4xl:w-[263px] w-1/3 h-[306px] 4xl:h-[390px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#008171] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
                <div className="h-[57px] flex-col justify-start items-center flex">
                  <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold ">
                    C1
                  </div>
                  <div className="self-stretch text-center text-white text-xl font-normal  leading-7">
                    Advanced
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Understands a wide range of demanding texts and implicit
                      meanings
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Expresses ideas fluently and participates in complex
                      discussions
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className=" text-neutral-500 text-base  font-normal ">
                      Analyzes and critiques articles, understands nuanced arguments
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="C2"
              className="4xl:w-[263px] w-1/3 h-[306px] 4xl:h-[390px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#006253] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
                <div className="h-[57px] flex-col justify-start items-center flex">
                  <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold ">
                    C2
                  </div>
                  <div className="self-stretch text-center text-white text-xl font-normal  leading-7">
                    Master level
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Understands virtually everything heard or read{" "}
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                      Summarizes information and presents coherent arguments
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-2 inline-flex">
                    <Image
                      alt="rightIcon"
                      src={rightIcon}
                      className="w-6 h-6"
                    ></Image>
                    <div className=" text-neutral-500 text-base  font-normal ">
                      Engages in high-level discussions, delivers presentations, and
                      comprehends complex materials
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="2xl:hidden">
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
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            368: {
              slidesPerView: 1,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper mx-auto flex justify-center   items-center  max-w-[350px] md:max-w-[700px]  lg:max-w-[1000px] pb-5 xl:max-w-[1200px]  2xl:max-w-[1200px] lg:hidden 3xl:max-w-[1440px]"
        >
          <SwiperSlide
            id="A1"
            className="w-[263px] h-[430px]  rounded-2xl  flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
          >
            <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-secondary-color rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold ">
                  A1
                </div>
                <div className="self-stretch text-center text-neutral-800 text-xl font-normal  leading-7">
                  Absolute Beginner
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-5  justify-start flex-grow w-full h-[264px] items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Understands everyday expressions and basic phrases
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Can introduce oneself and ask simple questions
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Participates in basic conversations about hobbies or
                    preferences
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            id="A2"
            className="w-[263px] h-[430px] bg-white rounded-2xl  flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
          >
            <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#B0DCD7] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold ">
                  A2
                </div>
                <div className="self-stretch text-center text-neutral-800 text-xl font-normal  leading-7">
                  Elementary
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-5  justify-start flex-grow w-full h-[264px] items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Understands common expressions in relevant areas
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Communicates in routine tasks like ordering food or asking for
                    directions
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Engages in everyday activities such as shopping or making
                    reservations
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            id="B1"
            className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
          >
            <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#48B0A3] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold ">
                  B1
                </div>
                <div className="self-stretch text-center text-neutral-800 text-xl font-normal  leading-7">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-5  justify-start flex-grow w-full h-[264px] items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Grasps main points of clear, familiar topics
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Handles most situations while traveling or living in a foreign
                    country
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className=" text-neutral-500 text-base  font-normal ">
                    Participates in discussions, expresses opinions, and follows
                    basic news articles
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            id="B2"
            className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
          >
            <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#1F9F90] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold ">
                  B2
                </div>
                <div className="self-stretch text-center text-white text-xl font-normal  leading-7">
                  Upper intermediate
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-5  justify-start flex-grow w-full h-[264px] items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Understands complex texts on concrete and abstract topics
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Interacts fluently with native speakers, engaging in debates
                    and discussing world events
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className=" text-neutral-500 text-base  font-normal ">
                    Reads articles, expresses opinions, and engages in debates on
                    various subjects
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            id="C1"
            className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
          >
            <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#008171] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold ">
                  C1
                </div>
                <div className="self-stretch text-center text-white text-xl font-normal  leading-7">
                  Advanced
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-5  justify-start flex-grow w-full h-[264px] items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Understands a wide range of demanding texts and implicit
                    meanings
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Expresses ideas fluently and participates in complex
                    discussions
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className=" text-neutral-500 text-base  font-normal ">
                    Analyzes and critiques articles, understands nuanced arguments
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            id="C2"
            className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex shadow-md hover:shadow-xl transition duration-200"
          >
            <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#006253] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold ">
                  C2
                </div>
                <div className="self-stretch text-center text-white text-xl font-normal  leading-7">
                  Master level
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-5  justify-start flex-grow w-full h-[264px] items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Understands virtually everything heard or read{" "}
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className="grow shrink basis-0 text-neutral-500 text-[16px]/[19.36px] font-normal ">
                    Summarizes information and presents coherent arguments
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-2 inline-flex">
                  <Image
                    alt="rightIcon"
                    src={rightIcon}
                    className="w-6 h-6"
                  ></Image>
                  <div className=" text-neutral-500 text-base  font-normal ">
                    Engages in high-level discussions, delivers presentations, and
                    comprehends complex materials
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex mt-[48px] items-center justify-center">
        <button className="   px-8 py-3.5 bg-teal-600 rounded-lg justify-center text-neutral-50 lg:text-2xl font-medium items-center gap-2.5 inline-flex">
          Get started
        </button>
      </div>
    </div>
  );
};

export default CefrLevels;
