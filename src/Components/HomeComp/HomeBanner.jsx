import homePageBannerGirl from "@/Assets/Homepage/HomePageBanner/homePageBannerGirl.png";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className=" md:mx-10 mt-5">
      <div className="max-w-[1681px] md:min-h-[542px] justify-between  items-center flex flex-col md:flex-row mx-5   xl:mx-auto">
        <div className="lg:w-[525px] md:min-h-[542px] min-h-fit flex-col z-10 justify-center w-full lg:items-start gap-4 inline-flex">
          <div className="self-stretch lg:h-[261px] h-fit 2xl:h-[261px] xl:h-[261px] flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-stone-900 2xl:text-5xl xl:text-4xl lg:text-2xl text-[24px] font-bold ">
              Your Gateway to <br className="md:hidden" />
              Language Excellence
            </div>
            <div className="self-stretch text-stone-900 2xl:text-5xl xl:text-4xl lg:text-2xl text-xl font-normal ">
              Learn more than just a language!
            </div>
          </div>
          <div className=" my-5">
            <BookAFreeDemoButton />
          </div>
        </div>
        <Image
          alt="homePageBannerGirl"
          className="md:w-[400px]  lg:w-[500px] hidden  absolute opacity-20 lg:top-[100px]  xl:top-[140px] top-[130px] md:top-[220px] xl:relative  -z-0  xl:opacity-100 xl:block"
          src={homePageBannerGirl}
        ></Image>
        <div className="max-w-[400px] h-[522px] xl:px-10 py-8 xl:mx-auto px-3  rounded-2xl z-10 border bg-white md:bg-transparent border-stone-300 justify-center items-center gap-2.5 flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-8 inline-flex">
            <div className="self-stretch h-[75px] flex-col justify-center items-center gap-1 flex">
              <div className="self-stretch text-center text-stone-900 text-2xl font-medium ">
                Drop an Enquiry
              </div>
              <div className="self-stretch text-center text-neutral-500 text-xl font-normal  leading-7">
                Our Academic Counsellor will give you a call shortly
              </div>
            </div>
            <div className="self-stretch h-[360px] flex-col justify-start items-center gap-8 flex">
              <div className="self-stretch h-[272px] flex-col justify-start items-center gap-4 flex">
                <input
                  placeholder="Text"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
                <input
                  placeholder="Email ID"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="email"
                />
                <input
                  placeholder="Mobile Number"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="number"
                />
                <input
                  placeholder="Preferred Language"
                  className="self-stretch px-4 py-[5px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
              </div>
              <button className="self-stretch h-14 px-8 py-3 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex">
                <div className="w-[215px] h-[30px] text-center text-teal-600 text-2xl font-medium ">
                  Send Enquiry
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="homePageBannerGirl"
        className="xl:hidden lg:hidden 2xl:hidden md:hidden flex mt-[20px] -mb-[20px]"
        src={homePageBannerGirl}
      ></Image>
      {/* states component is a shared component */}
      <States />
    </div>
  );
};

export default HomeBanner;
