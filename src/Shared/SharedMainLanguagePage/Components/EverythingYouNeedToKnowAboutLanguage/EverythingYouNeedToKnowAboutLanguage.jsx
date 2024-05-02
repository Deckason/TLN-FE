"use client";
import FaqsCard from "@/Shared/FaqsCard";
import frenchFlag from "@/Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const EverythingYouNeedToKnowAboutLanguage = ({
  EveryThingYouNeedToKnowAbout,
}) => {
  const [splicing, setSplicing] = useState(true);
  let data = [...EveryThingYouNeedToKnowAbout?.CardData];
  return (
    <div className="2xl:max-w-[1680px] bg-[#F6F3F3] lg:px-14 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col pb-[112px]">
      <div className="max-w-[1463px]  flex-col justify-start w-full mx-auto items-start gap-12 flex">
        <div className="flex-col w-full justify-start items-center gap-12 flex">
          <div className="text-black max-md:text-xl text-[60px] font-bold text-center">
            Everything you need to know about{" "}
            {EveryThingYouNeedToKnowAbout?.Language}
          </div>
          <div className="justify-center  w-full  h-full items-center gap-8 flex">
            <div className="flex-col w-full gap-y-2 gap-x-2">
              {splicing === true
                ? data
                    ?.splice(0, 6)
                    ?.map((data, index) => (
                      <FaqsCard key={index} data={data} i={index} />
                    ))
                : data?.map((data, index) => (
                    <FaqsCard key={index} data={data} i={index} />
                  ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (splicing) {
              setSplicing(false);
            }
            if (!splicing) {
              setSplicing(true);
            }
          }}
          className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 mx-auto w-[190px] justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-teal-600 text-2xl font-medium">
            {!splicing ? "Read less" : "Read more"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default EverythingYouNeedToKnowAboutLanguage;
