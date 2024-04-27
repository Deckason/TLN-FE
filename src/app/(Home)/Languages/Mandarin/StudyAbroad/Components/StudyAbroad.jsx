import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
import studyAbroad from "@/Assets/FrenchPage/FrenchStudyAbroad/studyAbroad.png";
const StudyAbroad = () => {
  return (
    <div className=" relative flex justify-center items-center flex-col mb-[112px]">
      <div className="lg:mt-[67px] mt-10 max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="grid xl:grid-cols-2 gap-5 max-md:flex-col lg:mx-3 max-md:gap-0">
            <div className="flex flex-col   max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  Online German classes for study abroad!
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    Mandarin proficiency isn&apos;t just for admission—it&apos;s your key to maximising your study abroad adventure! With fluency in Mandarin, you’ll seamlessly blend into your surroundings like a local, savouring the cultural flavours and enhancing every moment of your study abroad experience. The benefits don’t just end there. Being savvy in Mandarin will open the floodgates to exciting internships during your studies and lucrative job opportunities post-graduation or masters. Also, don&apos;t overlook the visa and PR perks—mastering Mandarin might just fast-track your way to official residency status! Gear up for the ultimate academic adventure with Mandarin as your ally! Start today!

                  </div>{" "}
                  <div className="max-sm:absoluteflex justify-star max-md:-ml-8 ">
                    <BookAFreeDemoButton />
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative justify-center flex items-center mx-3 flex-grow">
              <div className="  ">
                <Image
                  alt="homePageBannerGirl"
                  className="w-[730px] mx-auto h-full object-cover "
                  src={studyAbroad}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <States />
    </div>
  );
};

export default StudyAbroad;
