
import Image from "next/image";
import bannerimg from "../../../../Assets/about-us/logo22.svg";

const Banner = () => {
  return (
    <div className=" relative flex justify-center items-center flex-col mb-[30px]">
      <div className="mt-[67px] max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 p-3 md:p-10 justify-center items-start">
            <div className="flex flex-col  w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full gap-y-8 ">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-2xl">
                  Who Are We?
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                  Based in Mumbai, India, The Language Network has been meeting the rising demand for foreign language proficiency since 2020. Our ISO-certified courses cover French, German, Spanish, Korean, Japanese, Mandarin, and English, catering to learners of all ages. We provide comprehensive preparation for globally recognized exams like TOEFL, IELTS, DELF, DALF, JLPT, and GOETHE, ensuring our students achieve their language goals confidently. Our mission is to make language education accessible and enjoyable for everyone, empowering learners to connect with the world through language.
                  </div>{" "}
                  {/* <div className="max-sm:absoluteflex justify-star max-md:-ml-8 ">
                    <ApplyNowbutton />
                  </div> */}
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

export default Banner;