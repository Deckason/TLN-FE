"use client";
import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dropdownIcon from '/src/Assets/Icons/dropdown.svg';

const Dropdown = (NavData) => {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex z-50 items-center justify-center mx-2">
      <div
        className="relative group"
        onClick={handleClick}
        ref={dropdownRef}
      >
        <button className="inline-flex outline-none items-center justify-center w-full  py-2   2xl:text-[16px] font-medium xl:text-[14px] focus:text-primary-color hover:text-primary-color  text-[10px] bg-white rounded-md   ">
          <span className="mr-2">{NavData?.data?.title}</span>
          <div className={`${isOpened ? "rotate-180" : ""}`}>
            <Image width={18} height={18} src={dropdownIcon} />
          </div>
        </button>
        <div
          className={`absolute right-0 z-50 w-full px-3 ${NavData?.data?.title === "Languages" ? "h-[180px]" : "h-fit"
            }  ${NavData?.data?.title === "Study Abroad" ? "w-[130px]  -left-3" : ""
            } ${NavData?.data?.title === "Work With Us" ? "w-[145px]  -left-4" : ""
            } overflow-y-auto flex items-start flex-col  overflow-x-hidden rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${isOpened ? "" : "hidden"
            }`}
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
