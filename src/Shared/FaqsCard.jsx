"use client";
import pointDown from "../Assets/Icons/pointDown.svg";
import Image from "next/image";
import { useState } from "react";
const FaqsCard = ({ data, i }) => {
  const [showDes, setShowDes] = useState(false);
  const [id, setId] = useState(i);
  return (
    <div onClick={() => setShowDes(!showDes)} className="my-2 w-full ">
      <div
        className={`${
          showDes ? "h-full" : " min-h-[75px]"
        }  p-4 xl:p-6 w-full shadow-md hover:shadow-xl transition  bg-white rounded-2xl transform duration-300 justify-center items-center flex-col flex`}
      >
        <div className="grow shrink basis-0 transform duration-300 self-stretch w-full justify-start items-center inline-flex ">
          <div className="grow shrink basis-0  text-black text-xl  max-md:text-base max-sm:text-sm transform duration-300 font-medium w-full leading-7">
            {data?.question}
          </div>
          <div className="max-md:w-4  w-[18px]  relative">
            <Image alt="pointDown" src={pointDown} width={18} height={11} />
          </div>
        </div>
        <div
          className={`${
            showDes ? " opacity-100 mt-3 " : "hidden opacity-0"
          } transform w-full max-md:text-sm duration-300 text-justify lg:ps-4 lg:me-8`}
        >
          {data?.answer}
        </div>
      </div>
    </div>
  );
};

export default FaqsCard;
