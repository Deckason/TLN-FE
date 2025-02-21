"use client";
import Image from "next/image";
import experts from "../../Assets/Homepage/whyShouldYouLearn/Expertrainers.webp";
import expertModal from "../../Assets/Homepage/whyShouldYouLearn/ExpertModal.webp";
import interactiveModal from "../../Assets/Homepage/whyShouldYouLearn/interactiveModal.webp";
import certificatedModal from "../../Assets/Homepage/whyShouldYouLearn/CertificatedModal.webp";
import ReviewModal from "../../Assets/Homepage/whyShouldYouLearn/ReviewModal.webp";
import BatchModal from "../../Assets/Homepage/whyShouldYouLearn/BatchModal.webp";
import freeCourseModal from "../../Assets/Homepage/whyShouldYouLearn/FreeStudyModal.webp";
import flexibleModal from "../../Assets/Homepage/whyShouldYouLearn/FlexibleModal.webp";
import DemoModal from "../../Assets/Homepage/whyShouldYouLearn/FreeDemoModal.webp";
import interactive from "../../Assets/Homepage/whyShouldYouLearn/Interactivesessions.webp";
import courses from "../../Assets/Homepage/whyShouldYouLearn/courses.webp";
import demo from "../../Assets/Homepage/whyShouldYouLearn/demo.webp";
import material from "../../Assets/Homepage/whyShouldYouLearn/material.webp";
import sessions from "../../Assets/Homepage/whyShouldYouLearn/sessions.webp";
import flexible from "../../Assets/Homepage/whyShouldYouLearn/flexible timings.webp";
import batch from "../../Assets/Homepage/whyShouldYouLearn/batch.webp";
import ReusableModal from "../../Shared/ReusableModal";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import RightArrowPrimary from "../../Assets/WhyShould/RightArrowPrimary.svg";
import RightArrowWhite from "../../Assets/WhyShould/RightArrowWhite.svg";



const defaultData = [
  {
    "modal": false,
    "modalClose": "expert",
    "imgAvatar": expertModal,
    "img": experts,
    "modalTitle": "Expert Trainers",
    "modalDesc": "Learn from internationally certified trainers with extensive expertise in language instruction.",
  },
  {
    "modal": false,
    "modalClose": "interactive",
    "imgAvatar": interactiveModal,
    "img": interactive,
    "modalTitle": "Interactive Sessions",
    "modalDesc": "Engage in dynamic and participatory classes, promoting experiential learning and cultural exposure to enhance language comprehension and retention.",
  },
  {
    "modal": false,
    "modalClose": "certificated",
    "imgAvatar": certificatedModal,
    "img": courses,
    "modalTitle": "Certificated Courses",
    "modalDesc": "Achieve recognition and validation through our language learning programs, which are both ISO-certified and accredited.",
  },
  {
    "modal": false,
    "modalClose": "freeCourse",
    "imgAvatar": DemoModal,
    "img": demo,
    "modalTitle": "Holistic learning",
    "modalDesc": "Experience our online platform firsthand with a complimentary trial session.",
  },
  {
    "modal": false,
    "modalClose": "freeStudy",
    "imgAvatar": freeCourseModal,
    "img": material,
    "modalTitle": "Free Study Material",
    "modalDesc": "Access a wealth of resources worth ₹10,000+ at no additional cost to support your language learning journey.",
  },
  {
    "modal": false,
    "modalClose": "review",
    "imgAvatar": ReviewModal,
    "img": sessions,
    "modalTitle": "Review Sessions",
    "modalDesc": "Reinforce your understanding and address any questions or concerns with dedicated review sessions.",
  },
  {
    "modal": false,
    "modalClose": "flexible",
    "imgAvatar": flexibleModal,
    "img": flexible,
    "modalTitle": "Flexible Timings",
    "modalDesc": "Customize your learning schedule to fit your busy lifestyle with our flexible class timings.",
  },
  {
    "modal": false,
    "modalClose": "batch",
    "imgAvatar": BatchModal,
    "img": batch,
    "modalTitle": "Batch Flexibility",
    "modalDesc": "Choose from our 1:1, Duo, and Group Batches to find the option that best suits your needs and preferences.",
  }
]

const WhyShould = ({ data=defaultData , title="Why you should learn with The Language Network?" }) => {
  const [isModalOpen, setIsModalOpen] = useState(
    data.reduce((acc, curr) => ({ ...acc, [curr.modalClose]: false }), {})
  );

  const [whyShouldHovered, setWhyShouldHovered] = useState(
    Array(data.length).fill(false)
  );

  const openModal = (card) =>
    setIsModalOpen({ ...isModalOpen, [card]: true });
  const closeModal = (card) =>
    setIsModalOpen({ ...isModalOpen, [card]: false });
  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);

  return (
    <div className="lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px] bg-[#]">
      {data.map((modal) => (
        <ReusableModal
          key={modal.modalClose}
          isOpen={isModalOpen[modal.modalClose]}
          onClose={() => closeModal(modal.modalClose)}
        >
          <div className="flex justify-start items-center">
            <div className=" lg:flex hidden w-full h-full ">
              <Image
                layout="responsive"
                priority="true"
                src={modal.imgAvatar}
                className="h-full w-fit"
                alt="em"
              />
            </div>
            <div className="flex  justify-center gap-5 w-full flex-col">
              <div className="flex flex-col gap-5">
                <Image
                  src={modal.img}
                  alt={modal.modalTitle}
                  priority="true"
                  className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                />
                <span className="font-semibold text-[#004D37]">
                  {modal.modalTitle}
                </span>
              </div>
              <p className="h-full w-fit">{modal.modalDesc}</p>
            </div>
          </div>
        </ReusableModal>
      ))}

      <div className="mt-[50px] md:mt-[98px] w-full  max-w-[1267px] mx-auto">
        <h1 className="self-stretch font-bold text-[24px]/[29px] lg:text-[40px]/[48.01px] md:text-3xl xl:text-[50px]/[40px] 2xl:text-[60px]/[72px] text-center my-[48px] text-stone-900 max-lg:px-4">
          {title}
        </h1>
        <div className="lg:grid hidden md:grid-cols-2 lg:grid-cols-4 mx-auto gap-y-6  gap-x-[32px]  ">
          {data.map((item, index) => (
            <div
              key={index}
              style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
              className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
            >
              <div className="xl:h-[220px] lg:h-[165px] flex-col justify-center items-center gap-8 flex">
                <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                  <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                    <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                      <Image
                        alt="experts"
                        src={item.img}
                        width={20}
                        height={20}
                        layout="responsive"
                        priority="true"
                        className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                      ></Image>
                    </ div>
                  </div>
                  <div className="text-center lg:-mt-5 xl:-mt-0  text-emerald-900 text-[18px] xl:text-xl font-bold ">
                    {item.modalTitle}
                  </div>
                </div>
                <div className="self-stretch h-[56px] lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                  <button
                    onClick={() => openModal(item.modalClose)}
                    onMouseEnter={() => {
                      const newHovedStates = [...whyShouldHovered];
                      newHovedStates[index] = true;
                      setWhyShouldHovered(newHovedStates);
                    }}
                    onMouseLeave={() => {
                      const newHovedStates = [...whyShouldHovered];
                      newHovedStates[index] = false;
                      setWhyShouldHovered(newHovedStates);
                    }}
                    className="text-primary-color hover:bg-[#1f9f90] hover:text-white xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex h-full"
                  >
                    <div className="text-center text-xl font-normal  leading-7 text-nowrap ">
                      Learn more
                    </div>
                    <Image
                      width={25}
                      height={25}
                      alt="RightArrowPrimary"
                      src={
                        whyShouldHovered[index]
                          ? RightArrowWhite
                          : RightArrowPrimary
                      }
                    ></Image>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden">
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
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
            className="max-lg:shadow-custom mySwiper mx-auto max-lg:flex justify-center items-center max-w-[305px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1200px] hidden 3xl:max-w-[1440px]"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
                className="lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl flex-col justify-center items-center gap-2.5"
              >
                <div className="xl:h-[220px] lg:h-[165px] flex-col justify-center items-center gap-8 flex">
                  <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                    <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                      <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                        <Image
                          alt={item.modalTitle}
                          src={item.img} 
                          className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                        />
                      </div>
                    </div>
                    <div className="text-center lg:-mt-5 xl:-mt-0 text-emerald-900 text-[18px] xl:text-xl font-bold">
                      {item.modalTitle}
                    </div>
                  </div>
                  <div className="self-stretch h-[56px] lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                    <button
                      onClick={() => openModal(item.modalClose)}
                      className="text-primary-color hover:bg-[#1f9f90] hover:text-white xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex h-full"
                    >
                      <div className="text-center text-xl font-normal leading-7">
                        Learn more
                      </div>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 12H19.5M19.5 12L13.5 18M19.5 12L13.5 6"
                          stroke="#1F9F90"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhyShould;
