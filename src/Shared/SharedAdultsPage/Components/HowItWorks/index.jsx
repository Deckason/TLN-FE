import Image from "next/image";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import HowItWorksCard from "./HowItWorksCard";
const HowItWorks = ({ HowItWorksCardData }) => {
  return (
    <div className="bg-[#F6F3F3] w-full flex justify-center flex-col items-center py-[112px]">
      <section className="">
        <h1 className="text-stone-900 text-[40px] font-bold  text-center mb-2">
          How it works?
        </h1>

        <div className=" flex  flex-wrap justify-center gap-1 mx-auto w-full lg:gap-[18px]   items-center mt-[48px] ">
          {HowItWorksCardData?.map((data) => {
            return <HowItWorksCard key={data.id} datas={data}></HowItWorksCard>;
          })}
        </div>
      </section>
      <div className=" mt-14">
        <BookAFreeDemoButton />
      </div>
    </div>
  );
};

export default HowItWorks;
