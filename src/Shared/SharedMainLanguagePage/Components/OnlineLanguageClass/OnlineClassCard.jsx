import Image from "next/image";
import arrowLeft from "@/Assets/Icons/arrowleft.svg";
import Link from "next/link";
const OnlineClassCard = ({ data }) => {
  return (
    <div>
      <div className="w-full shadow-xl shadow-neutral-color/15 rounded-xl min-h-[509px] flex-col justify-start items-center gap-8  inline-flex p-4">
        <div className="self-stretch h-[212px]  rounded-xl flex-col justify-start  items-center gap-2.5 flex">
          <Image
            alt="levelImages"
            className="w-full h-full rounded-xl object-cover"
            src={data?.img}
          ></Image>
        </div>
        <div className="w-full  h-full   max-lg:max-h-[350px] lg:min-h-[295px] flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch text-center text-neutral-800 max-lg:text-lg text-lg 2xl:text-2xl font-medium ">
            {data?.title}
          </div>
          <div className="self-stretch max-h-[170px] h-full max-lg:max-h-[240px] min-h-[130px]  flex-col mb-3 justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-500  2xl:text-xl  font-normal leading-7">
              {data?.description}
            </div>
          </div>
          <div className="self-stretch mx-4 mb-4 h-14 flex-col justify-center items-center gap-2.5 flex">
            <Link
              href={data?.link}
              className="self-stretch h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
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

export default OnlineClassCard;
