"use client";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../store/features/GetStartedSlice";

const BookAFreeDemoButton = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleOpen());
  };
  return (
    <div
      onClick={toggleModal}
      className="flex mt-[48px] items-center justify-center"
    >
      <button className="px-8 py-2 lg:py-3.5 bg-teal-600 rounded-lg justify-center text-neutral-50 lg:text-2xl font-medium items-center gap-2.5 inline-flex hover:bg-neutral-50 hover:text-teal-600 border-2 border-teal-600">
        Book a free demo
      </button>
    </div>
  );
};

export default BookAFreeDemoButton;
