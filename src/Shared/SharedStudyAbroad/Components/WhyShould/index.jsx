"use client";
import Image from "next/image";
import experts from "../../../../Assets/Homepage/whyShouldYouLearn/Expertrainers.png";
import expertModal from "../../../../Assets/Homepage/whyShouldYouLearn/ExpertModal.png";
import interactiveModal from "../../../../Assets/Homepage/whyShouldYouLearn/interactiveModal.png";
import certificatedModal from "../../../../Assets/Homepage/whyShouldYouLearn/CertificatedModal.png";
import ReviewModal from "../../../../Assets/Homepage/whyShouldYouLearn/ReviewModal.png";
import BatchModal from "../../../../Assets/Homepage/whyShouldYouLearn/BatchModal.png";
import freeCourseModal from "../../../../Assets/Homepage/whyShouldYouLearn/FreeStudyModal.png";
import flexibleModal from "../../../../Assets/Homepage/whyShouldYouLearn/FlexibleModal.png";
import DemoModal from "../../../../Assets/Homepage/whyShouldYouLearn/FreeDemoModal.png";
import interactive from "../../../../Assets/Homepage/whyShouldYouLearn/Interactivesessions.png";
import courses from "../../../../Assets/Homepage/whyShouldYouLearn/courses.png";
import demo from "../../../../Assets/Homepage/whyShouldYouLearn/demo.png";
import material from "../../../../Assets/Homepage/whyShouldYouLearn/material.png";
import sessions from "../../../../Assets/Homepage/whyShouldYouLearn/sessions.png";
import flexible from "../../../../Assets/Homepage/whyShouldYouLearn/flexible timings.png";
import batch from "../../../../Assets/Homepage/whyShouldYouLearn/batch.png";
import { useState } from "react";
import ReusableModal from "./ReusableModal";
const WhyShould = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    expert: false,
    interactive: false,
    certificated: false,
    freeCourse: false,
    freeStudy: false,
    review: false,
    flexible: false,
    batch: false,
  });

  const openModal = (card) =>
    setIsModalOpen({ ...isModalOpen, [card]: isModalOpen });
  const closeModal = (card) =>
    setIsModalOpen({ ...isModalOpen, [card]: false });

  const modalData = [
    {
      modal: isModalOpen.expert,
      modalClose: "expert",
      imgAvatar: expertModal,
      img: experts,
      modalTitle: "Expert Trainers",
      modalDesc:
        "Learn from internationally certified trainers with extensive expertise in language instruction",
    },
    {
      modal: isModalOpen.interactive,
      modalClose: "interactive",
      imgAvatar: interactiveModal,
      img: interactive,
      modalTitle: "Interactive Sessions",
      modalDesc:
        "Engage in dynamic and participatory classes, promoting experiential learning and cultural exposure to enhance language comprehension and retention.",
    },
    {
      modal: isModalOpen.certificated,
      modalClose: "certificated",
      imgAvatar: certificatedModal,
      img: courses,
      modalTitle: "Certificated Courses",
      modalDesc:
        "Achieve recognition and validation through our language learning programs, which are both ISO-certified and accredited.",
    },
    {
      modal: isModalOpen.freeCourse,
      modalClose: "freeCourse",
      imgAvatar: DemoModal,
      img: demo,
      modalTitle: "Free Demo",
      modalDesc:
        "Experience our online platform firsthand with a complimentary trial session.",
    },
    {
      modal: isModalOpen.freeStudy,
      modalClose: "freeStudy",
      imgAvatar: freeCourseModal,
      img: material,
      modalTitle: "Free Study Material",
      modalDesc:
        "Access a wealth of resources worth ₹10,000+ at no additional cost to support your language learning journey.",
    },
    {
      modal: isModalOpen.review,
      modalClose: "review",
      imgAvatar: ReviewModal,
      img: sessions,
      modalTitle: "Review Sessions",
      modalDesc:
        "Reinforce your understanding and address any questions or concerns with dedicated review sessions.",
    },
    {
      modal: isModalOpen.flexible,
      modalClose: "flexible",
      imgAvatar: flexibleModal,
      img: flexible,
      modalTitle: "Flexible Timings",
      modalDesc:
        "Customize your learning schedule to fit your busy lifestyle with our flexible class timings.",
    },
    {
      modal: isModalOpen.batch,
      modalClose: "batch",
      imgAvatar: BatchModal,
      img: batch,
      modalTitle: "Batch Flexibility",
      modalDesc:
        "We provide 1:1, Duo and Group Batches for you to find the one that best suits your needs and preferences.",
    },
  ];
  return (
    <>
      {/*  Modal */}
      {modalData.map((modal) => (
        <ReusableModal
          key={modal.modalClose}
          isOpen={modal.modal}
          onClose={() => closeModal(modal.modalClose)}
        >
          <div className="flex w-[350px] lg:w-[630px]  justify-start items-center">
            <div className=" lg:flex hidden w-full h-full ">
              <Image src={modal.imgAvatar} className="h-full w-fit" alt="em" />
            </div>
            <div className="flex  justify-center gap-5 w-full flex-col">
              <div className="flex flex-col gap-5">
                <Image
                  src={modal.img}
                  alt="experts"
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

      <div className="my-[108px] w-full min-h-[658px] max-w-[1194px] mx-auto">
        <h1 className="text-center mb-[48px] text-stone-900 text-xl xl:text-2xl font-bold ">
          Why you should learn with The Language Network?
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-6  gap-x-[32px] mx-10 xl:mx-0">
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={experts}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0 text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Expert trainers
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("expert")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={interactive}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0 text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Interactive sessions
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("interactive")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={courses}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0  text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Certified courses
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("certificated")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={demo}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0  text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Free demo
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("freeCourse")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={material}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0  text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Free study material
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("freeStudy")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={sessions}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0  text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Review sessions
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("review")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={flexible}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0  text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Flexible timings
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("flexible")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
          <div
            style={{ boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
            className=" lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5 "
          >
            <div className="xl:h-[220px] lg:h-[165px] flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                  <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                    <Image
                      alt="experts"
                      src={batch}
                      className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                    ></Image>
                  </div>
                </div>
                <div className="text-center lg:-mt-5 xl:-mt-0  text-emerald-900 text-[18px] xl:text-xl font-bold ">
                  Batch flexibility
                </div>
              </div>
              <div className="self-stretch lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                <button
                  onClick={() => openModal("batch")}
                  className="xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-primary-color xl:text-xl font-normal  leading-7 text-nowrap">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyShould;
