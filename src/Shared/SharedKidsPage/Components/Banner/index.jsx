"use client";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import States from "../States";

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
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  Online {BannerData?.Language} Classes for kids!
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
                  </div>
                  <div className="max-sm:absoluteflex justify-star max-2xl:-ml-8 max-2xl:-mt-6 max-md:-ml-8">
                    <BookAFreeDemoButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[540px] 2xl:w-[591px] 4xl:w-[708px] h-[375px] 2xl:h-[400px] 4xl:h-[417px] max-md:hidden mx-auto right-0 max-lg:left-0 lg:absolute  lg:block flex-grow pb-[50px]">
              <Image
                width={700}
                height={700}
                alt="homePageBannerGirl"
                className="w-full h-full object-contain "
                src={BannerData?.BannerImage}
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