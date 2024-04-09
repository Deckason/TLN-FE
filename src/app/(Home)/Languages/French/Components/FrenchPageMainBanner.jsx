import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
import girl1 from "@/Assets/FrenchPage/FrenchMain/girl1.png";
import boy1 from "@/Assets/FrenchPage/FrenchMain/boy1.png";
import girl2 from "@/Assets/FrenchPage/FrenchMain/girl2.png";
import frenchFlag from "@/Assets/FrenchPage/FrenchMain/frenchFlag.png";
const FrenchPageMainBanner = () => {
  return (
    <div className="  flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[67px] max-w-[1681px]  mx-auto mb-[26px] w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                  Online French Classes
                </div>
                <div className="mt-2 text-xl leading-7 max-md:max-w-full mb-[32px]">
                  Step into the world of our{" "}
                  <span className="font-bold leading-6">
                    online French classes!
                  </span>{" "}
                  Whether you're starting from scratch or polishing your already
                  impressive French skills, our tailored and interactive courses
                  are crafted just for you. Bid farewell to traditional
                  classroom setups and say bonjour to personalised instruction,
                  flexible scheduling, and immersive learning experiences with
                  our top-notch online French courses. With our team of expert
                  trainers by your side, you'll smoothly navigate the ins and
                  outs of French grammar, expand your vocabulary, engage in
                  lively conversations, and dive deep into the rich culture of
                  the Francophone world. Prepare to dive headfirst into the
                  elegance of the French language and experience the thrill of
                  mastering French at your own pace with our 1:1 or Group Online
                  French Classes.
                </div>
                <BookAFreeDemoButton />
              </div>
            </div>
            <div className=" relative flex-grow">
              <Image
                alt="homePageBannerGirl"
                className="absolute -left-[200px]"
                src={girl1}
              ></Image>
              <div className="w-[318px] shadow-2xl bg-green-400 absolute right-36 h-[165.75px] rounded-2xl ">
                <Image
                  alt="boy1"
                  src={boy1}
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="w-[83px] h-[83px]  absolute right-8 top-5 rounded-full">
                {" "}
                <Image
                  alt="boy1"
                  src={frenchFlag}
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="w-[318px] shadow-2xl bg-purple-400 absolute right-0 top-32 h-[165.75px] rounded-2xl ">
                {" "}
                <Image
                  alt="boy1"
                  src={girl2}
                  className="w-full h-full object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <States />
    </div>
  );
};

export default FrenchPageMainBanner;
