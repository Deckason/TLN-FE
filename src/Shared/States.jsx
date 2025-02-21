"use client";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const States = () => {
  const customStyles = {
    itemShapes: <FaStar />,
    activeFillColor: "#22C55E",
    inactiveFillColor: "#BBF7D0",
  };
  return (
    <div className="flex p-5 w-full h-full justify-center items-center">
      <div className="w-full lg:w-[975px] xl:w-[1250px] 2xl:w-[1375px] 3xl:w-[1475px]  min-h-[199px] py-[52px] bg-white z-10 rounded-2xl border shadow-md hover:shadow-2xl transition duration-300 border-stone-300 flex-col max-sm:mx-4 justify-center items-center flex">
        <div className="justify-around w-full 3xl:gap-[90px] gap-10 items-baseline flex-wrap flex">
          <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
            <div className="text-center text-stone-900 max-sm:text-3xl text-5xl font-bold">
              7
            </div>
            <div className="w-fit xl:w-[125px] lg:w-[125px] text-center text-black text-opacity-60 mx-auto max-sm:text-base text-2xl font-normal">
              Languages
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
            <div className="text-center max-sm:text-3xl text-stone-900 text-5xl font-bold">
              5000+
            </div>
            <div className="w-fit xl:w-[180px] lg:w-[180px] text-center text-black text-opacity-60 mx-auto max-sm:text-base text-2xl font-normal">
              Happy Learners
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
            <div className="text-center max-sm:text-3xl text-stone-900 text-5xl font-bold">
              150+
            </div>
            <div className="w-fit xl:w-[165px] lg:w-[165px] text-center text-black text-opacity-60 text-2xl mx-auto max-sm:text-base font-normal">
              Alpha Mentors
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
            <div className="text-center text-stone-900 text-5xl font-bold max-sm:text-3xl">
              50000+
            </div>
            <div className="w-fit xl:w-[267px] lg:w-[267px] mx-auto max-sm:text-base text-center text-black text-opacity-60 text-2xl font-normal">
              Hours of Enlightenment
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-3 inline-flex w-full lg:w-auto">
            <div className="justify-start items-center gap-3 flex">
              <div className="text-center text-stone-900 text-5xl justify-center items-center max-sm:text-3xl font-bold gap-x-[8px] flex">
                4.9 {/* Assuming Rating is a valid component */}
                <Rating
                  className="text-[#FFC107] text-nowrap text-[18px]"
                  initialRating={4.5}
                  readonly
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
                />
              </div>
            </div>
            <div className="w-fit xl:w-[182px] lg:w-[182px] text-center text-black text-opacity-60 max-sm:text-base text-2xl font-normal">
              Google Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
