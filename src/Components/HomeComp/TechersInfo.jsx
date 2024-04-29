import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import PrachiImg from "@/Assets/Homepage/TeachersInfo/Prachi.svg";
import Saiman from "@/Assets/Homepage/TeachersInfo/Saiman.svg";
import Rashi from "@/Assets/Homepage/TeachersInfo/Rashi.svg";
import Image from "next/image";
const TechersInfo = () => {
  return (
    <div className="py-[112px] lg:flex block flex-col justify-center items-center">
      <div className="max-w-[1681px] md:ms-10 md:me-2.5 h-[634px] justify-start items-center gap-[72px] flex ">
        <div className="w-[495px] h-[495px] flex-col justify-start items-start gap-12 inline-flex">
          <div className="self-stretch h-[389px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[190px] flex-col justify-start items-start gap-2 flex">
              <div className="text-stone-900 text-5xl font-bold ">
                Inspiring.
              </div>
              <div className="text-stone-900 text-5xl font-bold ">
                Dedicated.
              </div>
              <div className="text-stone-900 text-5xl font-bold ">
                Knowledgeable.
              </div>
            </div>
            <div className="self-stretch h-[167px] text-stone-900 text-lg font-normal  leading-7">
              Meet our team of over 200+ internationally certified trainer who
              bring learning to life! With their expertise, they transform every
              lesson into a fun and engaging experience, creating a warm and
              welcoming environment where students thrive.
              <br />
            </div>
          </div>
          <div className="self-stretch h-[58px] flex-col justify-start items-start gap-2.5 flex">
            <BookAFreeDemoButton />
          </div>
        </div>
        <div className="w-full opacity-100 gap-x-2.5 flex-grow h-[634px]  hidden md:flex lg:flex">
          <div className="w-[50%]  h-full   rounded-2xl">
            <Image
              alt="Prachi"
              src={PrachiImg}
              width={500}
              height={500}
              className="w-full object-cover h-full rounded-2xl"
            ></Image>
          </div>
          <div className="w-[25%]  h-full   rounded-2xl">
            <Image
              alt="Saiman"
              src={Saiman}
              width={500}
              height={500}
              className="w-full object-cover h-full rounded-2xl"
            ></Image>
          </div>
          <div className="w-[25%]  h-full   rounded-2xl">
            <Image
              alt="Saiman"
              src={Rashi}
              width={500}
              height={500}
              className="w-full object-cover h-full rounded-2xl"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechersInfo;
