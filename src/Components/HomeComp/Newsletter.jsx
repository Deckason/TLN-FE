import hindustaniTimes from "@/Assets/Homepage/NewsLetterImg/image.png";
import girlImg from "../../Assets/Homepage/NewsLetterImg/girl.png";
import Image from "next/image";
const Newsletter = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-secondary-color mt-[102px] max-md:px-5">
      <div className="mt-7 w-full max-w-[1680px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-2.5 w-full bg-white rounded-2xl shadow-2xl text-stone-900 max-md:px-5 items-center max-md:mt-5 max-md:max-w-full">
              <Image
                alt="hindustaniTimes"
                src={hindustaniTimes}
                className="h-[40px] w-[300px]"
              ></Image>
              <div className="flex flex-col items-center justify-center  px-12 mx-8 mt-8 max-md:px-5 max-md:mx-2.5">
                <div className="text-3xl flex items-center justify-center text-nowrap">
                  We have made
                </div>
                <div className="self-center mt-1 text-5xl font-bold max-md:text-4xl">
                  NEWS
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-8 w-full bg-white rounded-2xl shadow-2xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center py-1.5 max-md:mt-8">
                      <Image
                        alt="girlImg"
                        className="h-full rounded-lg w-full object-cover "
                        src={girlImg}
                        width={300}
                        height={300}
                      ></Image>
                      <div className="mt-4 text-xl leading-7 text-primary-color">
                        Brand Stories
                      </div>
                      <div className="mt-1 text-base text-stone-300">
                        Published on Aug 03, 2022 06:58 PM 1ST
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch pb-9 text-xl max-md:mt-8 max-md:max-w-full">
                      <div className="text-3xl text-stone-900 max-md:max-w-full">
                        The Language Network Launches its PAN India Expansion
                        Campaign
                        <br />
                        <br />
                      </div>
                      <div className="mt-2 leading-7 text-neutral-500 max-md:max-w-full">
                        The institute has recently launched a new and effective
                        Learning Management System to improve aspects like
                        proper planning, implementing, and assessing students’
                        learning process. The Language Network has increased its
                        hiring activities and has also set up a second
                        workspace.
                      </div>
                      <div className="mt-5 text-primary-color max-md:max-w-full">
                        <span className="text-neutral-500">
                          Reads our full story
                        </span>{" "}
                        <span className="font-bold leading-6 text-teal-600">
                          Here
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
