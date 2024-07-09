import english from "../../Assets/Homepage/languages/english.png";
import french from "../../Assets/Homepage/languages/french.png";
import spanish from "../../Assets/Homepage/languages/spanish.png";
import german from "../../Assets/Homepage/languages/german.png";
import mandarin from "../../Assets/Homepage/languages/mandarin.png";
import japanese from "../../Assets/Homepage/languages/japanese.png";
import korean from "../../Assets/Homepage/languages/korean.png";
import Image from "next/image";
const CoursesWeOffer = () => {
  return (
    <div className="my-[126px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
      <h1 className="my-[40px] text-center self-stretch text-stone-900 2xl:text-[40px] xl:text-[40px] max-md:text-2xl max-xl:text-5xl text-[24px] font-bold ">
        Courses We Offer
      </h1>
      <section className="max-w-[1452px] min-h-[155px] justify-center shrink items-center flex-wrap xl:gap-x-[28px] gap-10 mx-10 lg:mx-auto flex">
        <div className="flex items-center xl:gap-x-[24px] gap-10 flex-wrap justify-center">
          <div className="xl:w-[155px] w-[135px] h-[135px] xl:h-[155px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
            <Image
              alt="english"
              className="xl:p-1  p-3.5"
              src={english}
            ></Image>
          </div>
          <div className="xl:w-[155px] w-[135px] h-[135px] xl:h-[155px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
            <Image alt="french" className="xl:p-1  p-3.5" src={french}></Image>
          </div>
          <div className="xl:w-[155px] w-[135px] h-[135px] xl:h-[155px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
            <Image
              alt="spanish"
              className="xl:p-1  p-3.5"
              src={spanish}
            ></Image>
          </div>
          <div className="xl:w-[155px] w-[135px] h-[135px] xl:h-[155px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
            <Image alt="german" className="xl:p-1  p-3.5" src={german}></Image>
          </div>
          <div className="xl:w-[155px] w-[135px] h-[135px] xl:h-[155px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
            <Image
              alt="ma ndarin"
              className="xl:p-1 p-3.5"
              src={mandarin}
            ></Image>
          </div>
          <div className="xl:w-[155px] w-[135px] h-[135px] xl:h-[155px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
            <Image
              alt="ja panese"
              className="xl:p-1 p-3.5"
              src={japanese}
            ></Image>
          </div>
          <div className="xl:w-[155px] w-[135px] h-[135px] xl:h-[155px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
            <Image alt="korean" className="xl:p-1  p-3.5" src={korean}></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesWeOffer;
