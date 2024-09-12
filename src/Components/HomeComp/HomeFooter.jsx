"use client";
import Image from "next/image";
import React, { useState } from "react";
import FooterLogo1 from "../../Assets/Homepage/Footer/footerLogo.png";
import FooterLogo2 from "../../Assets/Homepage/Footer/FooterLogo2.png";
import FooterLogo3 from "../../Assets/Homepage/Footer/FooterLogo3.png";
import FaceBook from "../../Assets/Homepage/Footer/FaceBook.png";
import Insta from "../../Assets/Homepage/Footer/Instagram.png";
import Linkdin from "../../Assets/Homepage/Footer/Linkdin.png";
import Pinterest from "../../Assets/Homepage/Footer/Pinterest.png";
import Youtube from "../../Assets/Homepage/Footer/Youtube.png";
import Link from "next/link";

const HomeFooter = () => {
  const [splicing, setSplicing] = useState(true);

  const sections = [
    // {
    //   title: "About us",
    //   links: ["Who Are We", "Blogs", "Press", "FAQ", "Contact Us"],
    // },
    {
      title: "Languages for Kids",
      links: [
        {
          name: "Online French Classes for Kids",
          url: "/Languages/French/ForKids",
        },
        {
          name: "Online German Classes for Kids",
          url: "/Languages/German/ForKids",
        },
        {
          name: "Online Spanish Classes for Kids",
          url: "/Languages/Spanish/ForKids",
        },
        {
          name: "Online Korean Classes for Kids",
          url: "/Languages/Korean/ForKids",
        },
        {
          name: "Online Japanese Classes for Kids",
          url: "/Languages/Japanese/ForKids",
        },
        {
          name: "Online Mandarin Classes for Kids",
          url: "/Languages/Mandarin/ForKids",
        },
        {
          name: "Online English Classes for Kids",
          url: "/Languages/English/ForKids",
        },
      ],
    },
    {
      title: "Languages For Adults",
      links: [
        {
          name: "Online French Classes for Adults",
          url: "/Languages/French/adults",
        },
        {
          name: "Online German Classes for Adults",
          url: "/Languages/German/adults",
        },
        {
          name: "Online Spanish Classes for Adults",
          url: "/Languages/Spanish/adults",
        },
        {
          name: "Online Korean Classes for Adults",
          url: "/Languages/Korean/adults",
        },
        {
          name: "Online Japanese Classes for Adults",
          url: "/Languages/Japanese/adults",
        },
        {
          name: "Online Mandarin Classes for Adults",
          url: "/Languages/Mandarin/adults",
        },
        {
          name: "Online English Classes for Adults",
          url: "/Languages/English/adults",
        },
      ],
    },
    {
      title: "Languages to Study Abroad",
      links: [
        {
          name: "Online French Classes to Study Abroad",
          url: "/Languages/French/StudyAbroad",
        },
        {
          name: "Online German Classes to Study Abroad",
          url: "/Languages/German/StudyAbroad",
        },
        {
          name: "Online Spanish Classes to Study Abroad",
          url: "/Languages/Spanish/StudyAbroad",
        },
        {
          name: "Online Korean Classes to Study Abroad",
          url: "/Languages/Korean/StudyAbroad",
        },
        {
          name: "Online Japanese Classes to Study Abroad",
          url: "/Languages/Japanese/StudyAbroad",
        },
        {
          name: "Online Mandarin Classes to Study Abroad",
          url: "/Languages/Mandarin/StudyAbroad",
        },
        {
          name: "Online English Classes to Study Abroad",
          url: "/Languages/English/StudyAbroad",
        },
      ],
    },
    // {
    //   title: "Work With us",
    //   links: [
    //     "Career",
    //     "Teach With Us",
    //     "Collaborate With Us",
    //     "Content Creators",
    //     "Refer & Earn",
    //   ],
    // },
    {
      title: "Languages We Offer",
      links: [
        { name: "Online French Classes", url: "/Languages/French" },
        { name: "Online German Classes", url: "/Languages/German" },
        { name: "Online Spanish Classes", url: "/Languages/Spanish" },
        { name: "Online Korean Classes", url: "/Languages/Korean" },
        { name: "Online Japanese Classes", url: "/Languages/Japanese" },
        { name: "Online Mandarin Classes", url: "/Languages/Mandarin" },
        { name: "Online English Classes", url: "/Languages/English" },
      ],
    },
    // {
    //   title: "French Classes Near Me",
    //   links: [
    //     "French Classes in Mumbai",
    //     "French Classes in Delhi",
    //     "French Classes in Pune",
    //   ],
    // },
    // {
    //   title: "German Classes Near Me",
    //   links: [
    //     "German Classes in Mumbai",
    //     "German Classes in Delhi",
    //     "German Classes in Pune",
    //   ],
    // },
    // {
    //   title: "Languages For Any Goals",
    //   links: ["School", "College", "Corporate Trainings"],
    // },
    // {
    //   title: "Korean Classes Near Me",
    //   links: [
    //     "Korean Classes in Mumbai",
    //     "Korean Classes in Delhi",
    //     "Korean Classes in Pune",
    //   ],
    // },
    // {
    //   title: "Japanese Classes Near Me",
    //   links: [
    //     "Japanese Classes in Mumbai",
    //     "Japanese Classes in Delhi",
    //     "Japanese Classes in Pune",
    //   ],
    // },
    // {
    //   title: "Mandarin Classes Near Me",
    //   links: ["Mandarin Classes in Delhi"],
    // },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/teamlanguagenetwork/",
      src: FaceBook,
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/thelanguagenetwork/",
      src: Insta,
      alt: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/the-languagenetwork/",
      src: Linkdin,
      alt: "Linkedin",
    },
    {
      href: "https://in.pinterest.com/teamlanguagenetwork/",
      src: Pinterest,
      alt: "Pinterest",
    },
    {
      href: "https://www.youtube.com/channel/UC2pMpIkwz5AzM-SRMX9rjLQ",
      src: Youtube,
      alt: "Youtube",
    },
  ];

  return (
    <div className="pt-20 mx-[16px] lg:mx-[30px] xl:mx-[60px] 2xl:mx-[90px]">
      <div className="md:flex md:flex-row ">
        <div className="hidden md:flex flex-col items-center mt-2 lg:items-start mr-[35px]">
          <Link href="/">
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <Image src={FooterLogo1} alt="footerImg" className="p-1" />
              <p className="w-60 text-gray-500 text-xs">
                The Language Network is a place to learn and immerse yourself in the world of languages. We are a dynamic institution promoting languages and celebrating cultures.
              </p>
              <div className="flex gap-5 items-center">
                <Image src={FooterLogo2} alt="footerLogo2" className="p-1" />
                <Image src={FooterLogo3} alt="footerLogo3" className="p-1" />
              </div>
            </div>
          </Link>
          {/* <button className="mt-[30px] px-4 py-1.5 lg:px-5 lg:py-3.5 w-40 bg-teal-600 rounded-lg text-neutral-100 text-sm md:text-[12px] lg:text-xl font-normal items-center">
            Contact us
          </button> */}
          <div className="text-xs 4xl:text-sm text-gray-500 mt-5 flex flex-col gap-2 w-64 ">
            <p>
              Address: Signature Business Park, 1306, 13th floor, Postal Colony Rd, Chembur, Mumbai, Maharashtra 400071
            </p>
            <p>Contact no : 8369123184</p>
            <p>Powered by TLN EDTECH PRIVATE LIMITED</p>
          </div>
        </div>
        <div className="text-[#666666] gap-[28px] sm:gap-0 w-full">
          <div className="flex flex-wrap justify-between gap-[28px] lg:gap-0">
            {sections.map((section, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index === 0 || index === 4 || index === 8
                      ? "flex lg:hidden"
                      : "hidden"
                  } flex-col w-full sm:w-1/2 lg:w-1/4 lg:mb-[16px]`}
                >
                  <h3 className="text-[#000] font-bold text-[15px]/[18px] lg:text-[13px]/[16px] xl:text-[15px]/[18px]   4xl:text-[20px]/[24.2px] mb-[12px] 4xl:mb-[16px]">
                    {section.title}
                  </h3>
                  <div
                    className={`${
                      index !== 8 ? "flex gap-[12px] flex-wrap" : ""
                    }`}
                  >
                    {section.links.map((link, idx) => (
                      <Link
                        href={link.url}
                        key={idx}
                        className={`${
                          index !== 8
                            ? "underline text-nowrap lg:text-wrap"
                            : "hidden"
                        } text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  {index === 8 &&
                    section.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.url}
                        className={`${
                          index !== 8
                            ? "underline text-nowrap lg:text-wrap"
                            : ""
                        } text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2`}
                      >
                        {link.name}
                      </Link>
                    ))}
                </div>
              );
            })}
            {sections.map((section, index) => {
              if (index === 6) {
                return (
                  <div
                    key={index}
                    className="flex flex-col w-full sm:w-1/2 lg:w-1/4 lg:mb-[16px]"
                  >
                    <div className="flex flex-col w-full">
                      <h3 className="text-[#000] font-bold text-[15px]/[18px] lg:text-[13px]/[16px] xl:text-[15px]/[18px]   4xl:text-[20px]/[24.2px] mb-[12px] 4xl:mb-[16px]">
                        {section.title}
                      </h3>
                      {section.links.map((link, idx) => (
                        <Link
                          href={link.url}
                          key={idx}
                          className="hover:scale-105 hover:font-bold text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    <div
                      key={index}
                      className="flex flex-col w-full mt-[28px] lg:mt-0"
                    >
                      <h3 className="text-[#000] font-bold text-[15px]/[18px] lg:text-[13px]/[16px] xl:text-[15px]/[18px]   4xl:text-[20px]/[24.2px] mb-[12px] 4xl:mb-[16px]">
                        Spanish Classes Near Me
                      </h3>
                      <span
                        key={"Spanish Classes in Mumbai"}
                        className="text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                      >
                        Spanish Classes in Mumbai
                      </span>
                      <span
                        key={"Spanish Classes in Delhi"}
                        className="text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                      >
                        Spanish Classes in Delhi
                      </span>
                      <span
                        key={"Spanish Classes in Pune"}
                        className="text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                      >
                        Spanish Classes in Pune
                      </span>
                    </div>
                  </div>
                );
              }
              if (index === 7) {
                return (
                  <div
                    key={index}
                    className="flex flex-col w-full sm:w-1/2 lg:w-1/4 lg:mb-[16px] "
                  >
                    <div className="flex flex-col w-full">
                      <h3 className="text-[#000] font-bold text-[15px]/[18px] lg:text-[13px]/[16px] xl:text-[15px]/[18px]   4xl:text-[20px]/[24.2px]  mb-[12px] 4xl:mb-[16px]">
                        {section.title}
                      </h3>
                      {section.links.map((link, idx) => (
                        <Link
                          href={link.url}
                          key={idx}
                          className="hover:scale-105 hover:font-bold text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    <div
                      key={index}
                      className="flex flex-col w-full mt-[28px] lg:mt-0"
                    >
                      <h3 className="text-[#000] font-bold text-[15px]/[18px] lg:text-[13px]/[16px] xl:text-[15px]/[18px]   4xl:text-[20px]/[24.2px]  mb-[12px] 4xl:mb-[16px]">
                        English Classes Near Me
                      </h3>
                      <span
                        key={"English Classes in Mumbai"}
                        className="text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                      >
                        English Classes in Mumbai
                      </span>
                      <span
                        key={"Spanish Classes in Delhi"}
                        className="text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                      >
                        Spanish Classes in Delhi
                      </span>
                      <span
                        key={"English Classes in Pune"}
                        className="text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                      >
                        English Classes in Pune
                      </span>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className={`${
                    index === 0 || index === 4 || index === 8
                      ? "hidden lg:flex"
                      : "flex"
                  } flex-col w-full sm:w-1/2 lg:w-1/4 lg:mb-[16px]`}
                >
                  <h3 className="text-[#000] font-bold text-[15px]/[18px] lg:text-[13px]/[16px] xl:text-[15px]/[18px]   4xl:text-[20px]/[24.2px] mb-[12px] 4xl:mb-[16px]">
                    {section.title}
                  </h3>
                  {section.links.map((link, idx) => (
                    <Link
                      href={link.url}
                      key={idx}
                      className="hover:scale-105 hover:font-bold text-[14px]/[18px] lg:text-[9px]/[16px] xl:text-[11px]/[17px] 2xl:text-[13px]/[21px] 3xl:text-[15px]/[21px] 4xl:text-[18px]/[26px] mb-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row w-full mt-[39px] lg:mt-8 mb-8  items-start md:items-center justify-start md:justify-between gap-[24px]">
        <div className="text-[15px]/[21px] font-[400] lg:w-auto">
          Copyright © 2024 The Language Network - All Right Reserved
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-end items-start md:items-center gap-[24px] w-full lg:w-auto">
          {/* <div className="flex justify-between  text-[14px]/[16.9px] font-[700] lg:text-[15px]/[18px] w-full max-w-[400px] lg:text-nowrap lg:gap-[24px]">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Sitemap</span>
          </div> */}
          <div className="flex gap-[24px] w-full md:w-auto lg:w-full">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href}>
                <Image
                  src={social.src}
                  alt={social.alt}
                  className="hover:scale-105 cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* <button className=" md:hidden px-[24px] py-[10px] w-40 bg-teal-600 rounded-lg text-neutral-100 text-[18px]/[22px] font-[500] items-center">
          Contact us
        </button> */}
        <div className="md:hidden text-xs 4xl:text-sm text-gray-500 mt-5 flex flex-col gap-2 w-64 ">
            <p>
              Address: Signature Business Park, 1306, 13th floor, Postal Colony Rd, Chembur, Mumbai, Maharashtra 400071
            </p>
            <p>Contact no : 8369123184</p>
            <p>Powered by TLN EDTECH PRIVATE LIMITED</p>
          </div>
      </div>
    </div>
  );
};

export default HomeFooter;
