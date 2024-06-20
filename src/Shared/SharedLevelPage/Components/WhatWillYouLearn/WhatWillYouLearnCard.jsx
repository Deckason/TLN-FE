import GreenTick from "../../../../Assets/SharedLevelPage/GreenTick.svg";
import Image from "next/image";
const WhatWillYouLearnCard = ({ cardData, i }) => {
  // console.log(cardData);
  return (
    <div
      className={`  my-[52px]  w-full flex lg:flex-row xl:flex-row ${
        i == 1 ? "flex-col-reverse" : "flex-col"
      } p-5 justify-between `}
    >
      <div
        className={`${
          i % 2 !== 0 && "order-2"
        }  flex mb-5 justify-center w-full items-center`}
      >
        <Image alt="levelimage" className="w-full" src={cardData?.img}></Image>
      </div>
      <div className={`${i % 2 !== 0 && "order-1"}  w-full`}>
        <h1 className="text-2xl font-bold mb-[23px]">{cardData?.title}</h1>
        <div className="  w-full flex-col flex gap-y-2 ">
          {cardData?.ListData?.map((data, i) => (
            <div key={i} className="flex   gap-2 w-full">
              <div className="min-w-9  -mt-1 flex justify-center items-start ">
                <Image
                  alt="GreenTick"
                  src={GreenTick}
                  className="w-full"
                ></Image>
              </div>
              <h1 className=" 2xl:text-xl text-neutral-color ">{data}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWillYouLearnCard;
