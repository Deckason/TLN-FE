import Image from "next/image";
import arrowLeft from "../../../../Assets/Icons/arrowleft.svg";
import Link from "next/link";

const ClassLevelCard = ({ data }) => {
  return (
    <div className="max-md:my-4">
      <div className="w-full shadow-md hover:shadow-xl transition duration-300 rounded-xl max-md:h-full max-sm:min-h-full max-lg:h-[520px] min-h-[609px] 3xl:min-h-[500px]  flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-fit py-[72px] bg-secondary-color rounded-t-xl flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch text-center text-neutral-800 text-2xl font-bold ">
            {data?.title}
          </div>
          <div className="self-stretch text-center text-neutral-800 text-2xl font-medium ">
            {data?.level}
          </div>
        </div>
        <div className="w-full h-full min-h-[100px]  lg:min-h-[300px] flex-col justify-between items-center gap-8 flex">
          <div className="self-stretch max-sm:max-h-full max-sm:min-h-full max-h-[230px] md:max-h-[255px] min-h-[280px] mx-5 md:min-h-[240px] 3xl:min-h-[200px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-500 text-xl font-normal leading-7">
              {data?.description}
            </div>
          </div>
          <div className="self-stretch mt-0 m-6 h-14 flex-col justify-center items-center gap-2.5 flex">
            <Link
              href={data?.link}
              className="shadow-md hover:shadow-xl transition duration-300 self-stretch h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-teal-600 text-xl font-normal leading-7">
                Learn more
              </div>
              <div className="w-6 h-6 relative">
                <Image alt="arrowLeft" src={arrowLeft}></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLevelCard;