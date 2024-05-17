import Image from "next/image";

const UpcomingBatchCard = ({ data }) => {
  return (
    <div>
      <div className=" shadow-md hover:shadow-2xl transition duration-300 mx-4 lg:scale-100   p-4 flex-col justify-start items-start gap-2.5  rounded-xl  shadow-[#bab8b8]/40 flex">
        <div className="h-[160px] bg-[#F7DF10] rounded-t-xl flex items-center  w-full relative">
          <div className="bg-[#FFF00D] h-[60%] w-full absolute -z-0"></div>
          <Image
            alt="girlRashi"
            src={data.img}
            className="object-contain w-full h-full z-10"
          ></Image>
        </div>
        <div className="  rounded-b-lg flex-col justify-start w-full items-start gap-8 flex">
          <div className="self-stretch flex-col justify-start items-start  flex">
            <div className="self-stretch   flex-col justify-start items-start flex">
              <h1 className="self-stretch  text-stone-900 text-xl font-bold ">
                {data.name}
              </h1>
              <h2 className="self-stretch text-neutral-500  font-normal  leading-7">
                {data.language}
              </h2>
            </div>
            <div className=" w-full flex-col justify-start items-start flex">
              <div className="self-stretch  pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                  Batch Starts{" "}
                </div>
                <div className="text-stone-900  text-[15px] font-bold ">
                  {data.batch}
                </div>
              </div>
              <div className="self-stretch py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                <div className="w-[159px]  text-stone-900 text-base font-medium ">
                  Number of seats
                </div>
                <div className="text-stone-900  font-bold ">{data.seats}</div>
              </div>
              <div className="self-stretch py-5 border-b border-neutral-200 justify-between items-center flex">
                <div className="  text-stone-900 text-base font-medium ">
                  Timing
                </div>
                <div className="lg:w-[335px]  flex-col justify-center items-end gap-[13px] inline-flex">
                  <div className="self-stretch text-right text-stone-900 text-nowrap  text-sm font-bold ">
                    {data.timing}
                  </div>
                </div>
              </div>
              <div className="self-stretch  py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                <div className="w-[120px] h-[23px] text-stone-900 text-base font-medium ">
                  Certification{" "}
                </div>
                <div className="text-stone-900  text-sm font-bold ">
                  {data.certificate}
                </div>
              </div>
            </div>
          </div>
          <button className="flex justify-center  w-full">
            <div className="w-[150px] h-[50px] shadow-md hover:shadow-xl transition duration-300 px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-nowrap text-neutral-50 text-xl font-medium ">
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
