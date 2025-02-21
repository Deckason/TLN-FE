"use client";

import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";
import FaqsCard from "../FaqsCard";

const FaqsLanguage = ({ FaqsData }) => {
  const [splicing, setSplicing] = useState(true);
  let data = [...FaqsData];
  // useEffect(() => {
  //   if (FaqsData?.length > 0) {
  //     data = [...FaqsData]
  //   }
  // }, [FaqsData,data]);
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F6F3F3] lg:px-10 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center max-md:pt-0 flex-col">
      <div className="max-w-[1463px] flex-col justify-start w-full mx-auto items-center lg:items-start gap-12 flex">
        <div className="flex flex-col justify-start items-center gap-12 lg:w-full">
          <div className="text-black text-[32px]/[39px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] font-bold sm:pt-[40px]">
            FAQs
          </div>
          <div className="justify-center mx-4 lg:mx-0 lg:w-full h-full items-center max-xl:gap-4 order-2  grid lg:grid-cols-2 max-xl:flex-col-reverse">
            <div className="w-full 2xl:w-[110%]  lg:order-2 order-1 flex justify-center">
              <Image
                alt="frenchFlag"
                className="max-w-[562px] w-full object-contain  max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col  md:w-full 2xl:w-[105%] 3xl:w-[115%] mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {splicing === true
                ? data
                    ?.splice(0, 6)
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
                : data?.map((data, index) => (
                    <FaqsCard
                      key={index}
                      data={data}
                      i={index}
                      id={id}
                      setId={setId}
                      open={open}
                      setOpen={setOpen}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="w-full mx-4 lg:mx-0 flex justify-center lg:justify-start">
          <button
            onClick={() => {
              if (splicing) {
                setSplicing(false);
              }
              if (!splicing) {
                setSplicing(true);
              }
            }}
            className="h-[58px] justify-center lg:justify-start px-8 py-3.5 rounded-lg border border-teal-600 items-center gap-2.5 inline-flex"
          >
            <div className="text-center text-teal-600 text-2xl font-medium ">
              {!splicing ? "Read less" : "Read all FAQs"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqsLanguage;
