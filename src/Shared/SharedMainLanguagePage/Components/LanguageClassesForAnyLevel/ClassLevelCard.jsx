"use client";
import Image from "next/image";
import RightArrowPrimary from "../../../../Assets/WhyShould/RightArrowPrimary.svg";
import RightArrowWhite from "../../../../Assets/WhyShould/RightArrowWhite.svg";

import Link from "next/link";
import { useState } from "react";

const ClassLevelCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-md:my-4">
      <div className="w-full shadow-md hover:shadow-xl transition duration-300 rounded-xl max-md:h-full max-sm:min-h-full max-lg:h-[520px] min-h-[609px] 3xl:min-h-[500px]  flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-fit py-[72px] bg-secondary-color rounded-t-xl flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch text-center text-neutral-800 text-2xl font-bold ">
            {data?.title}
          </div>
          <div className="self-stretch text-center text-neutral-800 text-2xl font-medium ">
            {data?.level}
          </div>
        </div>
        <div className="w-full h-full min-h-[100px]  lg:min-h-[300px] flex-col justify-between items-center gap-8 flex">
          <div className="self-stretch max-sm:max-h-full max-sm:min-h-full max-h-[230px] md:max-h-[255px] min-h-[280px] mx-5 md:min-h-[240px] 3xl:min-h-[200px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-500 text-xl font-normal leading-7">
              {data?.description}
            </div>
          </div>
          <div className="self-stretch mt-0 m-6 h-14 flex-col justify-center items-center gap-2.5 flex">
            <Link
              href={data?.link}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="self-stretch shadow-md hover:shadow-xl transition duration-300 h-14 px-8 py-3.5 rounded-lg border text-teal-600 hover:bg-teal-600 hover:text-white border-teal-600 justify-center items-center gap-2.5 inline-flex"
            >
              <button className="text-center text-xl font-normal  leading-7 flex justify-center items-center w-full gap-[10px]">
                <span>Learn More </span>
                <Image
                  width={25}
                  height={25}
                  alt="RightArrowPrimary"
                  src={isHovered ? RightArrowWhite : RightArrowPrimary}
                ></Image>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLevelCard;
