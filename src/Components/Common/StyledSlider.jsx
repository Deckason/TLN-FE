import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> upstream/dev
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


<<<<<<< HEAD
const StyledSlider = ({children,slidesData})=>{
=======
const StyledSlider = ({children,slidesData=[]})=>{
>>>>>>> upstream/dev
    const [currentPage, setCurrentPage] = useState(0);
    const navigationPrevRef = React.useRef(currentPage);
    const navigationNextRef = React.useRef(currentPage);

<<<<<<< HEAD
    return (
        <div className="flex flex-col items-center relative">
                    <Swiper
                        spaceBetween={20}
=======
    useEffect(() => {
        console.log(currentPage,'currentPage')
},[currentPage])

    return (
        <div className="flex flex-col items-center relative">
                    <Swiper
                        slidesPerView={1.1}
                        centeredSlides={true}
                        spaceBetween={10}
>>>>>>> upstream/dev
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
<<<<<<< HEAD
                            setCurrentPage(swiper.activeIndex);
=======
                            if (swiper.activeIndex > currentPage && swiper.isEnd === false) {
                                setCurrentPage(swiper.activeIndex);
                            } else if (swiper.activeIndex < currentPage && swiper.isBeginning === false) {
                                setCurrentPage(swiper.activeIndex);
                            }
>>>>>>> upstream/dev
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
                        className="mySwiper mx-auto flex justify-center  items-center max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"
                    >
                        {slidesData?.map((slide, index) => (
                            <SwiperSlide key={index} className="relative">
                                {React.cloneElement(children , {slide})}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p 
                className={`hidden md:block absolute left-0 text-2xl top-[50%] rounded-full ml-[18px] border-[2px] ${currentPage <= 0 ? 'text-black border-black' : 'text-[#1F9F90] border-[#1F9F90]'} py-[20px] px-[20px] cursor-pointer`} 
                ref={navigationPrevRef}
            >
                <IoIosArrowBack/>
            </p>
            <p 
                className={`hidden md:block absolute right-0 text-2xl top-[50%] rounded-full mr-[18px] border-[2px] ${currentPage >= Math.ceil(slidesData.length / 4) - 1 ? 'text-black border-black' : 'text-[#1F9F90] border-[#1F9F90]'} py-[20px] px-[20px] cursor-pointer`} 
                ref={navigationNextRef}
            >
                <IoIosArrowForward/>
            </p>
        </div>
    )
};

export default StyledSlider;