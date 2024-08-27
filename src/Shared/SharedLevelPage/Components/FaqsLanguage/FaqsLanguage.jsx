"use client";

import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import FaqsCard from "../Common/FaqsCard";

const FaqsLanguage = ({ FaqsData }) => {
  const [splicing, setSplicing] = useState(true);
  let newData = [...FaqsData];
  // useEffect(() => {
  //   console.log(FaqsData);
  // }, [splicing]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  return (
    <div className="2xl:w-full p-5 bg-[#F6F3F3] lg:px-10 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col py-[100px] lg:py-[112px]">
      <div className="2xl:max-w-[1680px] flex-col justify-center w-full mx-auto items-center  gap-12 flex">
        <div className="flex-col justify-start items-center gap-y-12 w-full flex">
          <div className="-mt-[60px] lg:mt-0 text-black text-[24px]/[29px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] mb-[20px] lg:mb-12 text-center font-bold ">
            FAQs
          </div>
          <div className="justify-center  h-full items-center  max-xl:gap-4 order-2 w-full grid lg:grid-cols-2 max-xl:flex-col-reverse">
            <div className="w-full lg:order-2 order-1 flex justify-center">
              <Image
                alt="frenchFlag"
                className="max-w-[562px] w-full object-contain  max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col  md:w-full mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {splicing === true
                ? newData
                    ?.splice(0, 5)
                    ?.map((data, index) => (
                      <FaqsCard
                        id={id}
                        setId={setId}
                        open={open}
                        setOpen={setOpen}
                        key={index}
                        data={data}
                        i={index}
                      />
                    ))
                : newData?.map((data, index) => (
                    <FaqsCard key={index} data={data} i={index} />
                  ))}
            </div>
          </div>
        </div>
        <div className="w-full ">
          <button
            onClick={() => {
              if (splicing) {
                setSplicing(false);
              }
              if (!splicing) {
                setSplicing(true);
              }
            }}
            className="lg:h-[58px] py-[10px] px-[16px] lg:py-[14px] lg:px-[32px]  rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex mb-[20px]"
          >
            <div className="text-center text-teal-600 text-[14px]/[17px] lg:text-[24px]/[29px] font-medium ">
              {!splicing ? "Read less FAQs" : "Read all FAQs"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqsLanguage;
