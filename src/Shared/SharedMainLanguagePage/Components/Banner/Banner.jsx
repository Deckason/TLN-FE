"use client";
import Image from "next/image";
// import BannerImage from "../../../../Assets/FrenchPage/FrenchMain/BannerImage.png";
// import States from "../States/States";
import States from "../../../../Shared/SharedAdultsPage/Components/States";
import { useState } from "react";
import { useGetBannerQuery } from "../../../../store/apiSlice";
import GetMainLangBannerBtn from "../../../buttons/languages/GetMainLangBannerBtn";
const Banner = ({ BannerData }) => {
  const [Splicing, setSplicing] = useState(true);
  const { data, isLoading: fetchLoading } = useGetBannerQuery("");
  console.log(data);
  // console.log(BannerData);
  return (
    <div className="w-full max-w-[1681px] relative flex justify-center items-center flex-col mb-[50px] sm:mb-[112px]">
      <div className="mt-[43px] max-md:mt-8 max-w-[1681px] mx-auto w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col  max-w-[700px] 2xl:max-w-[700px] 3xl:max-w-[800px] 4xl:max-w-[1000px] max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col text-black max-md:max-w-full gap-[32px]">
                <div className="text-[26px]/[36px] lg:text-[39px]/[45px]  2xl:text-[48px]/[59px] font-bold max-md:max-w-full">
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
                  </div>
                  <div className="-mt-[30px] lg:-mt-[80px] xl:-mt-[60px] 2xl:-mt-[50px] -ml-[50px] lg:-ml-[43px] xl:-ml-[17px]">
                    <GetMainLangBannerBtn />
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
                src={BannerData.BannerImage}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* <Image
          alt="girlAndBoy"
          src={girlAndBoy}
          className="-mb-10 md:hidden w-full"
        /> */}
        <Image
          width={700}
          height={700}
          alt="homePageBannerGirl"
          className="w-full mx-auto h-full object-contain -mb-[20px] md:hidden"
          src={BannerData.BannerImage}
        ></Image>
        <div className="mt-[30px]">
          <States />
        </div>
      </div>
    </div>
  );
};

export default Banner;
