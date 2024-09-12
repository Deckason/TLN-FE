"use client";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../../store/features/GetStartedSlice";

const BannerDemoButton = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleOpen());
  };
  return (
    <div
    onClick={toggleModal}
      className="mt-[24px] mx-[16px] w-[91%] sm:w-[279px] h-[43px] sm:h-[58px] py-[12px] px-[32px] text-[16px]/[19.26px] sm:text-2xl font-medium shadow-md hover:shadow-xl transition focus:bg-white 
      cursor-pointer duration-300  hover:bg-white text-white focus:text-teal-600
       focus:border-teal-600 border  hover:text-teal-600 hover:border-teal-600
        bg-teal-600 rounded-lg z-30 text-center"
    >
      Get started
    </div>
  );
};

export default BannerDemoButton;
