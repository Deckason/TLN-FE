'use client'
import React from "react";
import Image from "next/image";
import logo1 from "../../Assets/Homepage/Educationalbar/image_1.png";
import logo2 from "../../Assets/Homepage/Educationalbar/image_2.png";
import logo3 from "../../Assets/Homepage/Educationalbar/image_3.png";
import logo4 from "../../Assets/Homepage/Educationalbar/image_4.png";
import logo5 from "../../Assets/Homepage/Educationalbar/image_5.png";

const EducationPartners = () => {
  // Array of logos
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="w-full max-w-[1270px] 2xl:max-w-[1681px] mx-auto flex justify-center items-center mb-10">
      <div>
        <h1 className="text-stone-900 text-[24px]/[29px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[72px] font-bold text-center mb-[20.9px]">
          Our Educational Partners
        </h1>
        <div className="flex flex-wrap justify-center items-center lg:w-[1000px] w-[350px] xl:w-[1270px] gap-[30px]">
          <div className="slider">
            <div className="slide-track">
              {/* Use array to render the logos dynamically */}
              {logos.concat(logos).map((logo, index) => (
                <div className="slide w-[100px] h-[60px] flex items-center justify-center" key={index}>
                  <Image 
                    alt={`logo-${index}`} 
                    src={logo} 
                    className="object-contain" // Ensures the image scales correctly
                    width={100} // Adjust the width of each image
                    height={60} // Adjust the height of each image
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPartners;
