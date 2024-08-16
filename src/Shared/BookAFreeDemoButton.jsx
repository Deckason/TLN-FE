"use client";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../store/features/GetStartedSlice";

const BookAFreeDemoButton = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleOpen());
  };
  return (
    <div
      onClick={toggleModal}
      className="flex mt-8 md:mt-12 lg:mt-16 justify-start ml-8 lg:ml-6 xl:ml-0"
    >
      {/* <button className="px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3.5 bg-teal-600 rounded-lg text-sm sm:text-base lg:text-xl xl:text-2xl font-medium text-neutral-50 flex items-center gap-2.5 hover:bg-neutral-50 hover:text-teal-600 border-2 border-teal-600 transition-colors duration-200">
    Get started
  </button> */}
      <button data-tally-open="3qORRk" data-tally-layout="modal" className="px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3.5 bg-teal-600 rounded-lg text-sm sm:text-base lg:text-xl xl:text-2xl font-medium text-neutral-50 flex items-center gap-2.5 hover:bg-neutral-50 hover:text-teal-600 border-2 border-teal-600 transition-colors duration-200">
        Get started
      </button>
    </div>
  );
};

export default BookAFreeDemoButton;
