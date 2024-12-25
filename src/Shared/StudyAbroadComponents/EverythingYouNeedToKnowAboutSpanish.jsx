import FaqsCard from "@/Shared/FaqsCard";
import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const EverythingYouNeedToKnowAboutSpanish = (data) => {
  const datas = [...data.data];
  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center px-4 bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px]  flex-col justify-start w-full mx-auto items-start gap-12 flex">
        <div className="flex-col w-full justify-start items-center gap-12 flex">
          <div className="text-black max-md:text-xl text-2xl font-bold text-center">
            Everything you need to know about Spanish
          </div>
          <div className="justify-center  w-full  h-full items-center gap-8 flex">
            <div className="flex-col w-full gap-y-2 gap-x-2">
              {splicing &&
                datas
                  .splice(0, 4)
                  .map((data, index) => (
                    <FaqsCard key={index} data={data} i={index} />
                  ))}
              {!splicing &&
                datas.map((data, index) => (
                  <FaqsCard key={index} data={data} i={index} />
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setsplicing(!splicing)}
          className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 mx-auto w-[190px] justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-teal-600 text-2xl font-medium font-['Inter']">
            {!splicing ? "Read less" : "Read more"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default EverythingYouNeedToKnowAboutSpanish;
