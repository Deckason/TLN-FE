"use client";
import Image from "next/image";
import { useGetNewsQuery } from "../../store/apiSlice";
import formatDateTime from "./formatDateTime";
const Newsletter = () => {
  const { data } = useGetNewsQuery("");
  return (
    <div className="flex justify-center items-center py-[60px] sm:py-20 bg-secondary-color mt-10 ">
      <div className="mt-7 w-full max-md:max-w-full mx-[16px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-auto 4xl:max-w-[1680px]">
        <div className="xl:flex justify-between gap-5 ld:gap-1 xl:gap-1 3xl:gap-5 lg:flex-row max-xl:flex-col max-md:gap-0 min-h-[380px]">
          <div className="flex flex-col w-full xl:w-[35%] 2xl:w-[35%] max-md:ml-0 max-md:min-h-[205px] min-h-[275px] max-md:w-full">
            <div className="flex flex-col grow justify-center p-2.5 w-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 text-stone-900 max-md:px-5 items-center lg:max-md:mt-5 max-md:max-w-full">
              <Image
                alt="hindustaniTimes"
                src={data ? data[0].bannerImage : ""}
                className="h-[40px] w-[300px]"
                width={300}
                height={40}
              ></Image>
              <div className="flex flex-col items-center justify-center px-12 mx-8 mt-8 max-md:px-5 max-md:mx-2.5">
                <div className="text-[32px]/[38px] flex items-center justify-center text-nowrap">
                  {data ? data[0].newsTitle : ""}
                </div>
                <div className="self-center mt-1 text-[48px]/[58px] font-bold max-md:text-4xl">
                  NEWS
                </div>
              </div>
            </div>
          </div>
          <div className="flex  md:mt-5 xl:mt-0 xl:ml-5 w-full xl:w-[67%] max-md:ml-0 max-md:w-full min-h-[275px]">
            <div className="flex flex-col grow justify-center md:p-8 w-full bg-white rounded-2xl shadow-md max-md:px-5 max-md:mt-5 max-md:max-w-full hover:shadow-2xl transition duration-300">
              <div className="max-md:max-w-full">
                <div className="flex justify-between max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center xl:justify-between max-md:mt-8">
                      <Image
                        alt="girlImg"
                        className="h-full xl:h-[279px] rounded-lg w-full xl:w-[314px] object-cover "
                        src={data ? data[0].newsImage : ""}
                        width={314}
                        height={279}
                      ></Image>
                      <div>
                        <div className="mt-4 text-xl leading-7 text-primary-color">
                          Brand Stories
                        </div>
                        <div className="mt-1 text-base text-stone-300">
                          Published on{" "}
                          {data ? formatDateTime(data[0].newsDate) : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col xl:justify-between grow  pb-9 md:pb-0  text-xl max-md:mt-8 max-md:max-w-full">
                      <div>
                        <div className="text-[32px]/[39px] text-stone-900 font-normal  max-md:max-w-full">
                          {data ? data[0].newsHeadline : ""}
                          <br></br>
                          <br className="md:hidden"></br>
                        </div>
                        <div className="mt-2 max-md:-mt-5 leading-7 text-neutral-500  max-md:max-w-full text-[20px]/[28px]">
                          {data ? data[0].newsDescription : ""}
                        </div>
                      </div>

                      <div className="mt-5 text-primary-color max-md:max-w-full text-xl">
                        <span className="text-neutral-500">
                          Reads our full story
                        </span>{" "}
                        <Link href={"/"} className="font-bold text-xl leading-6 text-teal-600">
                          here
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
