"use client";
import Image from "next/image";
import logo from "../Assets/TLN_logo.png";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { BsCaretRight, BsCaretRightFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { usePathname } from "next/navigation";
import "../css/NavBarCustom.css";
import Dropdown from "../Components/DropDown";
import ReusableLoginModal from "../Shared/LoginModal";
import LanguageDropdown from "./LanguageDropDown";
import { useGetPromoQuery } from "../store/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../store/features/GetStartedSlice";
import GetStartedHomeButton from "../Shared/buttons/GetStartedHomeButton";

const Nav = () => {
  const languageOptions = {
    title: "Languages",
    data: [
      // {
      //   key: "1",
      //   name: "Home",
      //   path: "/",
      // },
      {
        key: "2",
        name: "English",
        path: "/Languages/English",
      },
      {
        key: "3",
        name: "French",
        path: "/Languages/French",
      },
      {
        key: "4",
        name: "Spanish",
        path: "/Languages/Spanish",
      },
      {
        key: "5",
        name: "German",
        path: "/Languages/German",
      },
      {
        key: "6",
        name: "Mandarin",
        path: "/Languages/Mandarin",
      },
      {
        key: "7",
        name: "Japanese",
        path: "/Languages/Japanese",
      },
      {
        key: "8",
        name: "Korean",
        path: "/Languages/Korean",
      },
    ],
  };

  const NavOptions = [
    // {
    //   name: "Home",
    //   path: "/",
    // },
    // {
    //   name: "School",
    //   path: "/Navigation/School",
    // },
    // {
    //   name: "College",
    //   path: "/Navigation/College",
    // },
    // {
    //   name: "Study Abroad",
    //   path: "/Navigation/StudyAbroad",
    // },
    // {
    //   name: "Corporate Training",
    //   path: "/Navigation/CorporateTraining",
    // },
    // {
    //   name: "Work with us",
    //   path: "/Navigation/WorkWithUs",
    // },
  ];

  const studyAbroad = {
    title: "Study Abroad",
    data: [
      { key: "1", name: "TOPIK 2- Level 5", path: "/Navigation/StudyAbroad" },
      { key: "2", name: "TOPIK 2- Level 6", path: "/Navigation/StudyAbroad" },
    ],
  };

  const WorkWithUsData = {
    title: "Work With Us",
    data: [
      { key: "1", name: "Careers", path: "/Navigation/WorkWithUs" },
      { key: "2", name: "Teach with us", path: "/Navigation/WorkWithUs" },
      { key: "3", name: "Collaborate with us", path: "/Navigation/WorkWithUs" },
    ],
  };
  // all use states:-
  const pathname = usePathname();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [showStudyAbroad, setShowStudyAbroad] = useState(false);
  const [showWorkWithUs, setShowWorkWithUs] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const isOpen = useSelector((state) => state.getStartedForm.isOpen);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleOpen());
  };

  const { data, isLoading, isError, error, refetch } = useGetPromoQuery("");

  return (
    <header className="z-40 ">
      {/* <>
        <ReusableLoginModal isOpen={isOpen} onClose={toggleModal} />
      </> */}
      <nav className="shadow-custom">
        {/* Batches Starting Now  */}
        <section>
          <div className="bg-black flex items-center justify-center  lg:h-[48px] w-full">
            <h1 className=" text-primary-color py-2 text-[14px]/[17px] 2xl:text-[16px] xl:text-[14px] text-[10px] md:text-base font-bold ">
              {/* DELF /Goethe Exam Schedule */}
              <Link
                href={data ? data[0].link : "/"}
                className="flex flex-col sm:flex-row "
              >
                {/* <span className="font-[500]"> {data ? data[0].label : ""}</span> */}
                {/* <span className="font-normal hidden sm:inline">
                  {" "}
                  {data && "| "}
                </span> */}
                <span className="font-[700] text-center">
                  {data ? data[0].topic : ""}
                </span>
              </Link>
            </h1>
          </div>
        </section>
        {/* nav options section */}
        <section className="lg:flex lg:py-2.5 lg:bg-white lg:shadow lg:justify-center lg:w-full lg:items-center lg:gap-2.5 z-50">
          <div className="hidden lg:flex justify-center w-[1730px] items-center ">
            <div className=" h-[58px] justify-between items-center inline-flex">
              <div className="w-full self-stretch justify-between items-center flex">
                <Link href="/">
                  <Image
                    width={500}
                    className="w-[180px] h-[82px] object-contain"
                    height={500}
                    src={logo}
                    alt="logo"
                  ></Image>
                </Link>
                <Dropdown data={languageOptions} />
                <div className="px-2.5 py-[29px] flex-col justify-start items-start z-50 cursor-pointer  gap-2.5 hidden lg:flex">
                  <div className="justify-start items-start gap-5 xl:gap-6 cursor-pointer  inline-flex">
                    {
                      NavOptions.map((Nav) => (
                        <Link
                          className="text-nowrap 2xl:text-[16px] xl:text-[14px] font-medium focus:text-primary-color hover:text-primary-color  text-[10px]"
                          onMouseLeave={() => {
                            if (Nav.name === "Work with us") {
                              setShowWorkWithUs(false);
                            }
                            if (Nav.name === "Study Abroad") {
                              setShowStudyAbroad(false);
                            }
                          }}
                          onMouseOver={() => {
                            if (Nav.name === "Work with us") {
                              setShowWorkWithUs(true);
                            }
                            if (Nav.name === "Study Abroad") {
                              setShowStudyAbroad(true);
                            }
                          }}
                          href={Nav.path}
                          key={Nav.name}
                        >
                          {Nav.name}
                        </Link>
                      )) //Nav
                    }
                  </div>
                </div>

                {/* <LanguageDropdown /> */}
              </div>
            </div>
            <div className=" hidden flex-grow gap-4 lg:flex justify-end me-5 ">
              <button
                data-tally-open="3qORRk"
                data-tally-layout="modal"
                data-tally-width="676"
                data-tally-hide-title="1"
                className=" hover:shadow-md transition duration-300 text-[16px]  lg:w-[160px] border  h-[53px] px-[18px] py-[8px] hover:bg-white hover:border-teal-600 hover:text-teal-600 focus:bg-white focus:border-teal-600 focus:text-teal-600 bg-teal-600 rounded-lg justify-center text-white items-center gap-2.5 inline-flex text-nowrap"
              >
                Get started
              </button>
              <Link
                href={"https://login.live.com/"}
                className="hover:shadow-md transition hover:text-white text-teal-600 duration-300 self-stretch px-[18px] py-[8px] h-[53px]  focus:bg-teal-600 focus:text-white rounded-lg border hover:bg-teal-600 bg-white border-teal-600 justify-center items-center gap-2.5 inline-flex text-nowrap"
              >
                <div className="lg:max-w-[280px] text-center  xl:text-[16px] font-medium ">
                  Already booked the class?
                </div>
              </Link>
            </div>
          </div>
          {/* side bar */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center mx-5">
              <Image
                width={500}
                className="w-[100px]  object-contain"
                height={500}
                src={logo}
                alt="logo"
              ></Image>
              {/* <div className="absolute right-14">
                <LanguageDropdown />
              </div> */}
              <HiMenuAlt1
                role="button"
                onClick={() => {
                  setShowNav(!showNav);
                }}
                className="text-3xl text-primary-color"
              />
            </div>
            <div
              className={`min-h-lvh fixed bg-white w-[200px] ${
                showNav ? "right-0" : "right-[-120%]"
              } transform duration-500 border-2 border-secondary-color top-0 z-50`}
            >
              <IoMdCloseCircle
                onClick={() => {
                  setShowNav(false);
                }}
                role="button"
                className="text-3xl text-primary-color bg-white absolute left-[-30px] rounded-l-2xl top-9 border-2 border-secondary-color border-e-0"
              />
              <div className="flex overflow-y-scroll example pb-10 h-screen flex-col justify-start p-2.5 items-start gap-2">
                {/* <button className="text-primary-color font-medium">
                  Login
                </button> */}
                <div className="h-[1px] w-full bg-secondary-color rounded-full"></div>
                <button
                  className={` w-full border-secondary-color text-sm   text-start duration-500 transform    border rounded-lg`}
                >
                  <div
                    onClick={() => {
                      setShowLanguageOptions(!showLanguageOptions);
                    }}
                    role="button"
                    className={`flex items-center  p-1.5 justify-between `}
                  >
                    Languages
                    <BsCaretRightFill
                      className={`${
                        showLanguageOptions ? "rotate-90" : "rotate-0"
                      } transform duration-300`}
                    />
                  </div>
                  {showLanguageOptions && (
                    <div className={"p-2 flex-col flex gap-1.5"}>
                      {languageOptions.data.map((language, i) => (
                        <Link
                          onClick={() => {
                            setShowNav(false);
                          }}
                          className="flex w-full justify-between items-center text-primary-color border-collapse"
                          href={language.path}
                          key={i}
                        >
                          {language.name}
                          <GoDotFill
                            className={`${
                              pathname === language.path
                                ? "text-primary-color"
                                : "text-white"
                            }`}
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </button>
                {/* <button
                  onClick={() => {
                    setShowNav(false);
                  }}
                  className="w-full  border-secondary-color text-sm   text-start duration-500 transform    border rounded-lg"
                >
                  <Link
                    href={"/Navigation/School"}
                    role="button"
                    className={`flex items-center  p-1.5 justify-between `}
                  >
                    School
                    <GoDotFill
                      className={`${
                        pathname === "/Navigation/School"
                          ? "text-primary-color"
                          : "text-white"
                      }`}
                    />
                  </Link>
                </button> */}
                {/* <button
                  onClick={() => {
                    setShowNav(false);
                  }}
                  className="w-full  border-secondary-color text-sm   text-start duration-500 transform    border rounded-lg"
                >
                  <Link
                    href={"/Navigation/College"}
                    role="button"
                    className={`flex items-center  p-1.5 justify-between `}
                  >
                    College
                    <GoDotFill
                      className={`${
                        pathname === "/Navigation/College"
                          ? "text-primary-color"
                          : "text-white"
                      }`}
                    />
                  </Link>
                </button> */}
                {/* <button
                  className={` w-full border-secondary-color text-sm   text-start duration-500 transform    border rounded-lg`}
                >
                  <div
                    onClick={() => {
                      setShowStudyAbroad(!showStudyAbroad);
                    }}
                    role="button"
                    className={`flex items-center  p-1.5 justify-between `}
                  >
                    Study Abroad
                    <BsCaretRightFill
                      className={`${
                        showStudyAbroad ? "rotate-90" : "rotate-0"
                      } transform duration-300`}
                    />
                  </div>
                  {showStudyAbroad && (
                    <div className={"p-2 flex-col flex gap-1.5"}>
                      <Link
                        onClick={() => {
                          setShowNav(false);
                        }}
                        className="flex w-full justify-between items-center text-primary-color border-collapse"
                        href="/"
                      >
                        TOPIK 2- Level 5
                        <GoDotFill
                          className={`${
                            pathname === ""
                              ? "text-primary-color"
                              : "text-white"
                          }`}
                        />
                      </Link>
                      <Link
                        onClick={() => {
                          setShowNav(false);
                        }}
                        className="flex w-full justify-between items-center text-primary-color border-collapse"
                        href="/"
                      >
                        TOPIK 2- Level 6
                        <GoDotFill
                          className={`${
                            pathname === ""
                              ? "text-primary-color"
                              : "text-white"
                          }`}
                        />
                      </Link>
                    </div>
                  )}
                </button> */}
                {/* <button
                  onClick={() => {
                    setShowNav(false);
                  }}
                  className="w-full  border-secondary-color text-sm   text-start duration-500 transform    border rounded-lg"
                >
                  <Link
                    href={"/Navigation/CorporateTraining"}
                    role="button"
                    className={`flex items-center  p-1.5 justify-between `}
                  >
                    Corporate Training
                    <GoDotFill
                      className={`${
                        pathname === "/Navigation/CorporateTraining"
                          ? "text-primary-color"
                          : "text-white"
                      }`}
                    />
                  </Link>
                </button> */}
                {/* <button
                  className={` w-full border-secondary-color text-sm   text-start duration-500 transform    border rounded-lg`}
                >
                  <div
                    onClick={() => {
                      setShowWorkWithUs(!showWorkWithUs);
                    }}
                    role="button"
                    className={`flex items-center  p-1.5 justify-between `}
                  >
                    Work with us
                    <BsCaretRightFill
                      className={`${
                        showWorkWithUs ? "rotate-90" : "rotate-0"
                      } transform duration-300`}
                    />
                  </div>
                  {showWorkWithUs && (
                    <div className={"p-2 flex-col flex gap-1.5"}>
                      <Link
                        onClick={() => {
                          setShowNav(false);
                        }}
                        className="flex w-full justify-between items-center text-primary-color border-collapse"
                        href="/"
                      >
                        Careers
                        <GoDotFill
                          className={`${
                            pathname === ""
                              ? "text-primary-color"
                              : "text-white"
                          }`}
                        />
                      </Link>
                      <Link
                        onClick={() => {
                          setShowNav(false);
                        }}
                        className="flex w-full justify-between items-center text-primary-color border-collapse"
                        href="/"
                      >
                        Teach with us
                        <GoDotFill
                          className={`${
                            pathname === ""
                              ? "text-primary-color"
                              : "text-white"
                          }`}
                        />
                      </Link>
                      <Link
                        onClick={() => {
                          setShowNav(false);
                        }}
                        className="flex w-full justify-between items-center text-primary-color border-collapse"
                        href="/"
                      >
                        Collaborate with us
                        <GoDotFill
                          className={`${
                            pathname === ""
                              ? "text-primary-color"
                              : "text-white"
                          }`}
                        />
                      </Link>
                    </div>
                  )}
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
