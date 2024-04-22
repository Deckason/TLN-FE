"use client";
import Image from "next/image";
import React, { useState } from "react";
import FooterLogo1 from "@/Assets/Homepage/Footer/footerLogo.png";
import FooterLogo2 from "@/Assets/Homepage/Footer/FooterLogo2.png";
import FooterLogo3 from "@/Assets/Homepage/Footer/FooterLogo3.png";
import FaceBook from "@/Assets/Homepage/Footer/FaceBook.png";
import Insta from "@/Assets/Homepage/Footer/Instagram.png";
import Linkdin from "@/Assets/Homepage/Footer/Linkdin.png";
import Pinterest from "@/Assets/Homepage/Footer/Pinterest.png";
import Youtube from "@/Assets/Homepage/Footer/Youtube.png";
import FaqsCard from "@/Shared/FaqsCard";
import Accordian from "../../Shared/Accordian";

const HomeFooter = () => {
  const datas = [
    {
      title: "Languages for Kids",
      content: [
        "Online French Classes for Kids",
        "Online German Classes for Kids",
        "ish Classes for Kids",
        "Online Korean Classes for Kids",
        "Online Japanese Classes for Kids",
        "Online Mandarin Classes for Kids",
        "Online English Classes for Kids",
      ],
    },
    {
      title: "Languages for Adults",
      content: [
        "Online French Classes for Adults",
        "Online German Classes for Adults",
        "ish Classes for Adults",
        "Online Korean Classes for Adults",
        "Online Japanese Classes for Adults",
        "Online Mandarin Classes for Adults",
        "Online English Classes for Adults",
      ],
    },
    {
      title: "Languages for Study Abroad",
      content: [
        "Online French Classes for Study Abroad",
        "Online German Classes for Study Abroad",
        "ish Classes for Study Abroad",
        "Online Korean Classes for Study Abroad",
        "Online Japanese Classes for Study Abroad",
        "Online Mandarin Classes for Study Abroad",
        "Online English Classes for Study Abroad",
      ],
    },
    {
      title: "Languages for Any Goals",
      content: ["School", "College", "corporate Trainings"],
    },
    {
      title: "French Classes Near Me",
      content: [
        "French Classes in Mumbai",
        "French Classes in Delhi",
        "French Classes in Pune",
      ],
    },
    {
      title: "German Classes Near Me",
      content: [
        "German Classes in Mumbai",
        "German Classes in Delhi",
        "German Classes in Pune",
      ],
    },
    {
      title: "Spanish Classes Near Me",
      content: [
        "Spanish Classes in Mumbai",
        "Spanish Classes in Delhi",
        "Spanish Classes in Pune",
      ],
    },
    {
      title: "Korean Classes Near Me",
      content: [
        "Korean Classes in Mumbai",
        "Korean Classes in Delhi",
        "Korean Classes in Pune",
      ],
    },
    {
      title: "Japanese Classes Near Me",
      content: [
        "Japanese Classes in Mumbai",
        "Japanese Classes in Delhi",
        "Japanese Classes in Pune",
      ],
    },
    {
      title: "Mandarin Classes Near Me",
      content: ["Mandarin Classes in Delhi"],
    },
    {
      title: "English Classes Near Me",
      content: [
        "English Classes in Mumbai",
        "English Classes in Delhi",
        "English Classes in Pune",
      ],
    },
  ];
  const [splicing, setsplicing] = useState(true);

  return (
    <div className="pt-20 flex flex-col items-center justify-center">
      <div className="lg:text-[15px] text-[10px] gap-10 flex flex-col lg:flex-row w-full lg:w-[1680px]  lg:items-center justify-around ">
        <div className="flex lg:flex-col  w-fit  gap-10 lg:items-start items-center justify-center lg:justify-between">
          <div className="flex flex-col lg:w-full w-32 ">
            <Image src={FooterLogo1} al mb-3t="footerLogo1" className="mb-3" />
            <div className="flex gap-5 items-center justify-center">
              <Image src={FooterLogo2} alt="footerLogo2" />
              <Image src={FooterLogo3} alt="footerLogo3" />
            </div>
          </div>
          <div>
            <button className="  px-4 py-1.5 lg:px-8 lg:py-3.5 bg-teal-600 rounded-lg justify-center text-neutral-50 text-2xl font-medium items-center gap-2.5 inline-flex">
              Contact Us
            </button>{" "}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="lg:flex block text-[#757575]  w-fit lg:w-full my-3 h-fit  items-start justify-around  lg:ml-0 ml-5 lg:justify-between">
            <div className="flex lg:gap-10 gap-5 lg:justify-normal justify-between">
              <div className="flex flex-col  ">
                <h3 className="text-[#000] mb-3 font-medium text-[10px] lg:text-[20px]">
                  About us
                </h3>
                <span>Who Are We</span>
                <span>How It Works</span>
                <span>Blogs</span>
                <span>Press</span>
                <span>FAQ</span>
                <span>Contact Us</span>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-[#000] mb-3 font-medium text-[10px] lg:text-[20px]">
                  Work With us
                </h3>
                <span>Career</span>
                <span>Teach With Us</span>
                <span>Collaborate With Us</span>
                <span>Content Creators</span>
                <span>Refer & Earn</span>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-[#000] mb-3 font-medium text-[10px] lg:text-[20px]">
                  Language We Offer
                </h3>
                <span>Online French Classes</span>
                <span>Online German Classes</span>
                <span>Online Spanish Classes</span>
                <span>Online Korean Classes</span>
                <span>Online Japanese Classes</span>
                <span>Online Mandarin Classes</span>
                <span>Online English Classes</span>
              </div>
            </div>
            <div className="flex lg:hidden h-full flex-col w-fit  gap-x-2">
              {splicing &&
                datas.splice(0, 12).map((data, index) => (
                  <>
                    <Accordian key={index} data={data} i={index} />
                  </>
                ))}
              <hr />
            </div>
            <div className="lg:flex hidden flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Languages for Kids
              </h3>
              <span>Online French Classes for Kids</span>
              <span>Online German Classes for Kids</span>
              <span>Online Spanish Classes for Kids</span>
              <span>Online Korean Classes for Kids</span>
              <span>Online Japanese Classes for Kids</span>
              <span>Online Mandarin Classes for Kids</span>
              <span>Online English Classes for Kids</span>
            </div>
            <div className=" lg:flex hidden flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Languages For Adults
              </h3>
              <span>Online French Classes for Adults</span>
              <span>Online German Classes for Adults</span>
              <span>Online Spanish Classes for Adults</span>
              <span>Online Korean Classes for Adults</span>
              <span>Online Japanese Classes for Adults</span>
              <span>Online Mandarin Classes for Adults</span>
              <span>Online English Classes for Adults</span>
            </div>
            <div className="lg:flex hidden flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Languages to Study Abroad
              </h3>
              <span>Online French Classes to Study Abroad</span>
              <span>Online German Classes to Study Abroad</span>
              <span>Online Spanish Classes to Study Abroad</span>
              <span>Online Korean Classes to Study Abroad</span>
              <span>Online Japanese Classes to Study Abroad</span>
              <span>Online Mandarin Classes to Study Abroad</span>
              <span>Online English Classes to Study Abroad</span>
            </div>
          </div>
          <div className="lg:flex hidden text-[#757575] gap-14 w-fit my-3 h-fit  items-start justify-around  lg:mx-0 mx-5 lg:justify-between">
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Languages For Any Goals
              </h3>
              <span>School</span>
              <span>College</span>
              <span>Corporate Trainings</span>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                French Classes Near Me
              </h3>
              <span>French Classes in Mumbai</span>
              <span>French Classes in Delhi</span>
              <span>French Classes in Pune</span>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                German Classes Near Me
              </h3>
              <span>German Classes in Mumbai</span>
              <span>German Classes in Delhi</span>
              <span>German Classes in Pune</span>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Spanish Classes Near Me
              </h3>
              <span>Spanish Classes in Mumbai</span>
              <span>Spanish Classes in Delhi</span>
              <span>Spanish Classes in Pune</span>
            </div>
          </div>
          <div className="lg:flex hidden text-[#757575] gap-14 w-fit my-3 h-fit  items-start justify-around  lg:ml-0 ml-2 lg:justify-between">
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Korean Classes Near Me
              </h3>
              <span>Korean Classes in Mumbai</span>
              <span>Korean Classes in Delhi</span>
              <span>Korean Classes in Pune</span>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Japanese Classes Near Me
              </h3>
              <span>Japanese Classes in Mumbai</span>
              <span>Japanese Classes in Delhi</span>
              <span>Japanese Classes in Pune</span>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                Mandarin Classes Near Me
              </h3>
              <span>Mandarin Classes in Delhi</span>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-[#000] mb-3 font-medium text-[20px]">
                English Classes Near Me
              </h3>
              <span>English Classes in Mumbai</span>
              <span>English Classes in Delhi</span>
              <span>English Classes in Pune</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-[1680px] p-10 items-center justify-between">
        <div>Copyright © 2024 The Language Network - All Right Reserved</div>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex">
            <span className="font-semibold">Terms & Conditions</span>
            <span className="font-semibold">Privacy Policy</span>
            <span className="font-semibold">Sitemap</span>
          </div>
          <div className="flex gap-5">
            <Image src={FaceBook} alt="FaceBook" />
            <Image src={Insta} alt="Insta" />
            <Image src={Linkdin} alt="Linkdin" />
            <Image src={Pinterest} alt="Pinterest" />
            <Image src={Youtube} alt="Youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
