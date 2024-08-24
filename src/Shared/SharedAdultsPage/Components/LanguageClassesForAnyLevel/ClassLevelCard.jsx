import Image from "next/image";
import  arrowLeft from "../../../../Assets/Icons/arrowleft.svg";
import Link from "next/link";

const ClassLevelCard = ({ data }) => {
console.log(data)
  return (
    <div>
      <div className="w-full shadow-md hover:shadow-2xl transition duration-300 rounded-xl max-md:h-full max-lg:h-[520px] min-h-[490px]  3xl:min-h-[500px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-fit py-[72px] bg-secondary-color rounded-t-xl flex-col justify-start items-center gap-2.5 flex">
          <div className="self-stretch text-center text-neutral-800 text-2xl font-bold ">
            {data?.title}
          </div>
          <div className="self-stretch text-center text-neutral-800 lg:text-xl text-2xl 2xl:text-2xl font-medium ">
            {data?.level}
          </div>
          

          <div className="self-stretch text-center text-teal-600 lg:text-xl text-2xl 2xl:text-2xl font-medium">
          {data?.price}
          {data.price == "On Request" ? "" : ""}
          </div>
          
        </div>
        <div className="w-full h-full min-h-[100px] lg:min-h-[280px] flex-col justify-between items-center gap-8 flex">
          <div className="self-stretch max-sm:max-h-full max-h-[230px] md:max-h-[255px] min-h-[280px] mx-5 md:min-h-[0px] 3xl:min-h-[200px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch text-center text-neutral-500 text-[20px]  2xl:text-xl xl:text-base font-normal leading-7">
              {data?.description}
            </div>
          </div>
          <div className="self-stretch mx-4 mb-4  h-14 flex-col justify-center items-center gap-2.5 flex">
            <Link
              href={data?.link}
              className="self-stretch shadow-md hover:shadow-xl transition duration-300 h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-teal-600 text-xl font-normal leading-7">
               {data?.enquire ? "Enquire Now": "Book a class"}
                 
              </div>
              <div className="w-6 h-6 relative">
           
              {/* <Image src={arrowLeft}  /> */}
                <Image src={arrowLeft} alt="arrowLeft" />
               
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLevelCard;
