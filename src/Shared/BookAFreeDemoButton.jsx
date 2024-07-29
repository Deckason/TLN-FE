"use client";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../Store/features/GetStartedSlice";

const BookAFreeDemoButton = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleOpen());
  };
  return (
    <div
      onClick={toggleModal}
      className="self-stretch h-[53px] flex-col justify-start items-start scale-75 2xl:scale-100 gap-2.5 flex"
    >
      <div className="-ml-[5px] h-[58px] shadow-md hover:shadow-xl transition focus:bg-white cursor-pointer duration-300 px-8 py-3.5 hover:bg-white text-white focus:text-teal-600 focus:border-teal-600 border  hover:text-teal-600 hover:border-teal-600 bg-teal-600 rounded-lg z-30 justify-center items-center gap-2.5 inline-flex">
        <div className="h-[30px] text-center text-2xl font-medium ">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default BookAFreeDemoButton;