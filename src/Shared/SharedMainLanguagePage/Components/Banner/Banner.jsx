"use client";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import Image from "next/image";
import BannerImage from "@/Assets/FrenchPage/FrenchMain/BannerImage.png";
import States from "../States/States";
import { useState } from "react";
const Banner = ({ BannerData }) => {
  const [Splicing, setSplicing] = useState(true);
  // console.log(BannerData);
  return (
    <div className="w-full relative flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[43px] max-w-[1681px]  mx-auto w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col  max-w-[700px] max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  {BannerData?.title}
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 lg:text-base 2xl:text-xl max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    {Splicing ? (
                      <div>
                        {BannerData?.description.slice(0, 390)}
                        <span
                          className="cursor-pointer text-neutral-color"
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
                  <div className="max-sm:absoluteflex justify-star max-2xl:-ml-8 max-2xl:-mt-6 max-md:-ml-8 ">
                    <BookAFreeDemoButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-2xl:w-[540px] right-0 absolute hidden w-[700px] lg:block flex-grow">
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
        <States />
      </div>
    </div>
  );
};

export default Banner;
