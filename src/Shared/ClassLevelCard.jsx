import Image from "next/image";
import arrowLeft from "../../../../Assets/Icons/arrowleft.svg";
const ClassLevelCard = ({ data }) => {
  return (
    <div>
      <div className="w-full shadow-xl shadow-neutral-color/15 rounded-xl min-h-[559px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-fit py-[72px] bg-secondary-color rounded-t-xl flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch text-center text-neutral-800 text-2xl font-bold ">
            {data?.title}
          </div>
          <div className="self-stretch text-center text-neutral-800 lg:text-xl 2xl:text-2xl font-medium ">
            {data?.title2}
          </div>
        </div>
        <div className="w-full  h-full min-h-[100px] lg:min-h-[330px] flex-col justify-between items-center gap-8 flex">
          <div className="self-stretch max-h-[150px] md:max-h-[170px] min-h-[170px] mx-5 flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-500 lg:text-lg 2xl:text-xl font-normal leading-7">
              {data?.description}
            </div>
          </div>
          <div className="self-stretch mx-4 mb-4 h-14 flex-col justify-center items-center gap-2.5 flex">
            <div className="self-stretch h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-teal-600 text-xl font-normal leading-7">
                Learn more
              </div>
              <div className="w-6 h-6 relative">
                <Image alt="arrowLeft" src={arrowLeft}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLevelCard;
