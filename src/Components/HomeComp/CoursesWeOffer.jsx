"use client";
import english from "../../Assets/Homepage/languages/english.png";
import french from "../../Assets/Homepage/languages/french.png";
import spanish from "../../Assets/Homepage/languages/spanish.png";
import german from "../../Assets/Homepage/languages/german.png";
import mandarin from "../../Assets/Homepage/languages/mandarin.png";
import japanese from "../../Assets/Homepage/languages/japanese.png";
import korean from "../../Assets/Homepage/languages/korean.png";
import Image from "next/image";
import Link from "next/link";

const CoursesWeOffer = () => {
  return (
    <div className="my-[126px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
      <h1 className="my-[40px] text-center self-stretch text-stone-900 2xl:text-[40px] xl:text-[40px] max-md:text-2xl max-xl:text-5xl text-[24px] font-bold">
        Courses We Offer
      </h1>
      <section className="max-w-[1452px] min-h-[150px] justify-center items-center xl:gap-x-[28px] gap-10 lg:mx-2 mx-10 flex">
        <div className="flex items-center xl:gap-x-[32px] gap-10 shrink sm:justify-center flex-wrap">
          <Link href="/Languages/English">
            <div className="xl:w-[150px] w-[115px] h-[115px] xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
              <Image alt="english" className="xl:p-1 p-3.5" src={english} />
            </div>
          </Link>
          <Link href="/Languages/French">
            <div className="xl:w-[150px] w-[115px] h-[115px] xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
              <Image alt="french" className="xl:p-1 p-3.5" src={french} />
            </div>
          </Link>
          <Link href="/Languages/Spanish">
            <div className="xl:w-[150px] w-[115px] h-[115px] xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
              <Image alt="spanish" className="xl:p-1 p-3.5" src={spanish} />
            </div>
          </Link>
          <Link href="/Languages/German">
            <div className="xl:w-[150px] w-[115px] h-[115px] xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
              <Image alt="german" className="xl:p-1 p-3.5" src={german} />
            </div>
          </Link>
          <Link href="/Languages/Mandarin">
            <div className="xl:w-[150px] w-[115px] h-[115px] xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
              <Image alt="mandarin" className="xl:p-1 p-3.5" src={mandarin} />
            </div>
          </Link>
          <Link href="/Languages/Japanese">
            <div className="xl:w-[150px] w-[115px] h-[115px] xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
              <Image alt="japanese" className="xl:p-1 p-3.5" src={japanese} />
            </div>
          </Link>
          <Link href="/Languages/Korean">
            <div className="xl:w-[150px] w-[115px] h-[115px] xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
              <Image alt="korean" className="xl:p-1 p-3.5" src={korean} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoursesWeOffer;
