import Image from "next/image";
import ModalImg from "./../Assets/Rectangle 479.svg";

import React, { useEffect } from "react";

const ReusableLoginModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    if (isOpen && typeof window !== "undefined") {
      window?.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined")
        window?.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" flex items-center justify-center  p-5 rounded-[16px]"
      >
        <div className="flex rounded-xl gap-10 items-center w-fit justify-around p-10 bg-white">
            <div>
              <Image
                className="h-[586px] w-[608px]"
                src={ModalImg}
                alt="modalImage"
              />
            </div>
            <div className="text-center w-[509px] h-[568px] flex flex-col items-center justify-around">
              <div className="text-[40px] font-bold">
                Welcome To The Language Network
              </div>
              <div className="text-start w-full justify-around h-[416px] flex flex-col gap-4">
                <label className="text-[20px]">Login here</label>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px]">Mobile Number</label>
                  <input
                    type="number"
                    id="number"
                    placeholder="+91 99999 99999"
                    className="px-3 py-2 border outline-none rounded-md"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between">
                    <label className="text-[14px]">Password</label>
                    <label className="text-[14px] text-teal-600 font-semibold">
                      Forget Password?
                    </label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="*********"
                    className="px-3 py-2 border outline-none rounded-md"
                  />
                </div>
                <button className="p-3 rounded-lg bg-teal-600 hover:bg-white transition duration-300 hover:text-teal-600 text-white border hover:border-teal-600">
                  Login
                </button>
                <div className="font-semibold text-[14px] text-teal-600 text-center">
                  <span className="text-black">Don&apos;t have account ? </span>{" "}
                  Create new account
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ReusableLoginModal;
