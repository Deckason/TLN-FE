"use client";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import Image from "next/image";
import BannerImage from "../../../../Assets/FrenchPage/FrenchAdult/BannerTwo.svg";

import { useEffect, useState } from "react";
import States from "../States";
const Banner = ({ BannerData }) => {
  const [Splicing, setSplicing] = useState(true);
  const [BannerInfo, setBannerInfo] = useState();
  useEffect(() => {
    if (Splicing) {
      setBannerInfo(BannerData?.Description.slice(0, 200));
    } else {
      setBannerInfo(BannerData?.Description);
    }
  }, [Splicing,BannerData?.Description]);
  return (
    <div className="w-full relative flex justify-center items-center flex-col ">
      <div className="mt-[43px] max-w-[1681px]  mx-auto w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="grid  relative lg:grid-cols-2 gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col   max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  Online {BannerData?.Language} Classes for Adults
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 lg:text-base 2xl:text-xl lg:w-[450px] xl:w-[500px] 2xl:w-full max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    <div>
                      {BannerInfo}
                      <span
                        className="cursor-pointer text-primary-color"
                        onClick={() => setSplicing(!Splicing)}
                      >
                        {Splicing ? "...Read more" : "Read less"}
                      </span>
                    </div>
                  </div>{" "}
                  <div className="flex justify-start  max-2xl:-ml-8 max-2xl:-mt-6 max-md:-ml-8 max-lg:ml-1 max-sm:ml-1 ">
                    <BookAFreeDemoButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="  mx-auto max-md:-mb-[26px] max-lg:-mb-[42px] lg:-mb-0 lg:block px-4 lg:absolute  right-5 -top-10">
              <Image
                alt="homePageBannerGirl"
                className="w-[600px]  h-full object-contain "
                src={BannerImage}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full -my-10 2xl:mt-5 max-sm:mt-5">
        <States />
      </div>
    </div>
  );
};

export default Banner;
