import BookAFreeDemoButton from "../../Shared/BookAFreeDemoButton";
import PrachiImg from "../../Assets/Homepage/TeachersInfo/Prachi.svg";
import Saiman from "../../Assets/Homepage/TeachersInfo/Saiman.svg";
import Rashi from "../../Assets/Homepage/TeachersInfo/Rashi.svg";
import Image from "next/image";
const TechersInfo = () => {
  return (
    <div className="lg:py-[112px] lg:flex block flex-col justify-center items-center p-20">
      <div className="max-w-[1681px] p-5 lg:h-[634px] justify-start items-center xl:gap-[72px] gap-[16px] lg:gap-[72px] flex-col 2xl:flex-row xl:flex-row lg:flex-row flex ">
        <div className="lg:w-[490px] 2xl:w-[490px] w-[350px] xl:w-[490px] lg:h-[495px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="self-stretch lg:h-[389px] flex-col justify-start items-start gap-4 lg:gap-8 flex">
            <div className="self-stretch lg:h-[190px] flex-col justify-start items-start gap-2 flex">
              <div className="text-stone-900 mb-6 text-2xl lg:text-[50px] font-bold ">
                Inspiring.
              </div>
              <div className="text-stone-900 mb-6 text-2xl lg:text-[50px] font-bold ">
                Dedicated
              </div>
              <div className="text-stone-900 mb-2 text-2xl lg:text-[50px] font-bold ">
                Knowledgeable.
              </div>
            </div>
            <div className="self-stretch lg:h-[167px] text-stone-900 text-sm font-medium lg:text-lg lg:font-normal  leading-7">
              Meet our team of over 200+ internationally certified trainer who
              bring learning to life! With their expertise, they transform every
              lesson into a fun and engaging experience, creating a warm and
              welcoming environment where students thrive.
              <br />
            </div>
          </div>
          <div className="self-stretch max-lg:hidden h-[58px] flex-col justify-start items-start gap-2.5 flex">
            <BookAFreeDemoButton />
          </div>
        </div>
        <div className="w-full opacity-100 gap-x-4 flex-grow lg:h-[560px] h-fit  flex">
          <div className="w-[50%] relative h-full  rounded lg:rounded-2xl">
            <Image
              alt="Prachi"
              src={PrachiImg}
              width={450}
              height={450}
              className="w-full h-[185px] object-cover lg:h-full rounded lg:rounded-2xl"
            ></Image>
            <div className="w-full h-[50.62px]   absolute bottom-0 flex-col flex justify-center items-center bg-gradient-to-b from-black/10 to-black/10 rounded-bl rounded-br">
              <div className="text-white text-5xl mt-[-6rem] font-bold ">Prachi</div>
              <div className="text-white text-3xl mt-2  ">
                French Trainer
              </div>
            </div>
          </div>
          <div className="w-[25%]  h-full   rounded relative lg:rounded-2xl">
            <Image
              alt="Saiman"
              src={Saiman}
              width={500}
              height={500}
              className="w-full object-cover h-[185px] lg:h-full rounded lg:rounded-2xl"
            ></Image>
            <div className="w-full h-[50.62px]   absolute bottom-0 flex-col flex justify-center items-center bg-gradient-to-b from-black/10 to-black/10 rounded-bl rounded-br">
              <div className="text-white text-4xl mt-[-4rem] font-bold ">Samihan</div>
              {/* <div className="text-white text-[9.36px] font-normal ">
                French Trainer
              </div> */}
            </div>
          </div>
          <div className="w-[25%] relative h-full   rounded lg:rounded-2xl">
            <Image
              alt="Saiman"
              src={Rashi}
              width={500}
              height={500}
              className="w-full object-cover h-[185px] lg:h-full rounded lg:rounded-2xl"
            ></Image>
            <div className="w-full h-[50.62px]   absolute bottom-0 flex-col flex justify-center items-center bg-gradient-to-b from-black/10 to-black/10 rounded-bl rounded-br">
              <div className="text-white text-4xl mt-[-4rem] font-bold ">Rashi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechersInfo;
