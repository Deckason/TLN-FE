import whyLearnFrench from "../../../../Assets/FrenchPage/FrenchMain/whyLearnFrench.svg";
import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import Image from "next/image";

const WhyLearn = (data) => {
  return (
    <div className=" my-[112px]  flex items-center flex-col justify-center">
      <div className="text-black text-2xl font-bold lg:mb-[48px]">
        Why learn French?
      </div>
      <div className="2xl:max-w-[1440px] mx-auto min-h-[1016px] flex-col justify-start items-center  h-full w-full gap-14 inline-flex">
        <Image
          alt="whyLearnFrench"
          className="max-lg:w-[300px] mt-[80px] xl:hidden  mx-auto "
          src={whyLearnFrench}
        />
        <div className="2xl:max-w-[1640px]  w-full min-h-[902px] relative">
          <Image
            alt="whyLearnFrench"
            className="2xl:w-[470px]  2xl:h-[471px] xl:w-[376.5px] mt-[80px] hidden xl:block xl:left-1/2 2xl:left-[579px] top-[60px] mx-auto "
            src={whyLearnFrench}
          />
          <div className="left-0 top-0 xl:absolute justify-between items-start w-full p-5 flex md:flex-row flex-col gap-y-5 md:gap-5 lg:gap-0">
            <div className="min-h-[296px] pb-6 bg-white rounded-2xl shadow justify-start md:w-1/2 lg:w-full max-w-[405px] items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    Global communication
                  </div>
                </div>
                <div className="self-stretch min-h-[148px] max-h-[180px] px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch min-h-[148px] max-h-[180px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[148px] max-h-[180px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 2xl:text-xl font-normal  leading-7">
                        {" "}
                        French, with 275 million speakers globally, fosters
                        connections across French-speaking nations, enhancing
                        global understanding and communication opportunities for
                        children.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[296px] max-w-[405px] pb-6 bg-white rounded-2xl shadow md:w-1/2 lg:w-full justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    Cultural enrichment
                  </div>
                </div>
                <div className="self-stretch min-h-[148px] max-h-[180px] px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch min-h-[148px] max-h-[180px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[148px] max-h-[180px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 2xl:text-xl font-normal  leading-7">
                        Learning French exposes children to diverse cultures,
                        literature, cinema, and art. It is also tthe official
                        language of global bodies like the United Nations,
                        UNESCO, and the International Red Cross.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full top-[394px] xl:absolute justify-between items-start flex lg:px-[80px] px-5 md:px-10 md:gap-5 lg:gap-0 md:flex-row flex-col  w-full">
            <div className="min-h-[268px] md:w-1/2 lg:w-full max-w-[405px] lg:pb-6 pb-10 max-sm:mb-5 bg-white  rounded-2xl shadow justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    Career opportunities
                  </div>
                </div>
                <div className="self-stretch  min-h-[140px] max-h-[170px] px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch min-h-[140px] max-h-[170px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[140px] max-h-[170px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 2xl:text-xl font-normal  leading-7">
                        French proficiency is essential in global careers like
                        business, diplomacy, tourism, and hospitality, given the
                        significance of multilingual skills in today&apos;s
                        world.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[268px] md:w-1/2 lg:w-full max-w-[405px]  bg-white rounded-2xl lg:pb-6 pb-10 shadow justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch h-[88px] py-8 bg-secondary-color rounded-t-2xl flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    Educational advantages
                  </div>
                </div>
                <div className="self-stretch min-h-[140px] max-h-[170px] px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch min-h-[140px] max-h-[170px] rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch min-h-[140px] max-h-[170px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 2xl:text-xl font-normal  leading-7">
                        Learning French boosts cognitive skills like
                        problem-solving, critical thinking, multitasking, and
                        memory. Improved linguistic abilities benefit academic
                        performance across subjects.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:mt-5  max-sm:p-5 justify-center 2xl:mt-[112px] xl:mt-[250px]">
            <div className="max-w-[405px]  pb-6   bg-white rounded-2xl shadow justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch min-h-[88px] py-8 rounded-t-2xl bg-secondary-color  flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch text-center text-neutral-800 text-xl font-bold ">
                    Personal Growth
                  </div>
                </div>
                <div className="self-stretch h-28 px-4 flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch h-28 rounded-lg flex-col justify-start items-center gap-8 flex">
                    <div className="self-stretch h-28 flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-center text-neutral-500 2xl:text-xl font-normal  leading-7">
                        Learning a new language cultivates empathy, cultural
                        sensitivity, and self-confidence, fostering personal
                        growth and appreciation for diversity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-3.5  rounded-lg justify-center items-center gap-2.5 inline-flex">
          <BookAFreeDemoButton />
        </div>
      </div>
    </div>
  );
};

export default WhyLearn;
