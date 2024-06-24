import Image from "next/image";
import arrowLeft from "../../../..//Assets/Icons/arrowleft.svg";
import Link from "next/link";

const PreapareForExamCard = ({ data }) => {
  return (
    <div className="h-full">
      <div className="w-auto shadow-md hover:shadow-xl transition duration-300 rounded-xl  h-full max-xl:h-[620px] min-h-[509px]  xl:min-h-[580px] flex-col justify-center items-center gap-2 inline-flex p-4 max-md:p-6">
        <div className="self-stretch h-[200px]  rounded-xl flex-col justify-start  items-center gap-2.5 flex">
          <Image
            alt="levelImages"
            className="w-full h-full rounded-xl object-contain"
            src={data?.img}
          ></Image>
        </div>

        <div className="w-full  h-full max-md:max-h-[450px]  max-lg:max-h-[370px] lg:min-h-[295px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch text-center text-neutral-800 max-lg:text-2xl lg:text-2xl 2xl:text-2xl font-medium ">
            {data?.title}
          </div>
          <div className="self-stretch max-sm:max-h-full max-h-[250px] h-full max-lg:max-h-[240px] min-h-[240px]  flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-500 text-xl font-normal leading-7">
              {data?.description}
            </div>
          </div>
          <div className="self-stretch w-full my-2 h-14 flex-col justify-center items-center gap-2.5  relative  flex">
            <Link
              href={data?.link}
              className="self-stretch shadow-md hover:shadow-xl transition duration-300 h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-teal-600 text-xl font-normal  leading-7">
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

export default PreapareForExamCard;
