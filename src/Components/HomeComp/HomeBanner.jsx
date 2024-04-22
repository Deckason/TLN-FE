import homePageBannerGirl from "@/Assets/Homepage/HomePageBanner/homePageBannerGirl.png";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className="md:mt-[84px] md:mx-10">
      <div className="max-w-[1681px] md:min-h-[542px] md:justify-between  items-center flex flex-col md:flex-row mx-5   xl:mx-auto">
        <div className="xl:w-[525px] md:min-h-[542px] min-h-[420px] flex-col z-10 justify-center  lg:items-center gap-4 inline-flex">
          <div className="self-stretch h-[261px] flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-stone-900 xl:text-5xl text-4xl font-bold ">
              Your Gateway to <br className="md:hidden" />
              Language Excellence
            </div>
            <div className="self-stretch text-stone-900 text-[32px] font-normal ">
              Learn more than just a language!
            </div>
          </div>
          <div className=" -ml-7 md:ml-1 lg:-ml-56 xl:-ml-1 mt-5">
            <BookAFreeDemoButton />
          </div>
        </div>
        <Image
          alt="homePageBannerGirl"
          className="md:w-[700px] xl:w-full lg:w-[769px]  mt-[90px] absolute opacity-20 lg:top-[100px]  top-[180px] md:top-[220px] xl:relative  -z-0 xl:top-[72px] xl:opacity-100 xl:block"
          src={homePageBannerGirl}
        ></Image>
        <div className="max-w-[400px] h-[542px] xl:px-10 py-8 xl:mx-auto px-3  rounded-2xl z-10 border bg-white md:bg-transparent border-stone-300 justify-center items-center gap-2.5 flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-8 inline-flex">
            <div className="self-stretch h-[89px] flex-col justify-center items-center gap-1 flex">
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
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
                <input
                  placeholder="Email ID"
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="email"
                />
                <input
                  placeholder="Mobile Number"
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="number"
                />
                <input
                  placeholder="Preferred Language"
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal  leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
              </div>
              <button className="self-stretch h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex">
                <div className="w-[215px] h-[30px] text-center text-teal-600 text-2xl font-medium ">
                  Send Enquiry
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* states component is a shared component */}
      <States />
    </div>
  );
};

export default HomeBanner;
