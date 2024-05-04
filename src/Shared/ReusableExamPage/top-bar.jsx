import React from "react";
import States from "../States";
import BookAFreeDemoButton from "../BookAFreeDemoButton";
import homePageBannerGirl from "@/Assets/FrenchPage/FrenchMain/girl1.png";
import img1 from "@/Assets/FrenchPage/FrenchMain/girl2.png";
import img2 from "@/Assets/FrenchPage/FrenchMain/girl2.png";
import img3 from "@/Assets/FrenchPage/FrenchMain/girl2.png";
import img4 from "@/Assets/FrenchPage/FrenchMain/girl2.png";

import Image from "next/image";

export const TopBar = (data) => {
  return (
    <div className="w-full justify-center items-center flex-col flex">
      <div className=" p-5 w-full 2xl:w-[1700px]  lg:w-full justify-between items-center lg:flex-row xl:flex-row flex-col gap-5 xl:gap-5 lg:gap-5  flex">
        <div className="lg:w-[832px] xl:w-[832px] w-[fit]  ">
          <div className="text-[40px] font-bold">{data.data.title}</div>
          <div className="text-[20px]">{data.data.para}</div>
          <div className=" mt-5">
            <BookAFreeDemoButton />
          </div>
        </div>
        <div className="lg:w-[832px] xl:w-[832px] w-[fit]  relative flex items-end justify-center">
          <div className="-mb-10 z-50">
            <Image src={homePageBannerGirl} alt="home" className="w-[591px]" />
          </div>
          <div className="absolute top-0 left-0">
            <Image className="w-[244px]" src={img1} alt="img1" />
          </div>
          <div className="absolute top-0 right-0">
            <Image className="w-[244px]" src={img2} alt="img2" />
          </div>
          <div className="absolute bottom-0 left-0">
            <Image className="w-[244px]" src={img3} alt="img3" />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image className="w-[244px]" src={img4} alt="img4" />
          </div>
        </div>
      </div>
      <States />
    </div>
  );
};
