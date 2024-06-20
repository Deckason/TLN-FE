"use client";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import Image from "next/image";
import BannerImage from "../../../../Assets/FrenchPage/FrenchMain/BannerImage.png";
import States from "../States/States";
import girlImage from "../../../../Assets/FrenchPage/FrenchMain/girl1.png";
import girlAndBoy from "../../../../Assets/FrenchPage/FrenchMain/GirlAndBoy.svg";
import { useState } from "react";
const Banner = ({ BannerData }) => {
  const [Splicing, setSplicing] = useState(true);
  // console.log(BannerData);
  return (
    <div className="w-full relative flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[43px] max-md:mt-8 max-w-[1681px]  mx-auto w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col  max-w-[700px] max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-2xl">
                  {BannerData?.title}
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 lg:text-base 2xl:text-xl lg:w-[450px] xl:w-[500px] 2xl:w-full max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8 max-md:text-[#757575]">
                    {Splicing ? (
                      <div>
                        {typeof window !== "undefined" &&
                        window?.innerWidth > 1024
                          ? window?.innerWidth > 1440
                            ? BannerData?.description.slice(0, 370)
                            : BannerData?.description.slice(0, 300)
                          : BannerData?.description.slice(0, 300)}
                        <br />
                        <span
                          className="cursor-pointer text-primary-color "
                          onClick={() => setSplicing(!Splicing)}
                        >
                          Read more...
                        </span>
                      </div>
                    ) : (
                      <div>
                        {BannerData?.description}
                        <span
                          className="cursor-pointer text-neutral-color"
                          onClick={() => setSplicing(!Splicing)}
                        >
                          Read less
                        </span>
                      </div>
                    )}
                  </div>{" "}
                  <div className="max-sm:absolute max-sm:-left-[4px] flex justify-star max-2xl:-ml-8 max-2xl:-mt-6 max-md:-ml-8 ">
                    <BookAFreeDemoButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-2xl:w-[540px] max-sm:hidden mx-auto right-0 max-lg:left-0 lg:absolute w-[700px] lg:block flex-grow">
              <Image
                alt="homePageBannerGirl"
                className="w-full  h-full object-contain "
                src={BannerImage}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full -my-10">
        <Image
          alt="girlAndBoy"
          src={girlAndBoy}
          className="-mb-10 md:hidden w-full"
        />
        <Image
          alt="homePageBannerGirl"
          className="w-full  -ml-8 h-full object-contain -mb-10 md:hidden"
          src={girlImage}
        ></Image>
        <States />
      </div>
    </div>
  );
};

export default Banner;
