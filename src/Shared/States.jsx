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
    <div className="flex justify-center items-center">
      <div className="max-w-[1680px] min-h-[199px] lg:px-[70px] py-[52px]  bg-white z-10 rounded-2xl border border-stone-300 flex-col mx-10 justify-center items-center  mt-[25.5px] flex">
        <div className="justify-center items-center gap-[90px] flex-wrap flex">
          <div className="flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-stone-900 text-5xl font-bold ">
              7+
            </div>
            <div className="w-[125px] text-center text-black text-opacity-60 text-2xl font-normal ">
              Languages
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-stone-900 text-5xl font-bold ">
              5000+
            </div>
            <div className="w-[180px] text-center text-black text-opacity-60 text-2xl font-normal ">
              Happy Learners
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-[7px] inline-flex">
            <div className="text-center text-stone-900 text-5xl font-bold ">
              150+
            </div>
            <div className="w-[165px] text-center text-black text-opacity-60 text-2xl font-normal ">
              Alpha Mentors
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-[7px] inline-flex">
            <div className="text-center text-stone-900 text-5xl font-bold ">
              50000+
            </div>
            <div className="w-[267px] text-center text-black text-opacity-60 text-2xl font-normal ">
              Hours of Enlightenment
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-center text-stone-900 text-5xl justify-center items-center font-bold gap-x-[8px]  flex">
                4.9{" "}
                <Rating
                  className=" text-[#FFC107] text-nowrap text-[18px]"
                  initialRating={4.5}
                  readonly
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
                />
              </div>
            </div>
            <div className="w-[182px] text-center text-black text-opacity-60 text-2xl font-normal ">
              Google Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
