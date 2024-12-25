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
  const languages = [
    { href: "/Languages/English", alt: "english", src: english },
    { href: "/Languages/French", alt: "french", src: french },
    { href: "/Languages/Spanish", alt: "spanish", src: spanish },
    { href: "/Languages/German", alt: "german", src: german },
    { href: "/Languages/Mandarin", alt: "mandarin", src: mandarin },
    { href: "/Languages/Japanese", alt: "japanese", src: japanese },
    { href: "/Languages/Korean", alt: "korean", src: korean },
  ];

  return (
    <div className="my-[126px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-auto">
      <h1 className="max-lg:px-4 my-[40px] text-center self-stretch text-stone-900 text-[24px]/[29px] lg:text-[40px]/[48.01px] md:text-3xl xl:text-[50px]/[60px]  2xl:text-[60px]/[72px]  font-bold">
        Courses We Offer
      </h1>
      <section className="max-w-[1452px] min-h-[150px] justify-center items-center xl:gap-x-[28px] gap-10 lg:mx-2 mx-10 flex">
        <div className="flex items-center justify-center xl:gap-x-[32px] gap-10 shrink sm:justify-center flex-wrap w-full">
          {languages.map((language) => (
            <Link href={language.href} key={language.alt}>
              <div className=" w-[115px] md:w-[95px] xl:w-[140px] 2xl:w-[150px] h-[115px] md:h-[95px] xl:h-[140px] 2xl:h-[150px] rounded-full border border-neutral-200 flex items-center justify-center p-3 lg:shadow-md hover:shadow-xl transition duration-300">
                <Image
                  alt={language.alt}
                  className="xl:p-1 p-3.5"
                  src={language.src}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesWeOffer;
