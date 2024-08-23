"use client";
import { useGetStatsQuery } from "../../../../store/apiSlice";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useState, useEffect } from "react"; 

const States = () => {
  const customStyles = {
    itemShapes: <FaStar />,
    activeFillColor: "#22C55E",
    inactiveFillColor: "#BBF7D0",
  };

  const { data: statsData, isLoading } = useGetStatsQuery("");
  const [stats, setStats] = useState({
    totalLanguages: 0,
    totalLeaners: 0,
    totalMentors: 0,
    totalHours: 0,
    googleReviews: 0 // Add googleReviews to state
  });

  useEffect(() => {
    if (!isLoading && statsData) {
      setStats(statsData); 
    }
  }, [isLoading, statsData]); 

  return (
    <div className="flex justify-center  w-full items-center lg:mt-5">
      <div className="lg:w-full 2xl:w-[1684px] max-lg:min-h-[199px] max-sm:pt-0 py-[25px] 2xl:py-[52px] xl:w-full bg-white z-10 shadow-md duration-300 transition hover:shadow-2xl rounded-2xl border border-stone-300 flex-col max-sm:mx-4 max-sm:w-[190px] max-lg:w-[350px] justify-center items-center mt-[25.5px] flex">
        <div className="justify-around w-full 3xl:gap-[90px] items-baseline  flex-wrap scale-90 flex">
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-2 inline-flex w-full lg:w-auto">
            <div className="text-center text-stone-900 text-[32px] 4xl:text-[48px]  font-bold">
              {stats.totalLanguages || "Loading..."} 
            </div>
            <div className="w-[125px] text-center text-black text-opacity-60 mx-auto text-[14px] xl:text-[24px] font-normal">
              Languages
            </div>
          </div>
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-2 inline-flex w-full lg:w-auto">
            <div className="text-center  text-stone-900 text-[32px] 4xl:text-[48px]  font-bold">
              {stats.totalLeaners || "Loading..."}+
            </div>
            <div className="w-[180px] text-center text-black text-opacity-60 mx-auto text-[14px] xl:text-[24px] font-normal  text-nowrap">
              Happy Learners
            </div>
          </div>
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-[7px] inline-flex w-full lg:w-auto">
            <div className="text-center  text-stone-900 text-[32px] 4xl:text-[48px]  font-bold">
              {stats.totalMentors || "Loading..."}+
            </div>
            <div className="w-[165px] text-center text-black text-opacity-60 mx-auto text-[14px] xl:text-[24px] xl:font-normal text-nowrap">
              Alpha Mentors
            </div>
          </div>
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-[7px] inline-flex w-full lg:w-auto">
            <div className="text-center text-stone-900  font-bold text-[32px] 4xl:text-[48px]">
              {stats.totalHours || "Loading..."}+
            </div>
            <div className=" mx-auto text-[14px] xl:text-[24px] xl:text-center text-black text-opacity-60 font-normal">
              Hours of Enlightenment
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-2 cursor-default inline-flex w-full lg:w-auto">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-center text-stone-900  justify-center max-sm:flex-col items-center  font-bold gap-x-[8px] flex text-[32px] 4xl:text-[48px]">
                {stats.googleReviews || "Loading..."} 
                <Rating
                  className="text-[#FFC107] text-nowrap text-[18px]"
                  initialRating={stats.googleReviews} // Use data from state
                  readonly
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
                />
              </div>
            </div>
            <div className="text-center w-[182px] text-[14px] xl:text-[24px] xl:text-center text-black text-opacity-60 font-normal text-nowrap">
              Google Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;