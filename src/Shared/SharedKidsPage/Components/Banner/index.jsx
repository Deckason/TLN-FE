"use client";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import States from "../States";
import KidsBannerBtn from "./../../../../Shared/buttons/kids/KidsBannerBtn";

const Banner = ({ BannerData }) => {
  const [Splicing, setSplicing] = useState(true);
  const [BannerInfo, setBannerInfo] = useState();

  useEffect(() => {
    if (Splicing) {
      setBannerInfo(BannerData?.Description?.slice(0, 200));
    } else {
      setBannerInfo(BannerData?.Description);
    }
  }, [Splicing, BannerData?.Description]);

  return (
    <div className="w-full relative flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[43px] max-w-[1681px] mx-auto w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="grid lg:grid-cols-2 gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col max-w-[700px] max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-[24px] font-bold w-full xl:w-[643px] 4xl:w-[1106px] xl:text-[48px]">
                  Online {BannerData?.Language} Classes for kids!
                </div>
                <div className="mt-2  text-[16px] leading-7  2xl:text-[20px] w-full xl:w-[643px] 4xl:w-[1106px] relative mb-[32px] flex flex-col items-start">
                  <div className="mb-[24px] 2xl:mb-[32px]">
                    <div>
                      {BannerInfo}
                      <span
                        className="cursor-pointer text-primary-color"
                        onClick={() => setSplicing(!Splicing)}
                      >
                        {Splicing ? "...Read more" : "Read less"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <KidsBannerBtn />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-md:-mb-[26px] max-lg:-mb-[42px] lg:-mb-0 lg:block px-4 lg:absolute  right-5 top-[-5px] z-[-1]">
              <Image
                width={700}
                height={700}
                alt="homePageBannerGirl"
                className="w-[465px] h-[417px]  object-contain "
                src={BannerData?.BannerImage}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[53px] xl:mt-[-41px] 4xl:mt-[90px]">
        <States />
      </div>
    </div>
  );
};

export default Banner;
