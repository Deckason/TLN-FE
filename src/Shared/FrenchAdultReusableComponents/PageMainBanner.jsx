import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
const PageMainBanner = ({ bannerData }) => {
  return (
    <div className=" relative flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[67px] max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col  w-8/12 max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  {bannerData.title}
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 max-md:max-w-full relative mb-[32px]">
                  <div className="mb-8">{bannerData.para}</div>{" "}
                  <div className="max-sm:absoluteflex justify-star max-md:-ml-8 ">
                    <BookAFreeDemoButton />
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative hidden h-fit gap-5 lg:flex xl:flex  flex-wrap items-center justify-center">
              <div className="3xl:w-[399px] shadow-2xl  left-0 top-0 hidden xl:block xl:w-[399px] 2xl:right-3 h-[207px] rounded-lg ">
                {" "}
                <Image
                  alt="boy1"
                  src={bannerData.images[0]}
                  className="w-full object-fill rounded-lg h-full "
                ></Image>
              </div>

              <div className="3xl:w-[399px] shadow-2xl  right-0 top-0 hidden xl:block xl:w-[399px] 2xl:right-3 h-[207px] rounded-lg ">
                {" "}
                <Image
                  alt="boy1"
                  src={bannerData.images[2]}
                  className="w-full object-fill rounded-lg h-full "
                ></Image>
              </div>
              <div className="3xl:w-[399px] shadow-2xl xl:w-[399px] hidden xl:block h-[207px] rounded-lg ">
                <Image
                  alt="boy1"
                  src={bannerData.images[1]}
                  className="w-full object-fill rounded-lg h-full "
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

export default PageMainBanner;
