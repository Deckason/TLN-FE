import Image from "next/image";

const UpcomingBatchCard = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="max-w-[540px]  lg:scale-100   p-4 flex-col justify-start items-start gap-2.5 shadow-2xl rounded-xl  shadow-[#bab8b8]/40 flex">
        <div className="h-[240px] bg-[#F7DF10] rounded-t-xl flex items-center  w-full relative">
          <div className="bg-[#FFF00D] h-[60%] w-full absolute -z-0"></div>
          <Image
            alt="girlRashi"
            src={data?.img}
            className="object-contain w-full h-full z-10"
          ></Image>
        </div>
        <div className="  rounded-b-lg flex-col justify-start items-start gap-16 flex">
          <div className="self-stretch min-h-[344px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[60px] px-4 flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[23px] text-stone-900 text-2xl font-bold ">
                {data?.name}
              </div>
              <div className="self-stretch h-[25px] text-neutral-500 text-xl font-normal  leading-7">
                {data?.language} Trainer
              </div>
            </div>
            <div className="h-[252px] flex-col justify-start items-start flex">
              <div className="self-stretch px-4 pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                  Batch Starts{" "}
                </div>
                <div className="text-stone-900 lg:text-xl text-[15px] font-bold ">
                  {data?.batch}
                </div>
              </div>
              <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                <div className="w-[159px] h-[23px] text-stone-900 text-base font-medium ">
                  Number of seats
                </div>
                <div className="text-stone-900 lg:text-xl font-bold ">
                  {data?.seats}
                </div>
              </div>
              <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center flex">
                <div className="w-[65px] h-[23px] text-stone-900 text-base font-medium ">
                  Timing
                </div>
                <div className="lg:w-[335px] w-[195px] flex-col justify-center items-end gap-[13px] inline-flex">
                  <div className="self-stretch text-right text-stone-900 text-nowrap lg:text-xl text-sm font-bold ">
                    {data?.timing}
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                <div className="w-[120px] h-[23px] text-stone-900 text-base font-medium ">
                  Certification{" "}
                </div>
                <div className="text-stone-900 lg:text-xl text-xs font-bold ">
                  {data?.certificate}
                </div>
              </div>
            </div>
          </div>
          <button className="flex justify-end  w-full">
            <div className="w-[183px] h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-neutral-50 text-2xl font-medium ">
                Enroll now
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBatchCard;
