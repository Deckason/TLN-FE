import Image from "next/image";
import arrowLeft from "../../../../Assets/Icons/arrowleft.svg";
const WhyKidShouldLearnCard = ({ data }) => {
  return (
    <div>
      <div>
        <div className="w-full border shadow-md transition duration-300 hover:shadow-xl shadow-neutral-color/15 rounded-xl max-h-[460px] min-h-[442px] flex-col justify-start items-center gap-8  inline-flex max-md:p-3 p-6">
          <div className="self-stretch h-[212px]  rounded-xl flex-col justify-start  items-center gap-2.5 flex">
            <Image
              alt="levelImages"
              className="w-full h-full rounded-xl object-cover"
              src={data?.img}
            ></Image>
          </div>

          <div className="w-full  h-full   lg:min-h-[149px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-neutral-800 max-lg:text-lg text-xl 2xl:text-2xl font-medium ">
              {data?.title}
            </div>
            <div className="self-stretch max-h-[170px] h-full max-lg:max-h-[240px] min-h-[130px]  flex-col mb-3 justify-start items-center gap-2 flex">
              <div className="self-stretch text-center text-neutral-500 lg:text-lg 2xl:text-xl  font-normal leading-7">
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyKidShouldLearnCard;
