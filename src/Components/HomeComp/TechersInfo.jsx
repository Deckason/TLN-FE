import BookAFreeDemoButton from "../../Shared/BookAFreeDemoButton";
import PrachiImg from "../../Assets/Homepage/TeachersInfo/Prachi.svg";
import Saiman from "../../Assets/Homepage/TeachersInfo/Saiman.svg";
import Rashi from "../../Assets/Homepage/TeachersInfo/Rashi.svg";
import Image from "next/image";
import GetStartedHomeButton from "../../Shared/buttons/GetStartedHomeButton";
const TechersInfo = () => {
  return (
    <div className="pt-[40px] lg:pb-[112px] flex flex-col justify-center items-center px-[18px] sm:px-[72px] lg:px-10 2xl:px-[100px] 3xl:mx-auto">
      <div className="max-w-[1681px] lg:p-[16px] justify-center items-center 4xl:gap-[72px] gap-[16px] lg:gap-[40px] flex-col 4xl:flex-row flex ">
        <div className="w-full 4xl:w-[490px] flex-col justify-center items-center gap-10 max-4xl:self-start  inline-flex">
          
          <div className="self-start 4xl:h-full flex-col justify-start items-start gap-4 4xl:gap-8 flex xl:z-30 w-full">
            <div className="self-start flex-col justify-start items-start gap-[8px] flex text-[#1E1E1E] text-[24px]/[29px] sm:text-[30px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[72px] font-bold">
              <p>Inspiring.</p>
              <p>Dedicated.</p>
              <p>Knowledgeable.</p>
            </div>
            <div className="self-stretch text-[#1E1E1E] text-[14px]/[17px] font-medium lg:text-lg lg:font-normal 2xl:text-[20px]/[28px]">
              Meet our team of over 200+ internationally certified trainer who
              bring learning to life! With their expertise, they transform every
              lesson into a fun and engaging experience, creating a warm and
              welcoming environment where students thrive.
              <br />
            </div>
          </div>

          <div className="self-stretch max-4xl:hidden h-[58px] flex-col inset-x-0 bottom-0 justify-start items-start gap-2.5 flex">
            <GetStartedHomeButton />
          </div>
        </div>
        <div className="w-full opacity-100 gap-x-1 lg:gap-x-4 flex-grow h-full flex xl:z-20">
          <div className="w-[50.75%] relative h-full rounded lg:rounded-2xl">
            <Image
              alt="Prachi"
              src={PrachiImg}
              width={450}
              height={450}
              className="w-full object-cover h-full rounded lg:rounded-2xl "
            ></Image>
            <div className="w-full h-[50.62px] absolute bottom-0 flex-col flex justify-center items-center bg-gradient-to-b from-black/10 to-black/10 rounded-bl rounded-br">
              <div className="text-white text-[14px]/[17px] sm:text-[14px]/[17px] md:text-[24px]/[26px] lg:text-[34px]/[36px] xl:text-[44px]/[46px] 2xl:text-[54px]/[66px] font-bold ">
                Prachi
              </div>
              <div className="text-white font-[400] text-[9.4px]/[11.4px] sm:text-[12px]/[24px] md:text-[21px]/[29px] lg:text-[26px]/[34px] xl:text-[31px]/[39px] 2xl:text-[36px]/[44px] mt-2 sm:mb-[20px] md:mb-[40px] lg:mb-[60px] xl:mb-[80px] 2xl:mb-[100px]">
                French Trainer
              </div>
            </div>
          </div>
          <div className="w-[24.5%] h-full rounded relative lg:rounded-2xl">
            <Image
              alt="Saiman"
              src={Saiman}
              width={500}
              height={500}
              className="w-full object-cover h-full rounded lg:rounded-2xl"
            ></Image>
            <div className="w-full h-[50.62px] absolute bottom-0 flex-col flex justify-center items-center bg-gradient-to-b from-black/10 to-black/10 rounded-bl rounded-br">
              <div className="text-white text-[14px]/[17px] sm:text-[14px]/[17px] md:text-[24px]/[26px] lg:text-[34px]/[36px] xl:text-[44px]/[46px] 2xl:text-[54px]/[66px] font-bold -mb-[20px] sm:mb-0 lg:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                Samihan
              </div>
              {/* <div className="text-white text-[9.36px] font-normal ">
                French Trainer
              </div> */}
            </div>
          </div>
          <div className="w-[24.5%] relative h-full   rounded lg:rounded-2xl">
            <Image
              alt="Saiman"
              src={Rashi}
              width={500}
              height={500}
              className="w-full object-cover h-full rounded lg:rounded-2xl"
            ></Image>
            <div className="w-full h-[50.62px] absolute bottom-0 sm:bo flex-col flex justify-center items-center bg-gradient-to-b from-black/10 to-black/10 rounded-bl rounded-br">
              <div className="text-white text-[14px]/[17px] sm:text-[14px]/[17px] md:text-[24px]/[26px] lg:text-[34px]/[36px] xl:text-[44px]/[46px] 2xl:text-[54px]/[66px] font-bold -mb-[20px] sm:mb-0 lg:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                Rashi
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col inset-x-0 bottom-0 justify-start items-start">
        <GetStartedHomeButton />
      </div>
    </div>
  );
};

export default TechersInfo;
