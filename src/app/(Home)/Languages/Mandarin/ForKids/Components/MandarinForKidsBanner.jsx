import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
import kidImg from "@/Assets/FrenchPage/FrenchForKids/ForKids.png";
const MandarinForKidsBanner = () => {
  return (
    <div className=" relative flex justify-center items-center flex-col mb-[112px]">
      <div className="lg:mt-[67px] mt-10 max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="grid xl:grid-cols-2 gap-5 max-md:flex-col lg:mx-3 max-md:gap-0">
            <div className="flex flex-col   max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  Online Mandarin Classes for kids!
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">
                    Welcome aboard our online Mandarin adventure for kids! Our
                    classes are bursting with fun and excitement, specially
                    designed to help children of all ages and levels learn how
                    to speak, read, and write in Mandarin. Our personalised 1:1
                    classes cater to your child&apos;s unique learning pace.
                    With our team of experienced and enthusiastic tutors, your
                    little ones will dive into the language in a lively and
                    interactive way, with games, songs, and stories to keep them
                    engaged. Whether your child is taking their first steps or
                    already knows a bit of Mandarin, our online classes are the
                    ultimate ticket to kick-start their language journey. Enroll
                    today and get ready to witness your child&apos;s language
                    skills take flight!
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
                  src={kidImg}
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

export default MandarinForKidsBanner;
