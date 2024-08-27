"use client";
import Image from "next/image";
import BannerImage from "./../../../../../public/level/BeginnerLevelBanner.png";

import { useEffect, useState } from "react";
import States from "./../../../../Shared/SharedAdultsPage/Components/States/index";
import BannerGetStarted from "../../../buttons/exams/BannerGetStarted";
const Banner = ({ BannerData }) => {
  const [Splicing, setSplicing] = useState(true);
  const [BannerInfo, setBannerInfo] = useState();
  
  useEffect(() => {
    if (Splicing) {
      setBannerInfo(BannerData?.description.slice(0, 200));
    } else {
      setBannerInfo(BannerData?.description);
    }
  }, [Splicing, BannerData?.description]);

  return (
    <div className="w-full relative flex justify-center items-center flex-col ">
      <div className="mt-[43px] max-w-[1681px]  mx-auto w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="grid  relative lg:grid-cols-2 gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col max-md:ml-0 max-lg:w-full xl:mt-[10px] 2xl:mt-[20px] 3xl:mt-[50px]">
              <div className="flex z-10 flex-col px-5 lg:pl-0 text-black max-md:max-w-full">
                <div className="text-[26px]/[36px] lg:text-[39px]/[45px] 2xl:text-[48px]/[59px] font-bold max-md:max-w-full">
                  {BannerData?.title}
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 lg:text-base 2xl:text-xl lg:w-[450px] xl:w-[500px] 2xl:w-full 3xl:w-[120%] max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    <div>
                      {BannerInfo}
                      <span
                        className="cursor-pointer text-primary-color z-50"
                        onClick={() => setSplicing(!Splicing)}
                      >
                        {Splicing ? (
                          <span className="z-50">...Read more</span>
                        ) : (
                          "Read less"
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="-mt-[30px] lg:-mt-[80px] xl:-mt-[60px] 2xl:-mt-[50px] -ml-[50px] lg:-ml-[43px] xl:-ml-[17px]">
                    <BannerGetStarted />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[600px] 2xl:w-[591px] 4xl:w-[708px] h-[375px] 2xl:h-[400px] 4xl:h-[417px] max-md:hidden mx-auto right-0 max-lg:left-0 lg:absolute  lg:block flex-grow pb-[50px]">
              <Image
                alt="bannerImage"
                className="w-full h-full object-contain "
                src={BannerImage}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full -my-10 2xl:mt-5 max-sm:mt-5">
        <Image
          width={700}
          height={700}
          alt="bannerImage"
          className="w-full mx-auto h-full object-contain md:hidden z-50"
          src={"/level/BeginnerLevelBanner.png"}
        ></Image>
        <States />
      </div>
    </div>
  );
};

export default Banner;