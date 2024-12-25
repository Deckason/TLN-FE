"use client";
import pointDown from "../../../../../Assets/Icons/pointDown.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
const FaqsCard = ({ data, i, id, setId, open, setOpen }) => {
  const [showDes, setShowDes] = useState(false);
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    if (i === 0 && id === 0) {
      setOpen(true);
    }
  }, [i, id, setOpen]);
  return (
    <div
      onClick={() => {
        setOpen(false);
        setId(i);
        setShowDes(!showDes);
      }}
      className="my-2 w-full "
    >
      <div
        className={`${
          (showDes && i === id) || (open && i === 0)
            ? "h-full"
            : " min-h-[75px]"
        } p-4 xl:p-6 w-full shadow-md transition hover:shadow-2xl bg-white rounded-2xl transform duration-300 justify-center items-center flex-col flex`}
      >
        <div className="grow shrink basis-0 transform duration-300 self-stretch w-full justify-start items-center inline-flex ">
          <div
            className="grow shrink basis-0  text-black text-[20px] transform duration-300 font-normal w-full leading-tight"
            dangerouslySetInnerHTML={{
              __html: data?.question,
            }}
          />
          <div className="max-md:w-4  w-[18px]  relative">
            <Image alt="pointDown" src={pointDown} width={18} height={11} />
          </div>
        </div>
        <div
          className={` ${
            showDes || (open && i === 0)
              ? " opacity-100 mt-3 "
              : "hidden opacity-0"
          }  transform w-full  duration-300 text-justify lg:ps-4 lg:me-8 text-[16px] text-[#757575] leading-tight font-normal`}
          dangerouslySetInnerHTML={{ __html: data?.answer }}
        />
      </div>
    </div>
  );
};

export default FaqsCard;
