"use client";
import { data } from "autoprefixer";
import Link from "next/link";
import { useState } from "react";

const Dropdown = (NavData) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="min-h-screen flex z-50 items-center justify-center mx-2">
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex outline-none items-center justify-center w-full  py-2   2xl:text-[16px] font-medium xl:text-[14px] focus:text-primary-color hover:text-primary-color  text-[10px] bg-white rounded-md   ">
          <span className="mr-2">{NavData?.data?.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5  -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`absolute right-0 z-50 w-full px-3 ${
            NavData?.data?.title === "Languages" ? "h-[180px]" : "h-fit"
          }  ${
            NavData?.data?.title === "Study Abroad" ? "w-[130px]  -left-3" : ""
          } ${
            NavData?.data?.title === "Work With Us" ? "w-[145px]  -left-4" : ""
          } overflow-y-auto flex items-start flex-col  overflow-x-hidden rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${
            isHovered ? "" : "hidden"
          }`}
          onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over dropdown items
        >
          {/* Dropdown content goes here */}
          {NavData?.data?.data?.map((Nav) => (
            <Link
              key={Nav.key}
              href={Nav.path ? Nav.path : "#"}
              className="block text-nowrap py-2 text-sm hover:bg-gray-100  active:bg-blue-100 cursor-pointer rounded-md"
            >
              {Nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
