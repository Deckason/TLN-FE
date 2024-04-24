import Image from "next/image";
import step1 from "@/Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "@/Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "@/Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "@/Assets/FrenchPage/FrenchMain/step3.png";

import HowItWorksCard from "./HowItWorksCard";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
const HowItWorks = () => {
  const datas = [
    {
      id: 1,
      title: "Register with us",
      description:
        "Fill out our form with your details and your preferred language to learn with us.",
      img: step1,
    },
    {
      id: 2,
      title: "Talk To Our Expert",
      description:
        "Connect with our Academic Counsellors for personalized guidance.",
      img: step2,
    },
    {
      id: 3,
      title: "Get A Free Demo",
      description:
        "Experience our platform firsthand with a complimentary demo.",
      img: step3,
    },
    {
      id: 4,
      title: "Get Started With Us",
      description:
        "Love our demo- now pick and choose batches according to your flexibility and get started on your learning adventure with us.",
      img: step4,
    },
  ];
  return (
    <div className="bg-[#F6F3F3] w-full flex justify-center flex-col items-center py-[112px]">
      <section className="">
        <h1 className="text-stone-900 text-[40px] font-bold  text-center mb-2">
          How it works?
        </h1>

        <div className=" flex  flex-wrap justify-center gap-1 mx-auto w-full lg:gap-[18px]   items-center mt-[48px] ">
          {datas.map((data) => {
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
