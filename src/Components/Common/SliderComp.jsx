'use client'
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import Image from "next/image";

const DefaultSliderCard = ({data}) => {


    return (
        <div>
            <div>
                <div className="w-full border shadow-md transition duration-300 hover:shadow-xl shadow-neutral-color/15 rounded-xl max-h-[460px] min-h-[442px] flex-col justify-start items-center gap-8  inline-flex max-md:p-3 p-6">
                    <div className="self-stretch h-[212px]  rounded-xl flex-col justify-start  items-center gap-2.5 flex">
                        <Image
                            alt="levelImages"
                            className="w-full h-full rounded-xl object-cover"
                            src={data?.img}
                        ></Image>
                    </div>

                    <div className="w-full  h-full   lg:min-h-[149px] flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch text-center text-neutral-800 max-lg:text-lg text-xl 2xl:text-2xl font-medium ">
                            {data?.title}
                        </div>
                        <div className="self-stretch max-h-[170px] h-full max-lg:max-h-[240px] min-h-[130px]  flex-col mb-3 justify-start items-center gap-2 flex">
                            <div className="self-stretch text-center text-neutral-500 lg:text-lg 2xl:text-xl  font-normal leading-7">
                                {data?.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SliderComp = ({data,children}) => {
    const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);

    return (
        <div className="md:mb-[112px] ">
            <div className="text-stone-900 text-[32px] leading-tight xl:text-[60px]/[80px] mb-12 text-center font-bold max-md:px-5">
                {data?.Title}
            </div>
            {/* <div className="xl:grid-cols-3 2xl:max-w-full max-w-8xl max-md:hidden flex-wrap justify-center gap-1 max-md:gap-5     md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
          {data?.CardData?.map((data, index) => (
            <WhyKidShouldLearnCard data={data} key={index} />
          ))}
        </div> */}
            <div className="">
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
                    autoplay = {data?.autoplay}
                    // modules={[Pagination]}
                    className="mySwiper mx-auto flex justify-center  items-center max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"
                >
                    {data?.CardData?.map((cardData, index) => (
                        <SwiperSlide key={index}>
                          {console.log("DAta is this.........",cardData)}
                            {React.isValidElement(children) ? (
                                React.cloneElement(children, {"data": cardData })
                            ) : (
                                <DefaultSliderCard data={cardData} />
                            )}
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SliderComp;