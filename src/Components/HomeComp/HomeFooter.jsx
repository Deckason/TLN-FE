"use client";
import Image from "next/image";
import React, { useState } from "react";
import FooterLogo1 from "../../Assets/Homepage/Footer/footerLogo.png";
import FooterLogo2 from "../../Assets/Homepage/Footer/FooterLogo2.png";
import footerLogo3 from "../../Assets/Homepage/Footer/FooterLogo3.png";
import FaceBook from "../../Assets/Homepage/Footer/FaceBook.png";
import Insta from "../../Assets/Homepage/Footer/Instagram.png";
import Linkdin from "../../Assets/Homepage/Footer/Linkdin.png";
import Pinterest from "../../Assets/Homepage/Footer/Pinterest.png";
import Youtube from "../../Assets/Homepage/Footer/Youtube.png";
import Accordian from "../../Shared/Accordian";
import Link from "next/link";

const HomeFooter = () => {
  const [splicing, setsplicing] = useState(true);

  return (
    <div className="pt-20 p-2">
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center mt-2 ml-10 lg:items-start">
          <Link href="/">
            <div className="flex flex-col gap-10 items-center lg:items-start">
              <Image src={FooterLogo1} alt="footerImg" className="p-1" />
              <div className="flex gap-5 items-center">
                <Image src={FooterLogo2} alt="footerLogo2" className="p-1"/>
                <Image src={footerLogo3} alt="footerLogo3" className="p-1"/>
              </div>
            </div>
          </Link>
          <button className="px-4 py-1.5 lg:px-5 lg:py-3.5 mt-auto mb-[-1rem] w-40 bg-teal-600 rounded-lg text-neutral-100 text-sm md:text-[12px] lg:text-xl font-normal items-center">
            Contact us
          </button>
        </div>
        <div className="text-[#666666] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">

          <div className="grid lg:grid-cols-4 mt-2 w-full">
            <div>
              <div className="flex flex-col">
                <h3 className="text-[#000]  font-medium text-[10px] md:text-sm lg:text-[20px]">
                  About us
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base">Who Are We</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base">Blogs</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base">Press</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base">FAQ</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base">Contact Us</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <h3 className="text-[#000]  font-medium text-[20px]">
                  Languages for Kids
                </h3>
                <span className="md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-0.25rem]">Online French Classes for Kids</span>
                <span className="md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-0.25rem]">Online German Classes for Kids</span>
                <span className="md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-0.25rem]">Online Spanish Classes for Kids</span>
                <span className="md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-0.25rem]">Online Korean Classes for Kids</span>
                <span className="md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-0.25rem]">Online Japanese Classes for Kids</span>
                <span className="md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-0.25rem]">Online Mandarin Classes for Kids</span>
                <span className="md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-0.25rem]">Online English Classes for Kids</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-0.5rem] font-medium text-[20px]">
                  Languages For Adults
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online French Classes for Adults</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online German Classes for Adults</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Spanish Classes for Adults</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Korean Classes for Adults</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Japanese Classes for Adults</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Mandarin Classes for Adults</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online English Classes for Adults</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-0.5rem]  font-medium text-[20px]">
                  Languages to Study Abroad
                </h3>
                <span className="  md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online French Classes to Study Abroad</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online German Classes to Study Abroad</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Spanish Classes to Study Abroad</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Korean Classes to Study Abroad</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Japanese Classes to Study Abroad</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Mandarin Classes to Study Abroad</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online English Classes to Study Abroad</span>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 mt-10">
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-0.5rem] font-medium text-[10px] md:text-[12px] lg:text-[20px]">
                  Work With us
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Career</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Teach With Us</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Collaborate With Us</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Content Creators</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Refer & Earn</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-0.5rem] font-medium text-[10px] md:text-[12px] lg:text-[20px]">
                  Language We Offer
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online French Classes</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online German Classes</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Spanish Classes</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Korean Classes</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Japanese Classes</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online Mandarin Classes</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Online English Classes</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-1rem] font-medium text-[20px]">
                  French Classes Near Me
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">French Classes in Mumbai</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">French Classes in Delhi</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">French Classes in Pune</span>
                <h3 className="text-[#000]  mt-8 mb-[-1rem] font-medium text-[20px]">
                  Spanish Classes Near Me
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Spanish Classes in Mumbai</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Spanish Classes in Delhi</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Spanish Classes in Pune</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-1rem] font-medium text-[20px]">
                  German Classes Near Me
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">German Classes in Mumbai</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">German Classes in Delhi</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">German Classes in Pune</span>
                <h3 className="text-[#000]  mb-[-1rem] mt-8 font-medium text-[20px]">
                  English Classes Near Me
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">English Classes in Mumbai</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">English Classes in Delhi</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">English Classes in Pune</span>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 mt-10">
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-0.5rem]  font-medium text-[20px]">
                  Languages For Any Goals
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">School</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">College</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Corporate Trainings</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-1rem] font-medium text-[20px]">
                  Korean Classes Near Me
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Korean Classes in Mumbai</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Korean Classes in Delhi</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Korean Classes in Pune</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-1rem] font-medium text-[20px]">
                  Japanese Classes Near Me
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Japanese Classes in Mumbai</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Japanese Classes in Delhi</span>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Japanese Classes in Pune</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#000]  mb-[-1rem] font-medium text-[20px]">
                  Mandarin Classes Near Me
                </h3>
                <span className=" md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-base mb-[-1rem]">Mandarin Classes in Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-full mt-16 mb-8 p-4 px-10 items-center justify-between">
        <div>Copyright © 2024 The Language Network - All Right Reserved</div>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex gap-10">
            <span className="font-semibold">Terms & Conditions</span>
            <span className="font-semibold">Privacy Policy</span>
            <span className="font-semibold">Sitemap</span>
          </div>
          <div className="flex gap-5">
            <Link href={"https://www.facebook.com/teamlanguagenetwork/"}>
              <Image src={FaceBook} alt="FaceBook" className="hover:scale-105 cursor-pointer" />
            </Link>
            <Link href={"https://www.instagram.com/thelanguagenetwork/"}>
              <Image src={Insta} alt="Insta" className="hover:scale-105 cursor-pointer" />
            </Link>
            <Link href={"https://www.linkedin.com/company/the-languagenetwork/"}>
              <Image src={Linkdin} alt="Linkdin" className="hover:scale-105 cursor-pointer" />
            </Link>
            <Link href={"https://in.pinterest.com/teamlanguagenetwork/"}>
              <Image src={Pinterest} alt="Pinterest" className="hover:scale-105 cursor-pointer" />
            </Link>
            <Link href={"https://www.youtube.com/channel/UC2pMpIkwz5AzM-SRMX9rjLQ"}>
              <Image src={Youtube} alt="Youtube" className="hover:scale-105 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
