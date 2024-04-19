"use client";
import pointDown from "@/Assets/Icons/pointDown.svg";
import Image from "next/image";
import { useState } from "react";
const Accordian = ({ data, i }) => {
  const [showDes, setShowDes] = useState(false);
  const [id, setId] = useState(i);
  return (
    <div onClick={() => setShowDes(!showDes)} className="my-2">
      <hr />
      <div
        className={`${
          showDes ? "h-full" : "min-h-fit"
        }  bg-white rounded-2xl transform duration-300 justify-start items-start  flex-col flex`}
      >
        <div className="grow shrink basis-0 self-stretch justify-start w-full items-center inline-flex">
          <div className="grow shrink basis-0 h-[27px] text-black text-xl font-normal font-['Inter'] ">
            {data?.title}
          </div>
          <div className="w-[18px] h-2.5 relative">
            <Image alt="pointDown" src={pointDown} width={18} height={11} />
          </div>
        </div>
        <div
          className={`${
            showDes ? "h-full opacity-100 mt-3 " : "h-0 opacity-0"
          } transform  duration-300 `}
        >
          <div className="flex justify-start items-start flex-col w-full">
            <ul>
              {data.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
