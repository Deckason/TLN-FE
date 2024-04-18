import Image from "next/image";
import React from "react";
import FooterLogo1 from "@/Assets/Homepage/Footer/footerLogo.png";
import FooterLogo2 from "@/Assets/Homepage/Footer/FooterLogo2.png";
import FooterLogo3 from "@/Assets/Homepage/Footer/FooterLogo3.png";
import FaceBook from "@/Assets/Homepage/Footer/FaceBook.png";
import Insta from "@/Assets/Homepage/Footer/Instagram.png";
import Linkdin from "@/Assets/Homepage/Footer/Linkdin.png";
import Pinterest from "@/Assets/Homepage/Footer/Pinterest.png";
import Youtube from "@/Assets/Homepage/Footer/Youtube.png";

const HomeFooter = () => {
  return (
    <div className="pt-20 flex flex-col items-center justify-center">
      <div className="lg:flex w-[1680px] hidden items-center  justify-around">
        <div className="flex flex-col h-[679px] items-start justify-between">
          <div className="flex flex-col ">
            <Image src={FooterLogo1} al mb-3t="footerLogo1" className="mb-3" />
            <div className="flex gap-5 items-center justify-center">
              <Image src={FooterLogo2} alt="footerLogo2" />
              <Image src={FooterLogo3} alt="footerLogo3" />
            </div>
          </div>
          <div>
            <button className="   px-8 py-3.5 bg-teal-600 rounded-lg justify-center text-neutral-50 text-2xl font-medium items-center gap-2.5 inline-flex">
              Contact Us
            </button>{" "}
          </div>
        </div>
        <div className="flex text-[#757575] flex-col h-[679px] items-start justify-between">
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">About us</h3>
            <span>Who Are We</span>
            <span>How It Works</span>
            <span>Blogs</span>
            <span>Press</span>
            <span>FAQ</span>
            <span>Contact Us</span>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">Work With us</h3>
            <span>Career</span>
            <span>Teach With Us</span>
            <span>Collaborate With Us</span>
            <span>Content Creators</span>
            <span>Refer & Earn</span>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              Languages For Any Goals
            </h3>
            <span>School</span>
            <span>College</span>
            <span>Corporate Trainings</span>
          </div>
        </div>
        <div className="flex text-[#757575] flex-col h-[679px] items-start justify-between">
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
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
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
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
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              Korean Classes Near Me
            </h3>
            <span>Korean Classes in Mumbai</span>
            <span>Korean Classes in Delhi</span>
            <span>Korean Classes in Pune</span>
          </div>
        </div>
        <div className="flex text-[#757575] flex-col h-[679px] items-start justify-between">
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
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
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              French Classes Near Me
            </h3>
            <span>French Classes in Mumbai</span>
            <span>French Classes in Delhi</span>
            <span>French Classes in Pune</span>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              Spanish Classes Near Me
            </h3>
            <span>Spanish Classes in Mumbai</span>
            <span>Spanish Classes in Delhi</span>
            <span>Spanish Classes in Pune</span>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              Japanese Classes Near Me
            </h3>
            <span>Japanese Classes in Mumbai</span>
            <span>Japanese Classes in Delhi</span>
            <span>Japanese Classes in Pune</span>
          </div>
        </div>
        <div className="flex text-[#757575] flex-col h-[679px] items-start justify-between">
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
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
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              German Classes Near Me
            </h3>
            <span>German Classes in Mumbai</span>
            <span>German Classes in Delhi</span>
            <span>German Classes in Pune</span>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              English Classes Near Me
            </h3>
            <span>English Classes in Mumbai</span>
            <span>English Classes in Delhi</span>
            <span>English Classes in Pune</span>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-[#000] mb-3 font-semibold">
              Mandarin Classes Near Me
            </h3>
            <span>Mandarin Classes in Delhi</span>
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
