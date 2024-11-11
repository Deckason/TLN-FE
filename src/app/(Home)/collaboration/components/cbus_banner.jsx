import ApplyNowbutton from "../../../../Shared/buttons/GetStartedHomeBannerButton";
import Image from "next/image";
import bannerimg from "../../../../../public/collboratewithUs/collaborate_banner.svg";

const Collaborationbanner = () => {
  return (
    <div className=" relative flex justify-center items-center flex-col mb-[30px]">
      <div className="mt-[67px] max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 p-3 md:p-10">
            <div className="flex flex-col  w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-2xl">
                  Collaborate with us!
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    Discover endless possibilities for your institution or company by collaborating with 
                    The Language Network. Our tailored programs and certified instructors empower schools, 
                    colleges, and businesses to excel in their fields while expanding language knowledge. 
                    From enhancing student curriculum to boosting corporate communication, our collaborative 
                    approach ensures success in today&apos;s multilingual world. Join us in fostering global 
                    connectivity and explore new opportunities through language education.
                  </div>{" "}
                  <div className="max-sm:absoluteflex justify-star max-md:-ml-8 ">
                    <ApplyNowbutton />
                  </div>
                </div>
              </div>
            </div>
                <Image
                alt="homePageBannerGirl"
                className="w-[90%] 2xl:max-w-[769px] max-h-[515px] lg:w-[50%] relative top-[27px] lg:block md:p-10 p-2 md:ml-0 ml-4"
                src={bannerimg}
                width={800}
                height={520}
                priority={true}
                ></Image>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborationbanner;
