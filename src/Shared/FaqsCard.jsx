"use client";
import pointDown from "@/Assets/Icons/pointDown.svg";
import Image from "next/image";
import { useState } from "react";
const FaqsCard = ({ data, i }) => {
  const [showDes, setShowDes] = useState(false);
  const [id, setId] = useState(i);
  return (
    <div onClick={() => setShowDes(!showDes)} className="my-2">
      <div
        className={`${
          showDes ? "h-full" : "min-h-[75px]"
        }  p-6 bg-white rounded-2xl transform duration-300 justify-center items-center flex-col flex`}
      >
        <div className="grow shrink basis-0 self-stretch justify-start items-center inline-flex">
          <div className="grow shrink basis-0 h-[27px] text-black text-xl font-normal font-['Inter'] leading-7">
            {data?.question}
          </div>
          <div className="w-[18px] h-2.5 relative">
            <Image alt="pointDown" src={pointDown} width={18} height={11} />
          </div>
        </div>
        <div
          className={`${
            showDes ? "h-full opacity-100 mt-3 " : "h-0 opacity-0"
          } transform duration-300 text-justify  me-8`}
        >
          {data?.answer}
        </div>
      </div>
    </div>
  );
};

export default FaqsCard;
