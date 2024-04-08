import Image from "next/image";
import step1 from "@/Assets/Homepage/FluencyCarrerCulture/step1.png";
import step2 from "@/Assets/Homepage/FluencyCarrerCulture/step2.png";
import step3 from "@/Assets/Homepage/FluencyCarrerCulture/step3.png";
const FluencyCarrerCulture = () => {
  return (
    <div className="bg-[#F6F3F3]">
      <section className="mb-[112px]">
        <div className="w-full flex justify-center items-center h-[380px] bg-primary-color flex-col">
          <h1 className="text-center text-neutral-50 lg:text-5xl text-3xl font-bold mb-[32px]">
            Fluency, Culture, Career & Beyond
          </h1>
          <h2 className="lg:text-[32px] text-[25px] text-center  text-neutral-50">
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
        <div className="flex flex-wrap justify-center gap-[18px] items-center mt-[48px]">
          <div className="flex flex-col p-6 text-center bg-white rounded-2xl min-h-[548px] max-w-[548px] max-md:px-5">
            <Image alt="step1" src={step1} />
            <div className="flex flex-col pb-9 mt-4 rounded-lg border border-teal-600 min-h-[288px] border-solid max-md:max-w-full">
              <div className="justify-center py-4 text-3xl bg-teal-600 rounded-lg text-neutral-50 max-md:max-w-full">
                Step 1
              </div>
              <div className="flex flex-col px-4 mt-8 max-md:max-w-full">
                <div className="text-2xl font-medium text-neutral-800 max-md:max-w-full">
                  Register with us
                </div>
                <div className="mt-2 text-xl leading-7 text-neutral-500 max-md:max-w-full">
                  Complete our form with your details and language preference to
                  register. Our team will then assist you with online classes,
                  study materials, and more!
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 text-center bg-white rounded-2xl min-h-[548px] max-w-[548px] max-md:px-5">
            <Image alt="step1" src={step2} />
            <div className="flex flex-col pb-9 mt-4 rounded-lg border border-teal-600 min-h-[288px] border-solid max-md:max-w-full">
              <div className="justify-center py-4 text-3xl bg-teal-600 rounded-lg text-neutral-50 max-md:max-w-full">
                Step 2
              </div>
              <div className="flex flex-col px-4 mt-8 max-md:max-w-full">
                <div className="text-2xl font-medium text-neutral-800 max-md:max-w-full">
                  Experience a free demo class{" "}
                </div>
                <div className="mt-2 text-xl leading-7 text-neutral-500 max-md:max-w-full">
                  Discover the power of learning with our complimentary demo
                  class at your convenient time!
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 text-center bg-white rounded-2xl min-h-[548px] max-w-[548px] max-md:px-5">
            <Image alt="step1" src={step3} />
            <div className="flex flex-col pb-9 mt-4 rounded-lg border border-teal-600 min-h-[288px] border-solid max-md:max-w-full">
              <div className="justify-center py-4 text-3xl bg-teal-600 rounded-lg text-neutral-50 max-md:max-w-full">
                Step 2
              </div>
              <div className="flex flex-col px-4 mt-8 max-md:max-w-full">
                <div className="text-2xl font-medium text-neutral-800 max-md:max-w-full">
                  Get started{" "}
                </div>
                <div className="mt-2 text-xl leading-7 text-neutral-500 max-md:max-w-full">
                  Love our demo- now pick and choose batches according to your
                  flexibility and get started on your learning adventure!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FluencyCarrerCulture;
