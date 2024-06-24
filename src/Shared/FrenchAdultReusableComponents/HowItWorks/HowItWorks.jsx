import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import Image from "next/image";
import React from "react";

const HowItWorks = (data) => {
  return (
    <div className="bg-[#F6F3F3]  flex items-center justify-center h-auto ">
      <div className="h-auto  my-10 flex items-center justify-center gap-10 flex-col  ">
        <div className="font-semibold text-[40px]">How It Works ?</div>
        <div className="flex gap-5 items-center justify-center flex-wrap  ">
          {data.data.map((card) => (
            <div key={card.index} className="bg-white flex flex-col p-6 text-center  rounded-2xl min-h-full h-[548px] mx-2 md:mx-0 md:max-w-sm max-md:w-[355px] justify-center max-xl:w-[408px] xl:max-w-[408px] ">
              <div className="h-[196px]">
                <Image
                  className="object-cover h-full w-full"
                  alt="step1"
                  src={card.img}
                />
              </div>
              <div className="flex flex-col pb-9 mt-4 rounded-lg border border-teal-600 flex-grow lg:min-h-[298px] xl:min-h-[288px] border-solid max-md:max-w-full">
                <div className="justify-center py-4 text-3xl bg-teal-600 rounded-t-lg text-neutral-50 max-md:max-w-full">
                  {card.step}
                </div>
                <div className="flex flex-col px-4 mt-8 max-md:max-w-full">
                  <div className="text-2xl font-medium text-neutral-800 max-md:max-w-full">
                    {card.title}
                  </div>
                  <div className="mt-2 text-xl leading-7 text-neutral-500 max-md:max-w-full">
                    {card.para}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5">
          <BookAFreeDemoButton />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
