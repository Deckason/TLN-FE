"use client";
import Image from "next/image";
import logo from "@/Assets/TLN_logo.png";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { BsCaretRight, BsCaretRightFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { usePathname } from "next/navigation";
import "@/css/NavBarCustom.css";
import Dropdown from "@/Components/DropDown";
const Nav = () => {
  const languageOptions = {
    title: "Languages",
    data: [
      {
        key: "1",
        name: "Home",
        path: "/",
      },
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
    {
      name: "School",
      path: "/Navigation/School",
    },
    {
      name: "College",
      path: "/Navigation/College",
    },
    {
      name: "Corporate Training",
      path: "/Navigation/CorporateTraining",
    },
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
  const loginOption = (
    <>
      <div className="xl:w-40 w-[120px] h-[53px] px-8 py-3.5 bg-primary-color rounded-lg justify-center text-white font-bold xl:text-xl items-center gap-2.5 inline-flex">
        Login
      </div>
    </>
  );
  return (
    <header className="z-40">
      <nav>
        {/* Batches Starting Now  */}
        <section>
          <div className="bg-black flex items-center justify-center h-[30px] lg:h-[48px] w-full">
            <h1 className=" text-primary-color lg:text-xl text-xs font-bold">
              <span className="font-normal">DELF /Goethe Exam Schedule</span> |
              Batches Starting Now!
            </h1>
          </div>
        </section>
        {/* nav options section */}
        <section className="hidden   px-2.5 py-2.5 bg-white shadow lg:flex justify-center w-full items-center gap-2.5 ">
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
                <div className="px-2.5 py-[29px] flex-col justify-start items-start cursor-pointer  gap-2.5 hidden lg:flex">
                  <div className="justify-start items-start gap-5 xl:gap-12 inline-flex">
                    {
                      NavOptions.map((Nav) => (
                        <Link
                          className="text-nowrap xl:text-xl"
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
                <Dropdown data={studyAbroad} />
                <Dropdown data={WorkWithUsData} />
              </div>
            </div>
            <div className=" hidden flex-grow  lg:flex justify-end me-5">
              {loginOption}
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
              } transform duration-500  border-2 border-secondary-color top-0  z-30`}
            >
              <IoMdCloseCircle
                onClick={() => {
                  setShowNav(!showNav);
                }}
                role="button"
                className="text-3xl text-primary-color bg-white absolute left-[-30px] rounded-l-2xl top-9 border-2 border-secondary-color border-e-0"
              />
              <div className="flex overflow-y-scroll  example pb-10 h-screen flex-col justify-start p-2.5 items-start gap-2">
                <button className="text-primary-color font-medium">
                  Login
                </button>
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
                      {languageOptions.map((language, i) => (
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
                <button
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
                </button>
                <button
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
                </button>
                <button
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
                </button>
                <button
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
                </button>
                <button
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
                </button>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
