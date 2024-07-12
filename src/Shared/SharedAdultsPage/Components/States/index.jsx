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
    <div className="flex justify-center  w-full items-center mt-5">
      <div className="lg:w-[1000px] 2xl:w-[1684px] max-lg:min-h-[199px] max-sm:pt-0 py-[25px] 2xl:py-[52px] xl:w-full bg-white z-10 shadow-md duration-300 transition hover:shadow-2xl rounded-2xl border border-stone-300 flex-col max-sm:mx-4 max-sm:w-[190px] max-lg:w-[350px] justify-center items-center mt-[25.5px] flex">
        <div className="justify-around w-full 3xl:gap-[90px] items-center  flex-wrap scale-90 flex">
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-2 inline-flex w-full lg:w-auto">
            <div className="text-center text-stone-900 max-sm:text-[32px] text-4xl 2xl:text-5xl  font-bold">
              {stats.totalLanguages || "Loading..."} 
            </div>
            <div className="w-[125px] text-center text-black text-opacity-60 mx-auto max-sm:text-sm text-2xl font-normal">
              Languages
            </div>
          </div>
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-2 inline-flex w-full lg:w-auto">
            <div className="text-center max-sm:text-[32px] text-stone-900 text-4xl 2xl:text-5xl font-bold">
              {stats.totalLeaners || "Loading..."}+
            </div>
            <div className="w-[180px] text-center text-black text-opacity-60 mx-auto max-sm:text-sm text-2xl font-normal">
              Happy Learners
            </div>
          </div>
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-[7px] inline-flex w-full lg:w-auto">
            <div className="text-center max-sm:text-[32px] text-stone-900 text-4xl 2xl:text-5xl font-bold">
              {stats.totalMentors || "Loading..."}+
            </div>
            <div className="w-[165px] text-center text-black text-opacity-60 text-2xl mx-auto max-sm:text-sm font-normal">
              Alpha Mentors
            </div>
          </div>
          <div className="flex-col max-lg:mb-10 justify-center cursor-default items-center gap-[7px] inline-flex w-full lg:w-auto">
            <div className="text-center text-stone-900 text-4xl 2xl:text-5xl font-bold max-sm:text-3xl">
              {stats.totalHours || "Loading..."}+
            </div>
            <div className=" mx-auto max-sm:text-sm text-center text-black text-opacity-60 text-2xl font-normal">
              Hours of Enlightenment
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-2 cursor-default inline-flex w-full lg:w-auto">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-center text-stone-900 text-4xl 2xl:text-5xl justify-center max-sm:flex-col items-center max-sm:text-[32px] font-bold gap-x-[8px] flex">
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
            <div className="w-[182px] max-sm:text-sm text-center text-black text-opacity-60 text-2xl font-normal">
              Google Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;