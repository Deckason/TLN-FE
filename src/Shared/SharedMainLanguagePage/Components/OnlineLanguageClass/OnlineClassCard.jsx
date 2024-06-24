import Image from "next/image";
import arrowLeft from "../../../../Assets/Icons/arrowleft.svg";
import Link from "next/link";
const OnlineClassCard = ({ data }) => {
  return (
    <div className="  h-[600px]">
      {" "}
      <div
        className="w-full shadow-md hover:shadow-xl transition duration-300  rounded-xl min-h-[509px] flex-col h-full justify-start items-center gap-8 inline-flex p-4 max-md:p-6
    "
      >
        <div className="h-[313px]  rounded-xl flex-col justify-start max-md:max-h-[213px] items-center gap-2.5 flex">
          <Image
            alt="levelImages"
            className="w-full h-full rounded-xl object-cover"
            src={data?.img}
          ></Image>
        </div>

        <div className="w-full flex-grow h-full   max-lg:max-h-[350px]  flex-col justify-start items-center lg:gap-8 gap-2 flex">
          <div className="self-stretch text-center text-neutral-800 lg:text-lg max-lg:text-2xl 2xl:text-2xl font-medium ">
            {data?.title}
          </div>
          <div className="self-stretch  h-full max-lg:max-h-[240px]   flex-col mb-3 justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-500  text-xl font-normal leading-7">
              {data?.description}
            </div>
          </div>
          <div className="self-stretch mb-2  h-14 flex-col justify-center items-center gap-2.5 flex">
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

export default OnlineClassCard;
