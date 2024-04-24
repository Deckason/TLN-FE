import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import Image from "next/image";
import React from "react";

const HowItWorks = (data) => {
  return (
    <div className="bg-[#F6F3F3] flex items-center justify-center h-auto ">
      <div className="h-auto  my-10 flex items-center justify-center gap-10 flex-col  ">
        <div className="font-semibold text-[40px]">How It Works ?</div>
        <div className="flex gap-5 items-center justify-center flex-wrap  ">
          {data.data.map((card) => (
            <div className="w-[408px] rounded-xl overflow-hidden flex justify-around items-center flex-col bg-white h-[548px]">
              <Image src={card.img} alt="step1" />
              <div className=" text-[24px] h-[288px] w-[386px] border-[#1F9F90] border rounded-lg overflow-hidden">
                <div className="bg-[#1F9F90] text-white font-semibold text-[32px] text-center p-2">
                  {card.step}
                </div>
                <div className="flex text-center items-center justify-center flex-col">
                  <div className="font-semibold">{card.title}</div>
                  <div>
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
