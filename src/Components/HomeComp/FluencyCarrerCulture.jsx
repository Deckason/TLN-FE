import Image from "next/image";
import step1 from "../../Assets/Homepage/FluencyCarrerCulture/step1.png";
import step2 from "../../Assets/Homepage/FluencyCarrerCulture/step2.png";
import step3 from "../../Assets/Homepage/FluencyCarrerCulture/step3.png";
import FluencyCultureCard from "./FluencyCultureCard";
const FluencyCarrerCulture = () => {
  const datas = [
    {
      id: 1,
      title: "Register with us",
      description:
        "Complete our form with your details and language preference to register. Our team will then assist you with online classes, study materials, and more!",
      img: step1,
    },
    {
      id: 2,
      title: "Experience a free demo class",
      description:
        "Discover the power of learning with our complimentary demo class at your convenient time!",
      img: step2,
    },
    {
      id: 3,
      title: "Get started",
      description:
        "Love our demo- now pick and choose batches according to your flexibility and get started on your learning adventure!",
      img: step3,
    },
  ];
  return (
    <div className="bg-[#F6F3F3]">
      <section className="mb-[112px] ">
        <div className="w-full flex justify-center  items-center lg:h-[380px] h-[256px] bg-primary-color flex-col">
          <h1 className="text-center text-neutral-50 lg:text-5xl text-3xl px-8 font-bold lg:mb-[32px]">
            Fluency, Culture, Career & Beyond
          </h1>
          <h2 className="lg:text-[32px] p-4 text-[18px] text-center  text-neutral-50">
            From learning a new language to living it!
          </h2>
        </div>
      </section>

      <section className="pb-[112px]">
        <h1 className="text-stone-900 text-2xl font-bold  text-center mb-2">
          {" "}
          Let&apos;s embark on a Language Trip!
        </h1>
        <h1 className="text-neutral-500 text-2xl font-medium  text-center mb-2">
          {" "}
          Here are the steps
        </h1>
        <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
          {datas.map((data) => {
            return (
              <FluencyCultureCard
                key={data.id}
                datas={data}
              ></FluencyCultureCard>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FluencyCarrerCulture;
