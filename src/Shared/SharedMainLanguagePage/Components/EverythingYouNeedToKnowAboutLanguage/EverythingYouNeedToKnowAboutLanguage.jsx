"use client";

import { useState } from "react";
import FaqsCard from "../FaqsCard";

const EverythingYouNeedToKnowAboutLanguage = ({
  EveryThingYouNeedToKnowAbout,
}) => {
  const [splicing, setSplicing] = useState(true);
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  let data = [...EveryThingYouNeedToKnowAbout?.CardData];
  return (
    <div className=" bg-[#F6F3F3] lg:px-14 mx-auto 2xl:px-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col py-[42px]">
      <div className="max-w-[1463px]  flex-col justify-start w-full mx-auto items-start gap-12 flex">
        <div className="flex-col w-full justify-start items-center gap-12 flex">
          <div className="mx-4 lg:mx-0 text-black text-[32px]/[39px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] font-bold text-center">
            Everything you need to know about{" "}
            {EveryThingYouNeedToKnowAbout?.Language}
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
                    <FaqsCard
                      id={id}
                      setId={setId}
                      open={open}
                      setOpen={setOpen}
                      key={index}
                      data={data}
                      i={index}
                    />
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
          <div className="text-center text-teal-600 text-2xl font-medium text-nowrap">
            {!splicing ? "Read less" : "Read more"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default EverythingYouNeedToKnowAboutLanguage;
