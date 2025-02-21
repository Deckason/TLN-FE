"use client";

import { useState } from "react";
import FaqsCard from "../Common/FaqsCard";

const EverythingYouNeedToKnowAboutLanguage = ({
  EveryThingYouNeedToKnowAbout,
}) => {
  const [splicing, setSplicing] = useState(true);
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  let data = [...EveryThingYouNeedToKnowAbout?.CardData];
  return (
    <div className="2xl:w-full bg-[#F6F3F3] lg:px-14 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col py-[112px]">
      <div className="max-w-[1463px]  flex-col justify-start w-full mx-auto items-start gap-12 flex 2xl:max-w-[1680px] ">
        <div className="flex-col w-full justify-start items-center gap-12 flex">
          <div className="text-stone-900 text-[24px] xl:text-[60px]/[80px] font-bold text-center mb-2">
            Everything you need to know <br className="hidden max-md:block" />{" "}
            about {EveryThingYouNeedToKnowAbout?.Language}
          </div>
          <div className="justify-center  w-full  h-full items-center gap-8 flex max-lg:px-4">
            <div className="flex-col w-full gap-y-2 gap-x-2">
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
                    <FaqsCard key={index} data={data} i={index} id={id} open={open} setId={setId} setOpen={setOpen}/>
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
          className="h-[58px] px-[16px] py-[10px] xl:px-[32px] xl:py-[14px] rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex mb-[20px] text-[14px] xl:text-[24px] leading-tight ml-8"
        >
          <div className="text-center text-teal-600  font-medium">
            {!splicing ? "Read less" : "Read more"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default EverythingYouNeedToKnowAboutLanguage;
