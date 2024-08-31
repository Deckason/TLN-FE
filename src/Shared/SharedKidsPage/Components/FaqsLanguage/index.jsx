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
    <div className="2xl:w-full  bg-[#F6F3F3]  px-4 lg:px-10 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col max-md:py-0">
      <div className=" flex-col justify-center w-full mx-auto items-center  gap-12 flex 2xl:max-w-[1680px] ">
        <div className="flex-col justify-start items-center gap-y-12 w-full flex">
          <div className="text-black text-[60px] font-bold max-lg:text-2xl">
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
            className="h-[58px] px-[16px] py-[10px] xl:px-[32px] xl:py-[14px] rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex mb-[20px] text-[14px] xl:text-[24px] leading-tight"
          >
            <div className="text-center text-teal-600  font-medium ">
              {!splicing ? "Read less FAQs" : "Read all FAQs"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqsLanguage;
