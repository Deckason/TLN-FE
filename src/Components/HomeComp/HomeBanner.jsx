"use client";
import homePageBannerGirl from "../../Assets/Homepage/HomePageBanner/homePageBannerGirl.png";
import BannerDemoButton from "./BannerDemoButton/BannerDemoButton";
import States from "../../Shared/SharedAdultsPage/Components/States";
import GetStartedHomeBannerButton from "../../Shared/buttons/GetStartedHomeBannerButton";

import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className=" md:mx-10 -mt-[32px] sm:mt-5 lg:mt-[30px] xl::mt-[40px] 2xl:mt-[90px] w-full ">
      <div className=" lg:h-[372px] w-full justify-between  items-center flex flex-col lg:flex-row px-2 lg:mb-[80px] 2xl:mb-[120px] xl:mx-auto">
        <div className="lg:w-[525px] lg:min-h-[542px] min-h-fit flex-col z-10 max-lg:my-10 justify-center w-full lg:items-start gap-0 inline-flex">
          <div className=" mt-[50px] mx-[16px] self-stretch lg:h-[261px] h-fit 2xl:h-[261px] xl:h-[261px] flex-col justify-center items-start gap-[8px] sm:gap-4 flex">
            <div className="self-stretch text-stone-900 text-[24px]/[29px] xl:text-[50px]/[60px]  2xl:text-[60px]/[72px] lg:text-[40px]/[48.01px] md:text-3xl font-[700] ">
              Your Gateway to Language Excellence
            </div>
            <div className="self-stretch text-stone-900 2xl:text-[32px]/[39px] xl:text-[24px]/[29px] text-[20px]/[28px] font-normal text-nowrap">
              Learn more than just a language!
            </div>
          </div>
          <div className="-mt-[30px] lg:-mt-[90px] xl:-mt-[90px] 2xl:-mt-[50px] -ml-[30px] xl:ml-0">
            <GetStartedHomeBannerButton />
          </div>
        </div>
        <Image
          alt="homePageBannerGirl"
          className="w-[90%] 2xl:max-w-[769px] max-h-[515px] lg:w-[50%] relative top-[27px] lg:block"
          src={homePageBannerGirl}
          width={800}
          height={520}
          priority={true}
        ></Image>
        {/* <div className="max-w-[400px] h-[522px]  py-8 xl:mx-auto px-3  rounded-2xl z-10 border bg-white shadow-md hover:shadow-xl max-lg:hidden transition duration-200 md:bg-transparent border-stone-300 justify-center items-center gap-2.5 flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-8 inline-flex">
            <div className="self-stretch h-[75px] flex-col justify-center items-center gap-1 flex">
              <div className="self-stretch text-center text-stone-900 text-2xl font-medium ">
                Drop an Enquiry
              </div>
              <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                Our Academic Counsellor will give you a call shortly
              </div>
            </div>
            <div className="self-stretch h-[360px] flex-col justify-start items-center gap-8 flex">
              <div className="self-stretch h-[272px] flex-col justify-start items-center gap-4 flex">
                <input
                  placeholder="Text"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
                <input
                  placeholder="Email ID"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="email"
                />
                <input
                  placeholder="Mobile Number"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="number"
                />
                <input
                  placeholder="Preferred Language"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
              </div>
              <button className="self-stretch h-14 px-8 py-3 rounded-lg hover:text-white text-teal-600 shadow-md hover:shadow-xl transition duration-300 bg-white hover:bg-teal-600 border hover:border-none border-teal-600 justify-center items-center gap-2.5 inline-flex">
                <div className="w-[215px] h-[30px] text-center  text-2xl font-medium ">
                  Send Enquiry
                </div>
              </button>
            </div>
          </div>
        </div> */}
      </div>
      {/* states component is a shared component */}
      <div className="mb-10 2xl:mt-[50px]">
        <States />
      </div>
    </div>
  );
};

export default HomeBanner;
