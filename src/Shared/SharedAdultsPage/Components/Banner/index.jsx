"use client";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import Image from "next/image";
import BannerImage from "../../../../Assets/FrenchPage/FrenchAdult/BannerTwo.svg";
import AdultsBannerBtn from "./../../../../Shared/buttons/adults/AdultsBannerBtn";
import SvgContainer from "../../../../Utilities/svgContainer/SvgContainer";

import { useEffect, useState } from "react";
import States from "../States";
import { useGetBannerQuery } from "../../../../store/apiSlice";
const Banner = ({ BannerData, language }) => {
  const [Splicing, setSplicing] = useState(true);
  const [BannerInfo, setBannerInfo] = useState();
  const { data } = useGetBannerQuery({
    context: "Adult",
    language: language,
  });

  useEffect(() => {
    if (Splicing) {
      const des =
        data && data.length > 0 ? data[0].bannerDescription.slice(0, 200) : "";
      // const des =
      //   data && data.length > 0
      //     ? data[0].bannerDescription.slice(0, 200)
      //     : BannerData?.Description?.slice(0, 200);
      setBannerInfo(des);
    } else {
      const des = data && data.length > 0 ? data[0].bannerDescription : "";
      // const des =
      //   data && data.length > 0
      //     ? data[0].bannerDescription
      //     : BannerData?.Description;
      setBannerInfo(des);
    }
  }, [Splicing, data, BannerData?.Description]);

  return (
    <div className="w-full relative flex justify-center items-center flex-col ">
      <div className="mt-[43px] max-w-[1681px]    w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="grid  relative lg:grid-cols-2 gap-5 max-lg:flex-col max-md:gap-0 ">
            <div className="flex flex-col    max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col items-start px-5 text-black max-md:max-w-full">
                <div className="text-[24px] font-bold w-full xl:w-[643px] 4xl:w-[1106px] xl:text-[48px]">
                  {data && data.length > 0
                    ? data[0].bannerTitle
                    : `Online ${BannerData?.Language} Classes for Adults`}
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
                  </div>{" "}
                  <div className="flex justify-start ml-[-29px] xl:ml-[-8px]">
                    <AdultsBannerBtn />
                  </div>
                </div>
              </div>
            </div>
            <div className="  mx-auto max-md:-mb-[26px] max-lg:-mb-[42px] lg:-mb-0 lg:block px-4 lg:absolute  right-5 -top-10">
              {/* <Image
                width={700}
                height={700}
                alt="homePageBannerPicture"
                className="w-[465px] h-[417px]  object-contain "
                src={
                  (data && data.length > 0 && data[0].bannerImage) ||
                  BannerData?.BannerImage
                }
              /> */}
              <SvgContainer
                svgUrl={
                  (data && data.length > 0 && data[0].bannerImage)
                }
              />
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
